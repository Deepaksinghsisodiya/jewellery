import React from 'react'

const VideoComponent = () => {
  return (
    <div>
         <div className="flex flex-col md:flex-row py-10 w-[90%] mx-auto gap-10">
          <div className="w-full md:w-[70%] h-[40vh] md:h-[70vh]">
            <video
              src="https://videos.pexels.com/video-files/4004214/4004214-hd_1920_1080_25fps.mp4"
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
            />
          </div>

          <div className="w-full md:w-[40%] flex flex-col items-start justify-center gap-6">
            <div className="text-3xl md:text-4xl font-bold text-start">
              Make it a <br className="hidden md:block" /> diamond year
            </div>
            <div className="text-start text-sm md:text-base">
              Your favorites just got finer. A new{" "}
              <br className="hidden md:block" />
              aesthetic - delicate designs are set with{" "}
              <br className="hidden md:block" />
              petite lab-grown diamonds, made to be{" "}
              <br className="hidden md:block" />
              layered, mixed and multiplied.
            </div>
            <div className="text-start">
              <button className="bg-black text-white px-6 py-2 text-xs">
                SHOP NEW DIAMOND
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default VideoComponent