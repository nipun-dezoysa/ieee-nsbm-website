import JoinUsImage from "@/assets/join-us.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
function ShapeFuture() {
  return (
    <div className="px-4 mb-10">
      <div className="flex md:flex-row flex-col justify-center  gap-10 ">
        <Image
          width={600}
          height={123}
          src={JoinUsImage}
          alt="ieee-footer-logo"
        />

        <div className="space-y-2 max-w-[520px]   ">
          <h2 className="font-bold md:text-[2.653rem] text-[2.253rem] text-opacity-85  ">
            SHAPE THE FUTURE WITH US
          </h2>

          <p className="font-medium md:text-[1.232rem] text-[1.132rem] text-opacity-85 ">
            Creating isn’t just what we do; it’s how we think. We’re a community
            of creators, problem-solvers, and innovators, all eager to explore
            new ideas together. Ready to make your mark with us?
          </p>

          <Button className=" mx-4 mt-4 px-12 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors  ">
            Join us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShapeFuture;
