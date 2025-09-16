import { useEffect, useState } from "react";
import styles from './Decorations.module.css';

// 画像インポート
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
  const [scroll, setScroll] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [activeCharIndex, setActiveCharIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>({ item1: true, item2: true });
  const [maxScroll, setMaxScroll] = useState(0);
  const [spinState, setSpinState] = useState(false);
  const [jojo4Y, setJojo4Y] = useState(0);

  const isDesktop = windowSize.width >= 1024;

  const lerp = (start: number, end: number, t: number) => start + (end - start) * t;
  const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  /** ウィンドウサイズ & maxScroll 更新 */
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({ width, height });
      setMaxScroll(document.body.scrollHeight - height);
      setJojo4Y(document.body.scrollHeight * 0.8 + 200);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  /** スクロール監視（PCのみ） */
  useEffect(() => {
    if (!isDesktop) return;
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  /** キャラクター移動データ */
  const charData: CharData[] = [
    { img: jojo1, start: { x: windowSize.width / 2 - 128, y: 210 }, end: { x: windowSize.width - 100 - 128, y: 600 }, nextItem: 'item1', width: 128, height: 128, scrollRange: [200, 600] },
    { img: jojo2, start: { x: windowSize.width - 50 - 192, y: 600 }, end: { x: 100, y: 1600 }, nextItem: 'item2', width: 192, height: 192, scrollRange: [600, 1400] },
    { img: jojo3, start: { x: 100, y: 1600 }, end: { x: windowSize.width / 2 - 176 / 2, y: jojo4Y }, nextItem: 'jojo4', width: 176, height: 176, scrollRange: [1400, jojo4Y] },
    { img: jojo4, start: { x: windowSize.width / 2 - 256 / 2, y: jojo4Y }, end: null, nextItem: null, width: 240, height: 240 },
  ];

  /** アイテム位置 */
  const itemData: { [key: string]: ItemData } = {
    item1: { img: item1, pos: { x: windowSize.width - 100 - 128, y: 650 }, width: 128 },
    item2: { img: item2, pos: { x: 100, y: 1650 }, width: 112 },
  };

  /** キャラクター位置計算 */
  const getCharPosition = (char: CharData) => {
    if (!isDesktop || !char.end || !char.scrollRange) return { ...char.start, t: 0 };

    const startScroll = (char.scrollRange[0] / jojo4Y) * maxScroll;
    const endScroll = (char.scrollRange[1] / jojo4Y) * maxScroll;
    let t = Math.min(Math.max((scroll - startScroll) / (endScroll - startScroll), 0), 1);
    t = easeInOutQuad(t);

    return { x: lerp(char.start.x, char.end.x, t), y: lerp(char.start.y, char.end.y, t), t };
  };

  /** キャラ到達後の処理 */
  useEffect(() => {
    if (!isDesktop || activeCharIndex > 3) return;

    const currentChar = charData[activeCharIndex];
    const { t } = getCharPosition(currentChar);

    if (t >= 1) {
      setSpinState(true);
      setTimeout(() => setSpinState(false), 500);

      if (currentChar.nextItem === 'jojo4') {
        setActiveCharIndex(3);
      } else if (currentChar.nextItem?.startsWith('item')) {
        setVisibleItems(prev => ({
          ...prev,
          [currentChar.nextItem as string]: false
        }));
        setActiveCharIndex(prev => prev + 1);
      }
    }
  }, [scroll, activeCharIndex, windowSize, maxScroll, isDesktop, charData]);

  const currentChar = charData[activeCharIndex];
  const pos = getCharPosition(currentChar);
  const isBeforeMove = activeCharIndex === 0 && pos.t === 0;

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* 固定背景 */}
      <img src={star1} alt="" aria-hidden="true" className="absolute top-[300px] lg:top-[400px] right-0 w-60 lg:w-80" />
      <img src={star2} alt="" aria-hidden="true" className="absolute top-[2000px] lg:top-[1200px] -left-10 w-[300px] lg:w-[600px]" />
      <img src={star3} alt="" aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full lg:min-w-[1920px]" />
      <img src={ufo1} alt="" aria-hidden="true" className="absolute top-[620px] lg:top-[170px] right-[20px] lg:left-[150px] w-24 lg:w-32" />
      <img src={ufo2} alt="" aria-hidden="true" className="absolute bottom-[1150px] sm:bottom-[1000px] lg:bottom-[1100px] right-[50px] sm:right-[100px] lg:right-[250px] w-20 lg:w-36" />
      <img src={alien} alt="" aria-hidden="true" className="absolute bottom-[520px] sm:bottom-[580px] lg:bottom-[770px] left-[20px] lg:left-[100px] w-28 lg:w-40" />
      <img src={MenInBlack} alt="" aria-hidden="true" className="absolute bottom-[1400px] sm:bottom-[1300px] lg:bottom-[1350px] right-0 w-28 lg:w-36" />

      {/* SP用 jojo */}
      <img src={jojo3} alt="" aria-hidden="true" className="lg:hidden absolute top-[200px] sm:top-[150px] left-1/2 -translate-x-1/2 w-[120px] sm:w-[150px]" />
      <img src={jojo4} alt="" aria-hidden="true" className="lg:hidden absolute bottom-[calc(90*100vw/640)] sm:bottom-[calc(150*100vw/1024)] left-1/2 -translate-x-1/2 w-[120px] sm:w-[160px]" />
      <div
        className="lg:hidden absolute left-1/2 -translate-x-1/2 bottom-[calc(20*100vw/640)] sm:bottom-[calc(0*100vw/1024)] w-[130px] sm:w-[calc(300*100vw/1024)] h-[130px] sm:h-[calc(300*100vw/1024)] rounded-full -z-10"
        style={{ background: 'radial-gradient(circle, rgba(255,255,200,0.9) 30%, rgba(255,255,200,0) 70%)' }}
      />

      {/* PC画面 */}
      {isDesktop && (
        <>
          {visibleItems.item1 && <img src={itemData.item1.img} alt="item1" className="absolute" style={{ top: itemData.item1.pos.y, left: itemData.item1.pos.x, width: itemData.item1.width }} />}
          {visibleItems.item2 && <img src={itemData.item2.img} alt="item2" className="absolute" style={{ top: itemData.item2.pos.y, left: itemData.item2.pos.x, width: itemData.item2.width }} />}

          {/* 移動中のキャラクター */}
          {activeCharIndex < 3 && (
            <img
              src={currentChar.img}
              alt={`jojo${activeCharIndex + 1}`}
              className={`absolute ${spinState ? styles['spin-regular'] : ''} ${isBeforeMove ? styles.bounce : ''}`}
              style={{ top: pos.y, left: pos.x, width: currentChar.width, height: currentChar.height }}
            />
          )}

          {/* 最終キャラクター jojo4 */}
          {activeCharIndex === 3 && (
            <>
              <img src={jojo4} alt="jojo4" className={`absolute ${spinState ? styles['spin-center'] : ''}`} style={{ top: 'calc(90% - 180px)', left: '50%', transform: 'translateX(-50%)', width: charData[3].width, height: charData[3].height }} />
              <div className={styles.sunrise} style={{ top: '90%' }} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Decorations;
