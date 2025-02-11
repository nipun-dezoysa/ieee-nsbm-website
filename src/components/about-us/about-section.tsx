import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

interface SocialLink {
  platform: "facebook" | "linkedin" | "instagram";
  link: string;
}

interface AboutSectionProps {
  firstTitle: string;
  secondTitle: string;
  subtitle: string;
  description: string;
  imageSrc: StaticImageData;
  firstTitleColor?: string;
  socialLinks: SocialLink[];
}

function AboutSection({
  firstTitle,
  secondTitle,
  subtitle,
  description,
  imageSrc,
  firstTitleColor = "#00629b",
  socialLinks,
}: AboutSectionProps) {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <BsFacebook />;
      case "linkedin":
        return <BsLinkedin />;
      case "instagram":
        return <BsInstagram />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col m-auto w-full max-w-[1170px] px-4 mb-8 md:px-4 lg:px-0">
      <div className="flex flex-col m-auto w-full md:flex-row">
        <div className="md:w-3/4 md:pr-8">
          <div className="flex flex-wrap gap-2 w-full">
            <p
              className="text-6xl w-full text-center font-bold md:text-left"
              style={{ color: firstTitleColor }}
            >
              {firstTitle}
            </p>
            <p className="text-6xl w-full mb-2 text-center font-bold md:text-left">
              {secondTitle}
            </p>
          </div>
          <p className="text-2xl text-center mb-6 font-medium text-gray-600 md:text-left">
            {subtitle}
          </p>
          <p className="text-lg font-normal text-center md:text-left">
            {description}
          </p>
        </div>
        <div className="relative w-full md:w-1/4 min-h-[200px]">
          <Image
            src={imageSrc}
            alt="about section image"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex p-2 my-4 justify-center text-[20px] gap-2">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-opacity-0 hover:bg-opacity-10 bg-[#000000] duration-500"
          >
            {getIcon(link.platform)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AboutSection;
