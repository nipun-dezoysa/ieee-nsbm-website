import React from "react";

function fellowship() {
  return (
    <div className="container mx-auto max-w-[1170px] flex flex-col justify-center items-center space-y-5 px-5 xl:px-0">
      <h3 className="text-3xl font-bold text-center uppercase">
        Our fellowship
      </h3>

      <iframe
        src="https://www.youtube.com/embed/ihz8vom1XPg?si=6paJ6wkTi9SFNLgQ&controls=0&rel=0"
        className="aspect-video w-full"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}

export default fellowship;
