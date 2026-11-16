import { useEffect, useRef, useState } from "react";
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

const FLYING_HERO_SIZE = 176;
const LANDING_SIZE = 240;
// The lower boot sits slightly to the left of the highest point of the planet.
const LANDING_OVERLAP = 2;

const Decorations = () => {
  // ====== State management ======
  const decorationRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0); // Current scroll position
  const [{ width, maxScroll, landingY, pageHeight }, setLayout] = useState({
    width: 0,
    maxScroll: 0,
    landingY: 0,
    pageHeight: 0,
  });
  const [activeCharIndex, setActiveCharIndex] = useState(0); // Current character index
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>({ item1: true, item2: true, }); // Visible items
  const [spinState, setSpinState] = useState(false); // Spin animation flag

  const isDesktop = width >= 1024;

  // Linear interpolation
  const lerp = (start: number, end: number, t: number) =>
    start + (end - start) * t;

  // Easing function
  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  // ====== Watch window size & page height ======
  useEffect(() => {
    const decoration = decorationRef.current;
    const planet = planetRef.current;
    if (!decoration || !planet) return;

    const updateSize = () => {
      setLayout({
        width: window.innerWidth,
        maxScroll: Math.max(0, document.documentElement.scrollHeight - window.innerHeight),
        landingY: planet.offsetTop + LANDING_OVERLAP,
        pageHeight: decoration.clientHeight,
      });
      setScroll(window.scrollY);
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(decoration);
    observer.observe(planet);
    window.addEventListener("resize", updateSize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
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
      start: { x: width / 2 - 128, y: 210 },
      end: { x: width - 100 - 128, y: 600 },
      nextItem: "item1",
      width: 128,
      height: 128,
      scrollRange: [200, 600],
    },
    {
      img: jojo2,
      start: { x: width - 50 - 192, y: 600 },
      end: { x: 100, y: 1600 },
      nextItem: "item2",
      width: 160,
      height: 160,
      scrollRange: [600, 1400],
    },
    {
      img: jojo3,
      start: { x: 100, y: 1600 },
      end: { x: width / 2 - FLYING_HERO_SIZE / 2, y: landingY - FLYING_HERO_SIZE },
      nextItem: "jojo4",
      width: FLYING_HERO_SIZE,
      height: FLYING_HERO_SIZE,
      scrollRange: [1400, landingY],
    },
    {
      img: jojo4,
      start: { x: width / 2 - LANDING_SIZE / 2, y: landingY - LANDING_SIZE },
      end: null,
      nextItem: null,
      width: LANDING_SIZE,
      height: LANDING_SIZE,
    },
  ];

  // ====== Item positions ======
  const itemData: { [key: string]: ItemData } = {
    item1: { img: item1, pos: { x: width - 100 - 128, y: 650 }, width: 140 },
    item2: { img: item2, pos: { x: 100, y: 1650 }, width: 112 },
  };

  // ====== Calculate character position ======
  const getCharPosition = (char: CharData) => {
    if (!isDesktop || !char.end || !char.scrollRange || landingY <= 0 || maxScroll <= 0)
      return { ...char.start, t: 0 };
    const startScroll = (char.scrollRange[0] / landingY) * maxScroll;
    const endScroll = (char.scrollRange[1] / landingY) * maxScroll;
    const scrollPosition = scroll >= maxScroll - 1 ? maxScroll : scroll;
    let t = Math.min(
      Math.max((scrollPosition - startScroll) / (endScroll - startScroll), 0),
      1
    );
    t = easeInOutQuad(t);
    return { x: lerp(char.start.x, char.end.x, t), y: lerp(char.start.y, char.end.y, t), t };
  };

  const currentChar = charData[activeCharIndex];
  const pos = getCharPosition(currentChar);
  const nextItem = currentChar.nextItem;
  const isBeforeMove = activeCharIndex === 0 && pos.t === 0;
  const hasLanded = activeCharIndex === 3;

  // ====== Handle character arrival ======
  useEffect(() => {
    if (!isDesktop || pos.t < 1 || !nextItem) return;
    setSpinState(true);
    if (nextItem !== "jojo4") {
      setVisibleItems((prev) => ({ ...prev, [nextItem]: false }));
    }
    setActiveCharIndex((prev) => prev + 1);
  }, [isDesktop, pos.t, nextItem]);

  useEffect(() => {
    if (!spinState) return;
    const timer = window.setTimeout(() => setSpinState(false), 500);
    return () => window.clearTimeout(timer);
  }, [spinState, activeCharIndex]);

  // ====== Rocket settings (launch on page load, constant speed) ======
  const rocketSpeed = 200; // px/s
  const rocketDuration = pageHeight > 0 ? pageHeight / rocketSpeed : 0;

  return (
    <div ref={decorationRef} className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* Background */}
      <img src={star1} alt="" aria-hidden="true" className="absolute top-[270px] lg:top-[400px] right-0 w-60 lg:w-80" />
      <img src={star2} alt="" aria-hidden="true" className="absolute top-[2000px] lg:top-[1200px] -left-10 w-[300px] lg:w-[600px]" />
      <div ref={planetRef} className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 lg:min-w-[1920px]">
        <div
          className={`absolute inset-x-0 ${hasLanded ? "" : "lg:hidden"}`}
          style={{ bottom: `calc(100% - ${LANDING_OVERLAP}px)` }}
        >
          <img
            src={jojo4}
            alt=""
            className={`absolute bottom-0 left-1/2 w-[120px] -translate-x-1/2 sm:w-[160px] ${
              isDesktop && spinState ? styles["spin-center"] : ""
            }`}
            style={isDesktop ? { width: LANDING_SIZE, height: LANDING_SIZE } : undefined}
          />
          <div className={`hidden lg:block ${styles.sunrise}`} />
          <div className={`lg:hidden ${styles["sunrise-mobile"]}`} />
        </div>
        <img src={star3} alt="" width={1920} height={369} className="relative h-auto w-full" />
      </div>
      <img src={ufo1} alt="" aria-hidden="true" className="absolute top-[600px] sm:top-[550px] lg:top-[170px] right-[20px] lg:left-[150px] w-20 lg:w-28" />
      <img src={ufo2} alt="" aria-hidden="true" className="absolute bottom-[1500px] sm:bottom-[1050px] lg:bottom-[1350px] right-[20px] sm:right-[50px] lg:right-[100px] w-16 lg:w-28" />
      <img src={alien} alt="" aria-hidden="true" className="absolute bottom-[570px] sm:bottom-[620px] lg:bottom-[820px] left-[20px] lg:left-[100px] w-20 lg:w-40" />
      <img src={MenInBlack} alt="" aria-hidden="true" className="absolute top-[255px] sm:top-[250px] lg:top-[360px] right-[20px] sm:right-[120px] lg:right-[140px] w-12 sm:w-16 lg:w-24 rotate-45 sm:rotate-0" />

      {/* SP characters */}
      <img src={jojo3} alt="" aria-hidden="true" className="lg:hidden absolute top-[200px] sm:top-[150px] left-1/2 -translate-x-1/2 w-[120px] sm:w-[150px]" />
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
          {!hasLanded && (
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

        </>
      )}
    </div>
  );
};

export default Decorations;
