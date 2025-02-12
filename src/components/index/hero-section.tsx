"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";
import * as React from "react";

interface CarouselImage {
  image: StaticImageData;
  text: string;
}

interface HeroCarouselProps {
  cimages: CarouselImage[];
  bgColor: string;
  title?: string;
  gradient: string;
}

export default function HeroCarousel({
  cimages,
  bgColor,
  gradient,
  title,
}: HeroCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <>
      <Carousel plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          {cimages.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <div className="w-full xl:h-[85vh] aspect-video">
                <Image
                  src={item.image}
                  alt={`carousel image ${index + 1}`}
                  quality={70}
                  layout="fill"
                  className="object-cover object-center aspect-video"
                />
                <div
                  className={
                    "absolute bottom-0 w-full h-[170px] bg-gradient-to-t " +
                    gradient
                  }
                >
                  {title && (
                    <p className="absolute left-2 xl:left-10 bottom-0 text-xs xl:text-base text-white">
                      {item.text}
                    </p>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {title && (
          <div>
            <h1 className="absolute left-3 xl:left-10 xl:bottom-8 bottom-10 font-semibold text-white xl:text-3xl text-base">
              {title}
            </h1>
          </div>
        )}
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>

      {/* <div className="bg-gradient-to-b mt-[-2px] from-primaryLight from-50% h-[50px]" /> */}
      <div className={`${bgColor} mt-[-2px] h-[30px]`} />
    </>
  );
}
