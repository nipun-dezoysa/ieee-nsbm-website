"use client";
import allexcom from "@/assets/hero-images/all-excom.jpg";
import duothanImg from "@/assets/hero-images/duothan4.0.jpg";
import duothanImg2 from "@/assets/hero-images/duothan4.1.jpg";
import duothanImg4 from "@/assets/hero-images/duothan4.3.jpg";
import skillshare from "@/assets/hero-images/skill-share.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

export default function HeroCarousel() {
  const cimages = [
    {
      image: duothanImg,
      text: "Discover a community where ideas meet innovation, and creativity knows no limits Where technology.",
    },
    {
      image: duothanImg2,
      text: "Empowering students to shape the future, one project at a time A place for curious minds and bold thinkers to connect and create.",
    },
    {
      image: allexcom,
      text: "Pushing boundaries, embracing challenges, and building a brighter future together. Innovation starts here, where students turn vision into reality.",
    },
    {
      image: duothanImg4,
      text: "Explore, create, and lead with a community that shares your drive Where every challenge is an opportunity to grow and inspire.",
    },
    {
      image: skillshare,
      text: "Building skills, making connections, and transforming ideas into action Redefining innovation through teamwork, passion, and dedication.",
    },
  ];

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

                <div className="absolute bottom-0 w-full h-[170px] bg-gradient-to-t from-primaryLight via-primaryLight flex justify-center items-center">
                  <div className="absolute bottom-0 w-full max-w-[1170px] min-h-[170px] grow h-full gap-3 flex flex-col justify-center items-start xl:p-0 p-10">
                    <h1 className="font-semibold text-white md:text-3xl text-xl">
                      Welcome to IEEE Student Branch of NSBM
                    </h1>
                    <p className="text-xs xl:text-base text-white">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>

      {/* <div className="bg-gradient-to-b mt-[-2px] from-primaryLight from-50% h-[50px]" /> */}
      <div className="bg-blue mt-[-2px] h-[30px]" />
    </>
  );
}
