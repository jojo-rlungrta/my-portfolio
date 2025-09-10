import { useEffect, useState } from "react";
import styles from './Decorations.module.css';
import item1 from '../assets/portfolio_im02.png';
import item2 from '../assets/portfolio_im03.png';
import ufo1 from '../assets/portfolio_im04.png';
import ufo2 from '../assets/portfolio_im05.png';
import alien from '../assets/portfolio_im06.png';
import MenInBlack from '../assets/portfolio_im07.png';
import jojo1 from '../assets/portfolio_im01.png';
import jojo2 from '../assets/portfolio_im08.png';
import jojo3 from '../assets/portfolio_im09.png';
import jojo4 from '../assets/portfolio_im10.png';
import star1 from '../assets/portfolio_im11.png';
import star2 from '../assets/portfolio_im12.png';
import star3 from '../assets/portfolio_im13.png';

const Decorations = () => {
  const [scroll, setScroll] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [activeCharIndex, setActiveCharIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState({ item1: true, item2: true });
  const [maxScroll, setMaxScroll] = useState(0);
  const [spinState, setSpinState] = useState(false);

  const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
  const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  const isDesktop = windowSize.width >= 1024;

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      setMaxScroll(document.body.scrollHeight - window.innerHeight);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  const charData = [
    { img: jojo1, start: { x: windowSize.width / 2 - 128, y: 200 }, end: { x: windowSize.width - 100 - 128, y: 600 }, nextItem: 'item1', width: 128, height: 128, scrollRange: [200, 600] },
    { img: jojo2, start: { x: windowSize.width - 50 - 192, y: 600 }, end: { x: 100, y: 1400 }, nextItem: 'item2', width: 192, height: 192, scrollRange: [600, 1400] },
    { img: jojo3, start: { x: 100, y: 1400 }, end: { x: windowSize.width / 2 - 176 / 2, y: 3100 }, nextItem: 'jojo4', width: 176, height: 176, scrollRange: [1400, 3100] },
    { img: jojo4, start: { x: windowSize.width / 2 - 256 / 2, y: 3100 }, end: null, nextItem: null, width: 256, height: 256 },
  ];

  const itemData = {
    item1: { img: item1, pos: { x: windowSize.width - 100 - 128, y: 650 }, width: 128 },
    item2: { img: item2, pos: { x: 100, y: 1450 }, width: 112 },
  };

  const getCharPosition = (char: typeof charData[0]) => {
    if (!isDesktop || !char.end) return char.start;
    const startScroll = (char.scrollRange[0] / 3100) * maxScroll;
    const endScroll = (char.scrollRange[1] / 3100) * maxScroll;
    let t = Math.min(Math.max((scroll - startScroll) / (endScroll - startScroll), 0), 1);
    t = easeInOutQuad(t);
    const x = lerp(char.start.x, char.end.x, t);
    const y = lerp(char.start.y, char.end.y, t);
    return { x, y, t };
  };

  useEffect(() => {
    if (!isDesktop || activeCharIndex > 3) return;
    const currentChar = charData[activeCharIndex];
    const { t } = getCharPosition(currentChar);

    if (t >= 1) {
      // パワーアップ時に回転
      setSpinState(true);
      setTimeout(() => setSpinState(false), 500); // 0.5秒で2回転

      if (currentChar.nextItem === 'jojo4') {
        setActiveCharIndex(3);
      } else {
        setVisibleItems(prev => ({ ...prev, [currentChar.nextItem]: false }));
        setActiveCharIndex(prev => prev + 1);
      }
    }
  }, [scroll, activeCharIndex, windowSize, maxScroll, isDesktop]);

  const currentChar = charData[activeCharIndex];
  const pos = getCharPosition(currentChar);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* 固定装飾 */}
      <img src={star1} alt="star1" className="absolute top-8 right-0 w-16 lg:top-[400px] lg:-right-10 lg:w-80" />
      <img src={star2} alt="star2" className="absolute top-16 right-6 w-12 lg:top-[1200px] lg:-left-10 lg:w-[600px]" />
      <img src={star3} alt="star3" className="absolute -bottom-0 right-1/2 transform translate-x-1/2 lg:w-[100%]" />
      <img src={ufo1} alt="ufo1" className="absolute lg:top-[200px] lg:left-[150px] w-16 sm:w-24 lg:w-32" />
      <img src={ufo2} alt="ufo2" className="absolute lg:bottom-[1100px] right-[250px] w-20 sm:w-28 lg:w-36" />
      <img src={alien} alt="alien" className="absolute lg:bottom-[700px] left-[100px] w-24 sm:w-32 lg:w-40" />
      <img src={MenInBlack} alt="MenInBlack" className="absolute lg:bottom-[1350px] right-0 w-20 sm:w-28 lg:w-36" />

      {/* PCのみ */}
      {isDesktop && (
        <>
          {visibleItems.item1 && <img src={itemData.item1.img} alt="item1" className="absolute" style={{ top: itemData.item1.pos.y, left: itemData.item1.pos.x, width: itemData.item1.width }} />}
          {visibleItems.item2 && <img src={itemData.item2.img} alt="item2" className="absolute" style={{ top: itemData.item2.pos.y, left: itemData.item2.pos.x, width: itemData.item2.width }} />}

          {/* jojo1~3 */}
          {activeCharIndex < 3 && (
            <img
              src={currentChar.img}
              alt={`jojo${activeCharIndex + 1}`}
              className={`absolute ${spinState ? styles['spin-regular'] : ''}`}
              style={{ top: pos.y, left: pos.x, width: currentChar.width, height: currentChar.height }}
            />
          )}

          {/* jojo4 */}
          {activeCharIndex === 3 && (
            <>
              {/* 太陽の光エフェクト */}
              <div
                className={styles.sunrise}
                style={{ top: 3300 }} // jojo4 の位置に合わせて開始
              />

              {/* jojo4 本体 */}
              <img
                src={jojo4}
                alt="jojo4"
                className={`absolute ${spinState ? styles['spin-center'] : ''}`}
                style={{
                  top: 3100,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: charData[3].width,
                  height: charData[3].height,
                  // transform は CSS に任せる
                }}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Decorations;
