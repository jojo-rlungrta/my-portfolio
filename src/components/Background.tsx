import Stars from "./Stars"; // 細かい星背景
import item1 from '../assets/portfolio_im02.png';
import item2 from '../assets/portfolio_im03.png';
import ultimate from '../assets/portfolio_im04.png';
import ufo from '../assets/portfolio_im05.png';
import alien from '../assets/portfolio_im06.png';
import star1 from '../assets/portfolio_im07.png';
import star2 from '../assets/portfolio_im08.png';
import star3 from '../assets/portfolio_im09.png';


const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 細かい星 */}
      <Stars />

      {/* 大きい星たち */}

      {/* アイテム1 */}
      <img
        src={item1}
        alt="item1"
        className="
          absolute
          top-1/3 left-[10%] w-12
          sm:w-16
          lg:w-20
        "
      />

      {/* アイテム2 */}
      <img
        src={item2}
        alt="item2"
        className="
          absolute
          bottom-1/3 left-[20%] w-14
          sm:w-20
          lg:w-28
        "
      />

      {/* 完全体 */}
      <img
        src={ultimate}
        alt="ultimate"
        className="
          absolute
          top-[20%] right-[25%] w-10
          sm:w-14
          lg:w-20
        "
      />

      {/* UFO */}
      <img
        src={ufo}
        alt="ufo"
        className="
          absolute
          top-1/2 left-[65%] w-24
          sm:w-32
          lg:w-40
        "
      />

      {/* エイリアン */}
      <img
        src={alien}
        alt="alien"
        className="
          absolute
          top-1/2 left-[65%] w-24
          sm:w-32
          lg:w-40
        "
      />

      {/* 星1（左上） */}
      <img
        src={star1}
        alt="star1"
        className="
          absolute
          top-8 left-4 w-16
          sm:top-12 sm:left-8 sm:w-24
          lg:top-20 lg:left-20 lg:w-32
        "
      />

      {/* 星2（右上） */}
      <img
        src={star2}
        alt="star2"
        className="
          absolute
          top-16 right-6 w-12
          sm:top-24 sm:right-12 sm:w-20
          lg:top-32 lg:right-24 lg:w-28
        "
      />

      {/* 星3（右下） */}
      <img
        src={star3}
        alt="star3"
        className="
          absolute
          bottom-12 right-8 w-20
          sm:bottom-20 sm:right-12 sm:w-28
          lg:bottom-28 lg:right-20 lg:w-36
        "
      />

    </div>
  );
};

export default Background;
