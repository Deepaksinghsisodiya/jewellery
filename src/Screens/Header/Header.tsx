import "swiper/css";
import ImagesComponent from "../ImagesComponent/ImagesComponent";
import SmallImgCarosel from "../../SmallImgCarosel/SmallImgCarosel";
import SingleSlideCarousel from "../../SingleSlideCurosel/SingleSlideCurosel";
import RecentImg from "../RecentImg/RecentImg";
import discover4 from "../../Assets/discover4.png";
import discover2 from "../../Assets/discover2.png";
import discover1 from "../../Assets/discover1.png";
import Carousel from "../../Curosel/Curosel";
import Footer from "../../Footer/Footer";
import SwiperComponent from "../Components/SwiperComponent/SwiperComponent";
import NavbarComponent from "../Components/NavbarComponent/NavbarComponent";
import MiddleImageComponent from "../Components/MiddleImageComponent/MiddleImageComponent";
import VideoComponent from "../Components/VideoComponent/VideoComponent";

const Header = () => {
  return (
    <>
      <div>
        <SwiperComponent />
        <NavbarComponent />
        <div>
          <div className="border-b border-gray-300"></div>
          <div className="w-[90%] mx-auto hidden sm:block">
            <img
              src="https://cdn.media.amplience.net/i/pandora/SS25_A_VdayPromo_Ecomm_M63_D_2_EN?fmt=auto&qlt=80&"
              alt=""
              className="w-full h-30 "
            />
          </div>
        </div>

        <div className="w-[90%] mx-auto mb-4">
          <Carousel />
        </div>

        <div>
          <ImagesComponent />
        </div>

        <MiddleImageComponent />
      </div>

      <div className="w-[90%] mx-auto">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold py-2 sm:py-3 md:py-4 text-start sm:text-left">
          TOP PICKS FOR YOUR VALENTINE
        </div>
        <div>
          <SmallImgCarosel />
        </div>

        <VideoComponent />
      </div>

      <div>
        <div className="w-[90%] mx-auto flex flex-col sm:block items-start sm:items-start text-start sm:text-left">
          <div className="text-4xl sm:text-4xl font-bold inline-block">
            DISCOVER
          </div>
          <div className="text-5xl sm:text-6xl font-bold mt-1 sm:mt-0 inline-block sm:block">
            GK JEWELERS
          </div>
        </div>

        <div className="w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 py-10">
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px]">
            <img
              src={discover1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px]">
            <img
              src={discover2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px]">
            <video
              src="https://videos.pexels.com/video-files/8247020/8247020-sd_360_640_25fps.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px]">
            <img
              src={discover4}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-[85%] mx-auto py-14 ">
        <SingleSlideCarousel />
      </div>

      <div className="border-b mx-8 border-gray "></div>
      <div>
        <RecentImg />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Header;
