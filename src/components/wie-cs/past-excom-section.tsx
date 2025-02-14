"use client";
import { members } from "@/content/excom-member-data";
import Image from "next/image";
import React from "react";

function PastExcomSection({
  title,
  year,
  category,
}: { title: string; year: number; category: string }) {
  const filteredMembers = members.filter(
    (member) => member.category === category && member.year === year,
  );
  return (
    <div className="container mx-auto max-w-[1170px] px-4 mb-20">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {filteredMembers.map((excom, index) => (
          <div
            key={index}
            className="w-[200px] text-center flex flex-col items-center rounded-lg border shadow-sm overflow-hidden"
          >
            <div className="w-full h-[200px] ">
              <Image
                src={excom.imageUrl}
                alt={excom.name}
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-2">
              <h2 className="text-base font-bold">{excom.name}</h2>
              <p className="text-sm">{excom.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastExcomSection;
