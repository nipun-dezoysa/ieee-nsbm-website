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
        {excoms.map((excom) => (
          <div className="w-[200px] text-center flex flex-col items-center">
            <div className="rounded-full w-[128px] h-[128px] overflow-hidden">
              <Image
                src={excom.imgUrl}
                alt="excom"
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold mt-1">{excom.name}</h2>
            <p className="text-lg">{excom.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastExcomSection;
