import TwentyThreeExcom from "@/components/excom-page-tabs/2023-excom";
import TwentyFourExcom from "@/components/excom-page-tabs/2024-excom";
import TwentyFiveExcom from "@/components/excom-page-tabs/2025-excom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function Excom() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-center mt-10 mb-5">
        EXECUTIVE COMMITTEE
      </h1>
      <p className=" w-auto lg:w-[1200px] my-6 text-center">
        The Executive Committee of the IEEE NSBM Student Branch consists of the
        Chair, the Vice Chair, the Secretary, Founders, and fellow
        representatives from the Board. The purpose of the Executive Committee
        is to manage the daily operations of the community. They are authorized
        to establish and upgrade the rules, procedures, restrictions,
        resolutions, and requirements of the Board, as well as the IEEE NSBM
        Student Branch.
      </p>
      <Tabs
        defaultValue="2025"
        className="container mx-auto mt-3 max-w-[390px] md:max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px]"
      >
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="2025">2025/26</TabsTrigger>
          <TabsTrigger value="2024">2024/25</TabsTrigger>
          <TabsTrigger value="2023">2023/24</TabsTrigger>
        </TabsList>
        <TabsContent value="2025">
          <TwentyFiveExcom />
        </TabsContent>
        <TabsContent value="2024">
          <TwentyFourExcom />
        </TabsContent>
        <TabsContent value="2023">
          <TwentyThreeExcom />
        </TabsContent>
      </Tabs>
    </div>
  );
}
