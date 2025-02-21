import slider1 from "../../Assets/Slider1.png";
import loveSlider from "../../Assets/LoveSlider.png";

const RecentImg = () => {
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
  ];

  return (
    <>
    <div className="py-6">
    <div className="text-2xl text-center font-bold py-4">RECENTLY VIEWED</div>
    <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {images.map((img, index) => (
          <div key={index} className="p-3 text-center">
            <div className="flex ">
              <img src={img.src} alt={img.alt} className="w-30 h-72 mb-5" />
            </div>
            <div className="mt-3 text-xs text-gray-800">{img.content}</div>
            <div className="text-xs text-gray-800">{img?.title}</div>
            <div className="text-xs text-gray-800">{img?.price}</div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default RecentImg;
