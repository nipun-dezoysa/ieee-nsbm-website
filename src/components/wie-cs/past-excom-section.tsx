"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

function PastExcomSection({
  excoms,
  title,
}: {
  title: string;
  excoms: {
    name: string;
    position: string;
    imgUrl: StaticImageData | string;
  }[];
}) {
  return (
    <div className="container mx-auto max-w-[1170px] px-4 mb-20">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {excoms.map((excom, index) => (
          <div
            key={index}
            className="w-[200px] text-center flex flex-col items-center rounded-lg border shadow-sm overflow-hidden"
          >
            <div className="w-full h-[200px] ">
              <Image
                src={excom.imgUrl}
                alt="excom"
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-1">
              <h2 className="text-lg font-bold">{excom.name}</h2>
              <p className="text-md">{excom.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastExcomSection;
