import duothanImg from "@/assets/hero-images/duothan4.0.jpg";
import HeroCarousel from "@/components/index/hero-section";
import PageIntro from "@/components/wie-cs/page-intro";
import React from "react";

function page() {
  const cimages = [
    {
      image: duothanImg,
      text: "Test",
    },
  ];
  return (
    <>
      <HeroCarousel cimages={cimages} bgColor="wieLight" />
      <PageIntro
        title="Women In Engineering"
        subTitle="IEEE WOMEN IN ENGINEERING AFFINITY GROUP OF NSBM"
        description="IEEE Women in Engineering (WIE) of NSBM is one of the largest academic
          organizations dedicated to promoting women engineers and scientists,
          as well as to inspiring girls to follow their academic interests to a
          career in engineering."
      />
    </>
  );
}

export default page;
