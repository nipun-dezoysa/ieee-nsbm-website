import React from "react";

function PageIntro({
  title,
  subTitle,
  description,
}: { title: string; subTitle: string; description: string }) {
  return (
    <section className="bg-[#fcf4ff]">
      <div className="container mx-auto max-w-[1170px] flex flex-col gap-4 my-12 justify-center items-center text-center  p-4 ">
        <h1 className="text-wieLight text-4xl lg:text-6xl font-bold text-center">
          {title}
        </h1>
        <h2 className="text-2xl md:text-xl ">{subTitle}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default PageIntro;
