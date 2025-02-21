import React from "react";
import braceLet from "../../Assets/handBracelet.png";
import ring from "../../Assets/gkRingGold.png";
import earRing from "../../Assets/earRingHd.png";
import necklace from "../../Assets/Necklaces.png";
import newArrives from "../../Assets/newArrives.png";
import charam from "../../Assets/CharamHd.png";

const ImagesComponent = () => {
  const images = [
    { src: charam, name: "CHARMS" },
    { src: braceLet, name: "BRACELETS" },
    { src: ring, name: "RINGS" },
    { src: earRing, name: "EARRINGS" },
    { src: necklace, name: "NECKLACES" },
    { src: newArrives, name: "NEW ARRIVALS" },
  ];

  return (
    <div className="w-[90%] mx-auto py-10">
      <div className="grid grid-cols-2 md:flex md:justify-center md:gap-6 gap-6 justify-items-center">
        {images.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.src}
              alt={item.name}
              className="h-36 w-44 transform transition-transform duration-300 hover:scale-110"
            />
            <span className="py-3 text-center text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesComponent;
