import React from "react";

function fellowship() {
  return (
    <div className="bg-secondaryLight pt-[4rem] pb-[4rem] flex flex-row justify-center ">
      <div className="space-y-20 max-w-[1170px] px-4 ">
        <div className="flex flex-col items-center gap-4">
          <h1 className="uppercase font-bold md:text-[4rem] text-[2.212rem] text-opacity-85 ">
            Our fellowship
          </h1>

          <div className="w-full flex justify-center">
            <div
              className="relative"
              style={{ width: "80%", paddingBottom: "45%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/ihz8vom1XPg?si=6paJ6wkTi9SFNLgQ&controls=0&rel=0"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fellowship;
