import React from "react";
import girlBracelet from "../../../Assets/girlBracelet.png";
import everyLove from "../../../Assets/everyLove.png";
import girlBraceletOpen from "../../../Assets/girlBraceletOpen.png";
import girlRing from "../../../Assets/girlRing.png";
const MiddleImageComponent = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4 justify-between w-[75%] mx-auto items-center lg:items-start">
        <div className="flex flex-row sm:flex-col text-center lg:text-start gap-1">
          <div className="text-lg sm:text-5xl font-bold">For every</div>
          <div className="text-lg sm:text-5xl font-bold">special</div>
          <div className="text-lg sm:text-5xl font-bold">moment</div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src={girlBracelet}
            alt=""
            className="h-72 w-60 lg:h-80 lg:w-64 object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <video
            src="https://videos.pexels.com/video-files/8183385/8183385-sd_360_640_30fps.mp4"
            className="h-72 w-60 lg:h-80 lg:w-64 object-cover"
            autoPlay
            loop
            muted
          />

          <img
            src={everyLove}
            alt=""
            className="h-72 w-60 lg:h-80 lg:w-64 object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={girlBraceletOpen}
            alt=""
            className="h-72 w-60 lg:h-80 lg:w-64 object-cover transform transition-transform duration-300 hover:scale-105"
          />

          <img
            src={girlRing}
            alt=""
            className="h-72 w-60 lg:h-80 lg:w-64 object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <video
            src="https://videos.pexels.com/video-files/6469640/6469640-uhd_1440_2116_30fps.mp4"
            className="h-72 w-60 lg:h-80 lg:w-64 object-cover"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleImageComponent;
