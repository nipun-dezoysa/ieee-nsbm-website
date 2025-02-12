import DVC from "@/assets/bc-and-excom/dvc.png";
import placeholder from "@/assets/placeholder.png";
import Image from "next/image";
import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";

import { StaticImageData } from "next/image";

interface Counsellor {
  name: string;
  imageUrl: string | StaticImageData;
  title: string;
  position: string;
}

const counsellors: Counsellor[] = [
  {
    name: "Prof. Chaminda Rathnayake",
    imageUrl: DVC,
    title: "Deputy Vice Chancellor at NSBM",
    position: "Branch Counsellor",
  },
  {
    name: "Mr. Gayan Perera",
    imageUrl: placeholder,
    title: "Senior Lecturer at NSBM",
    position: "MIC - Faculty of Computing",
  },
  {
    name: "Ms. Kaumadee Samarakoon",
    imageUrl: placeholder,
    title: "Senior Lecturer at NSBM",
    position: "Advisor - IEEE of WIE Affinity Group of NSBM",
  },
];

const BranchCounsellors: React.FC = () => {
  return (
    <div className="container mx-auto max-w-[1170px] space-y-5 px-5 xl:px-0">
      <h3 className="text-3xl font-bold text-center">
        STUDENT BRANCH COUNSELLORS
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {counsellors.map((counsellor, index) => (
          <Card
            key={index}
            className="flex flex-col items-center overflow-hidden"
          >
            <div className="aspect-square w-full relative">
              <Image
                src={counsellor.imageUrl}
                alt={counsellor.name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="text-center my-5 space-y-1">
              <CardTitle className="text-xl font-semibold">
                {counsellor.name}
              </CardTitle>
              <CardDescription>{counsellor.title}</CardDescription>
              <p className="text-sm text-gray-500">{counsellor.position}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BranchCounsellors;
