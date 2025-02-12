import JoinUsImage from "@/assets/join-us.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
function ShapeFuture() {
  return (
    <div className="px-5 xl:px-0">
      <div className="flex md:flex-row flex-col justify-center gap-10 items-center xl:item-start">
        <Image
          width={600}
          height={123}
          src={JoinUsImage}
          alt="ieee-footer-logo"
        />

        <div className="space-y-2 max-w-[520px]">
          <h3 className="text-xl md:text-3xl font-bold uppercase">
            SHAPE THE FUTURE WITH US
          </h3>

          <p className="font-medium text-opacity-85">
            Creating isn’t just what we do; it’s how we think. We’re a community
            of creators, problem-solvers, and innovators, all eager to explore
            new ideas together. Ready to make your mark with us?
          </p>

          <Button className="font-bold min-w-[130px] bg-primaryLight text-white rounded hover:bg-blue-700 transition-colors">
            Join us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShapeFuture;
