import item1 from '../assets/portfolio_im02.png';
import item2 from '../assets/portfolio_im03.png';
import ufo1 from '../assets/portfolio_im04.png';
import ufo2 from '../assets/portfolio_im05.png';
import alien from '../assets/portfolio_im06.png';
import MenInBlack from '../assets/portfolio_im07.png';
import jojo1 from '../assets/portfolio_im08.png';
import jojo2 from '../assets/portfolio_im09.png';
import jojo3 from '../assets/portfolio_im10.png';
import star1 from '../assets/portfolio_im11.png';
import star2 from '../assets/portfolio_im12.png';
import star3 from '../assets/portfolio_im13.png';

const Decorations = () => {
  return (
    <div className="relative w-full h-full">
      <img src={item1} alt="item1" className="absolute top-1/3 left-[10%] w-12 sm:w-16 lg:w-20" />
      <img src={item2} alt="item2" className="absolute bottom-1/3 left-[20%] w-14 sm:w-20 lg:w-28" />

      <img src={ufo1} alt="ufo1" className="absolute top-[25%] right-[20%] w-16 sm:w-24 lg:w-32" />
      <img src={ufo2} alt="ufo2" className="absolute top-[40%] left-[65%] w-20 sm:w-28 lg:w-36" />
      <img src={alien} alt="alien" className="absolute bottom-[15%] right-[30%] w-24 sm:w-32 lg:w-40" />
      <img src={MenInBlack} alt="Men In Black" className="absolute bottom-[10%] left-[15%] w-20 sm:w-28 lg:w-36" />

      <img src={jojo1} alt="jojo1" className="absolute top-[10%] left-[40%] w-16 sm:w-24 lg:w-32" />
      <img src={jojo2} alt="jojo2" className="absolute top-[50%] left-[50%] w-16 sm:w-24 lg:w-32" />
      <img src={jojo3} alt="jojo3" className="absolute bottom-[20%] left-[60%] w-16 sm:w-24 lg:w-32" />

      <img src={star1} alt="star1" className="absolute top-8 left-4 w-16 sm:top-12 sm:left-8 sm:w-24 lg:top-20 lg:left-20 lg:w-32" />
      <img src={star2} alt="star2" className="absolute top-16 right-6 w-12 sm:top-24 sm:right-12 sm:w-20 lg:top-32 lg:right-24 lg:w-28" />
      <img src={star3} alt="star3" className="absolute bottom-12 right-8 w-20 sm:bottom-20 sm:right-12 sm:w-28 lg:bottom-28 lg:right-20 lg:w-36" />
    </div>
  );
};

export default Decorations;
