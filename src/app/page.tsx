import React from "react";

import allexcom from "@/assets/hero-images/all-excom.jpg";
import duothanImg from "@/assets/hero-images/duothan4.0.jpg";
import duothanImg2 from "@/assets/hero-images/duothan4.1.jpg";
import duothanImg4 from "@/assets/hero-images/duothan4.3.jpg";
import skillshare from "@/assets/hero-images/skill-share.jpg";

import BranchCounsellors from "@/components/index/branch-counsellors";
import EventCard from "@/components/index/event-card";
import ExecutiveCommittee from "@/components/index/executive-committee";
import Fellowship from "@/components/index/fellowship";
import HeroCarousel from "@/components/index/hero-section";
import ShapeFuture from "@/components/index/shape-future";
import VisionMissionSection from "@/components/index/vm-section";

export default function Home() {
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
  return (
    <div>
      <HeroCarousel
        cimages={cimages}
        bgColor="primaryLight"
        title="Welcome to IEEE Student Branch of NSBM"
      />
      <VisionMissionSection />
      <BranchCounsellors />
      <EventCard />
      <ExecutiveCommittee />
      <Fellowship />
      <ShapeFuture />
    </div>
  );
}
