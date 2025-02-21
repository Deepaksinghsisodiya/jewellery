import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../Assets/Slider1.png";
import loveSlider from "../Assets/LoveSlider.png";
import silverHeart from "../Assets/silverHeart.png";
import silverRing from "../Assets/silverRing.png";
const SmallImgCarosel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4, 
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 2,
        },
      },
    ],
  };

  const images = [
    {
      src: slider1,
      alt: "Image 1",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: loveSlider,
      alt: "NEW TOP | GIFT",
      content: "Image 2 Content",
      title: "Handwritten Love Charam",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: silverHeart,
      alt: "Image 3",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: silverRing,
      alt: "Image 4",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: slider1,
      alt: "Image 1",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: loveSlider,
      content: "Image 2 Content",
      title: "Handwritten Love Charam",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: silverHeart,
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: silverRing,
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: slider1,
      alt: "Image 1",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: loveSlider,
      alt: "NEW TOP | GIFT",
      content: "Image 2 Content",
      title: "Handwritten Love Charam",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: silverHeart,
      alt: "Image 3",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: silverRing,
      alt: "Image 4",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: slider1,
      alt: "Image 1",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: loveSlider,
      alt: "NEW TOP | GIFT",
      content: "Image 2 Content",
      title: "Handwritten Love Charam",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: silverHeart,
      alt: "Image 3",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: silverRing,
      alt: "Image 4",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: slider1,
      alt: "Image 1",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: loveSlider,
      alt: "NEW TOP | GIFT",
      content: "Image 2 Content",
      title: "Handwritten Love Charam",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: silverHeart,
      alt: "Image 3",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
    {
      src: silverRing,
      alt: "Image 4",
      content: "BEST SELLLER | TOP GIFT",
      title: "Moments Heart & Snake Chain Bracelet",
      price: "$ 56.34 $75 (-25%)",
    },
  ];

  return (
    <div className="w-full mx-auto relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="p-2 sm:p-3 text-center">
            {/* Image */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto mb-3 sm:mb-5 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
            />

            {/* Content */}
            <div className="mt-2 sm:mt-3 rounded-lg text-xs sm:text-sm md:text-base text-gray-800">
              {img.content}
            </div>

            {/* Title */}
            <div className="rounded-lg text-xs sm:text-sm md:text-base text-gray-800">
              {img?.title}
            </div>

            {/* Price */}
            <div className="rounded-lg text-xs sm:text-sm md:text-base text-gray-800">
              {img?.price}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// const CustomNextArrow = (props: any) => {
//   const { onClick } = props;
//   return (
//     <div
//       onClick={onClick}
//       className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer shadow-lg p-2 bg-white rounded-full"
//       style={{ marginRight: "-30px" }}
//     >
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
//         alt="Next"
//         className="w-6 h-6"
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       />
//     </div>
//   );
// };

// const CustomPrevArrow = (props: any) => {
//   const { onClick } = props;
//   return (
//     <div
//       onClick={onClick}
//       className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer shadow-lg p-2 bg-white rounded-full"
//       style={{ marginLeft: "-30px" }}
//     >
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
//         alt="Prev"
//         className="w-6 h-6"
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       />
//     </div>
//   );
// };

export default SmallImgCarosel;
