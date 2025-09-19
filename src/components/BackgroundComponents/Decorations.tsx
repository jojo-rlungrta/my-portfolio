import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Decorations.module.css";

// Image imports
import item1 from "../../assets/portfolio_im02.webp";
import item2 from "../../assets/portfolio_im03.webp";
import ufo1 from "../../assets/portfolio_im04.webp";
import ufo2 from "../../assets/portfolio_im05.webp";
import alien from "../../assets/portfolio_im06.webp";
import MenInBlack from "../../assets/portfolio_im07.webp";
import jojo1 from "../../assets/portfolio_im01.webp";
import jojo2 from "../../assets/portfolio_im08.webp";
import jojo3 from "../../assets/portfolio_im09.webp";
import jojo4 from "../../assets/portfolio_im10.webp";
import star1 from "../../assets/portfolio_im11.webp";
import star2 from "../../assets/portfolio_im12.webp";
import star3 from "../../assets/portfolio_im13.webp";
import rocket from "../../assets/portfolio_im14.webp";

interface CharData {
  img: string;
  start: { x: number; y: number };
  end?: { x: number; y: number } | null;
  nextItem: string | null;
  width: number;
  height: number;
  scrollRange?: [number, number];
}

interface ItemData {
  img: string;
  pos: { x: number; y: number };
  width: number;
}

const Decorations = () => {
  // ====== State management ======
  const [scroll, setScroll] = useState(0); // Current scroll position
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 }); // Window size
  const [activeCharIndex, setActiveCharIndex] = useState(0); // Current character index
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>({ item1: true, item2: true, }); // Visible items
  const [maxScroll, setMaxScroll] = useState(0); // Maximum scrollable distance
  const [spinState, setSpinState] = useState(false); // Spin animation flag
  const [jojo4Y, setJojo4Y] = useState(0); // Jojo4 Y position
  const [pageHeight, setPageHeight] = useState(0); // Full page height

  const isDesktop = windowSize.width >= 1024;

  // Linear interpolation
  const lerp = (start: number, end: number, t: number) =>
    start + (end - start) * t;

  // Easing function
  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  // ====== Watch window size & page height ======
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      setWindowSize({ width, height });
      setMaxScroll(scrollHeight - height);
      setJojo4Y(scrollHeight * 0.8 + 250); // Jojo4 position = 80% of page + 250px
      setPageHeight(scrollHeight); // Full page height
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // ====== Scroll tracking (desktop only) ======
  useEffect(() => {
    if (!isDesktop) return;
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  // ====== Character movement data ======
  const charData: CharData[] = [
    {
      img: jojo1,
      start: { x: windowSize.width / 2 - 128, y: 210 },
      end: { x: windowSize.width - 100 - 128, y: 600 },
      nextItem: "item1",
      width: 128,
      height: 128,
      scrollRange: [200, 600],
    },
    {
      img: jojo2,
      start: { x: windowSize.width - 50 - 192, y: 600 },
      end: { x: 100, y: 1600 },
      nextItem: "item2",
      width: 160,
      height: 160,
      scrollRange: [600, 1400],
    },
    {
      img: jojo3,
      start: { x: 100, y: 1600 },
      end: { x: windowSize.width / 2 - 176 / 2, y: jojo4Y },
      nextItem: "jojo4",
      width: 176,
      height: 176,
      scrollRange: [1400, jojo4Y],
    },
    {
      img: jojo4,
      start: { x: windowSize.width / 2 - 256 / 2, y: jojo4Y },
      end: null,
      nextItem: null,
      width: 240,
      height: 240,
    },
  ];

  // ====== Item positions ======
  const itemData: { [key: string]: ItemData } = {
    item1: { img: item1, pos: { x: windowSize.width - 100 - 128, y: 650 }, width: 140 },
    item2: { img: item2, pos: { x: 100, y: 1650 }, width: 112 },
  };

  // ====== Calculate character position ======
  const getCharPosition = (char: CharData) => {
    if (!isDesktop || !char.end || !char.scrollRange)
      return { ...char.start, t: 0 };
    const startScroll = (char.scrollRange[0] / jojo4Y) * maxScroll;
    const endScroll = (char.scrollRange[1] / jojo4Y) * maxScroll;
    let t = Math.min(
      Math.max((scroll - startScroll) / (endScroll - startScroll), 0),
      1
    );
    t = easeInOutQuad(t);
    return { x: lerp(char.start.x, char.end.x, t), y: lerp(char.start.y, char.end.y, t), t };
  };

  // ====== Handle character arrival ======
  useEffect(() => {
    if (!isDesktop || activeCharIndex > 3) return;
    const currentChar = charData[activeCharIndex];
    const { t } = getCharPosition(currentChar);
    if (t >= 1) {
      setSpinState(true);
      setTimeout(() => setSpinState(false), 500);
      if (currentChar.nextItem === "jojo4") {
        setActiveCharIndex(3);
      } else if (currentChar.nextItem?.startsWith("item")) {
        setVisibleItems((prev) => ({
          ...prev,
          [currentChar.nextItem as string]: false,
        }));
        setActiveCharIndex((prev) => prev + 1);
      }
    }
  }, [scroll, activeCharIndex, windowSize, maxScroll, isDesktop, charData]);

  // Current character
  const currentChar = charData[activeCharIndex];
  const pos = getCharPosition(currentChar);
  const isBeforeMove = activeCharIndex === 0 && pos.t === 0;

  // ====== Rocket settings (launch on page load, constant speed) ======
  const rocketSpeed = 200; // px/s
  const rocketDuration = pageHeight > 0 ? pageHeight / rocketSpeed : 0;

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Background */}
      <img src={star1} alt="" aria-hidden="true" className="absolute top-[270px] lg:top-[400px] right-0 w-60 lg:w-80" />
      <img src={star2} alt="" aria-hidden="true" className="absolute top-[2000px] lg:top-[1200px] -left-10 w-[300px] lg:w-[600px]" />
      <img src={star3} alt="" aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full lg:min-w-[1920px]" />
      <img src={ufo1} alt="" aria-hidden="true" className="absolute top-[740px] sm:top-[600px] lg:top-[170px] right-[20px] lg:left-[150px] w-20 lg:w-28" />
      <img src={ufo2} alt="" aria-hidden="true" className="absolute bottom-[1250px] sm:bottom-[1050px] lg:bottom-[1350px] right-[20px] sm:right-[50px] lg:right-[100px] w-16 lg:w-28" />
      <img src={alien} alt="" aria-hidden="true" className="absolute bottom-[530px] sm:bottom-[580px] lg:bottom-[770px] left-[20px] lg:left-[100px] w-20 lg:w-40" />
      <img src={MenInBlack} alt="" aria-hidden="true" className="absolute top-[250px] sm:top-[250px] lg:top-[360px] right-[20px] sm:right-[120px] lg:right-[140px] w-12 sm:w-16 lg:w-24 rotate-45 sm:rotate-0" />

      {/* SP characters */}
      <img src={jojo3} alt="" aria-hidden="true" className="lg:hidden absolute top-[200px] sm:top-[150px] left-1/2 -translate-x-1/2 w-[120px] sm:w-[150px]" />
      <img src={jojo4} alt="" aria-hidden="true" className="lg:hidden absolute bottom-[calc(90*100vw/640)] sm:bottom-[calc(150*100vw/1024)] left-1/2 -translate-x-1/2 w-[120px] sm:w-[160px]" />
      <div
        className="lg:hidden absolute left-1/2 -translate-x-1/2 bottom-[calc(20*100vw/640)] sm:bottom-[calc(0*100vw/1024)] w-[130px] sm:w-[calc(300*100vw/1024)] h-[130px] sm:h-[calc(300*100vw/1024)] rounded-full -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,200,0.9) 30%, rgba(255,255,200,0) 70%)",
        }}
      />
      {/* Rocket (launch on page load, constant speed) */}
      <motion.img
        src={rocket}
        alt=""
        className="absolute right-[100px] sm:right-[180px] lg:right-[350px] bottom-[300px] w-[70px] sm:w-[80px] lg:w-[120px]"
        initial={{ y: 0, rotate: -60 }}
        animate={{ y: -pageHeight }}
        transition={{ duration: rocketDuration, ease: "linear" }}
      />
      {/* Desktop */}
      {isDesktop && (
        <>
          {/* Items */}
          {visibleItems.item1 && (
            <img
              src={itemData.item1.img}
              alt=""
              className="absolute"
              style={{
                top: itemData.item1.pos.y,
                left: itemData.item1.pos.x,
                width: itemData.item1.width,
              }}
            />
          )}
          {visibleItems.item2 && (
            <img
              src={itemData.item2.img}
              alt=""
              className="absolute"
              style={{
                top: itemData.item2.pos.y,
                left: itemData.item2.pos.x,
                width: itemData.item2.width,
              }}
            />
          )}

          {/* Moving character */}
          {activeCharIndex < 3 && (
            <img
              src={currentChar.img}
              alt=""
              className={`absolute ${spinState ? styles["spin-regular"] : ""
                } ${isBeforeMove ? styles.bounce : ""}`}
              style={{
                top: pos.y,
                left: pos.x,
                width: currentChar.width,
                height: currentChar.height,
              }}
            />
          )}

          {/* Final character jojo4 */}
          {activeCharIndex === 3 && (
            <>
              <img
                src={jojo4}
                alt=""
                className={`absolute ${spinState ? styles["spin-center"] : ""
                  }`}
                style={{
                  top: "calc(90% - 180px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: charData[3].width,
                  height: charData[3].height,
                }}
              />
              <div className={styles.sunrise} style={{ top: "90%" }} />
            </>
          )}

        </>
      )}
    </div>
  );
};

export default Decorations;
