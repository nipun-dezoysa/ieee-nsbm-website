"use client";
import duothanImg from "@/assets/hero-images/duothan4.0.jpg";
import EventCard from "@/components/index/event-card";
import HeroCarousel from "@/components/index/hero-section";
import ShapeFuture from "@/components/index/shape-future";
import ExcomSection from "@/components/wie-cs/ex-com-section";
import PageIntro from "@/components/wie-cs/page-intro";
import PastExcomSection from "@/components/wie-cs/past-excom-section";
import React from "react";

import DVC from "@/assets/bc-and-excom/dvc.png";

function page() {
  const carrouselImages = [
    {
      image: duothanImg,
      text: "Test",
    },
  ];

  const pastExcom = [
    {
      name: "Lihini Nisansala",
      position: "Chairperson",
      imgUrl: DVC,
    },
    {
      name: "Name",
      position: "Position",
      imgUrl: DVC,
    },
    {
      name: "Name",
      position: "Position",
      imgUrl: DVC,
    },
    {
      name: "Name",
      position: "Position",
      imgUrl: DVC,
    },
    {
      name: "Name",
      position: "Position",
      imgUrl: DVC,
    },
  ];
  return (
    <>
      <HeroCarousel cimages={carrouselImages} bgColor="wieLight" />
      <PageIntro
        title="Women In Engineering"
        subTitle="IEEE WOMEN IN ENGINEERING AFFINITY GROUP OF NSBM"
        description="IEEE Women in Engineering (WIE) of NSBM is one of the largest academic
          organizations dedicated to promoting women engineers and scientists,
          as well as to inspiring girls to follow their academic interests to a
          career in engineering."
      />
      <EventCard />
      <ExcomSection
        title="Executive Committee 2021/22"
        description="The Women’s Executive Board is designed to help the Techie Girls to
        drive better decisions, gain fearless confidence and achieve their
        biggest outcomes with intention and passion. We intend to increase
        women's access to the technology sector and we are making the initial
        steps in that direction by hosting motivational sessions for Women in
        Tech."
        imgUrl={DVC}
      />
      <PastExcomSection
        title="Executive Committee 2020/21"
        excoms={pastExcom}
      />
      <PastExcomSection
        title="Newly Appointed Executive Committee 2022/23"
        excoms={pastExcom}
      />
      <PastExcomSection title="Past Executive Committee" excoms={pastExcom} />
      <ShapeFuture />
    </>
  );
}

export default page;
