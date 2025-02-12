import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  category: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "අයුබෝවන් IEEE 2022",
    date: "30th July, 2022",
    description:
      "The 'AYUBOWAN IEEE 2022' is a session that raises awareness among the university students on Introduction to IEEE Student Branch of NSBM, Advantages of IEEE Membership, and How to Become an IEEE Recognized individual.",
    imageUrl: "https://placehold.co/300x150.png",
    category: "sb",
  },
  {
    id: 2,
    title: "MAD FEST",
    date: "25th May, 2022",
    description:
      "MAD-Fest is a platform which opens for passionate Mobile Application Developers.",
    imageUrl: "https://placehold.co/300x150.png",
    category: "cs",
  },
  {
    id: 3,
    title: "INTERNATIONAL ARDUINO DAY CELEBRATION 2022 AT NSBM",
    date: "23rd March, 2022",
    description:
      "Arduino Day is a celebration of the Arduino Community and its achievements.",
    imageUrl: "https://placehold.co/300x150.png",
    category: "wie",
  },
  {
    id: 4,
    title: "DUOTHAN 2.0",
    date: "23rd February, 2022",
    description:
      "Duothan 2.0 is a hackathon that is organized by the IEEE Student Branch of NSBM which is competed by groups of two. This hackathon is organized with the explicit purpose of enhancing the coding skills of undergraduates.",
    imageUrl: "https://placehold.co/300x150.png",
    category: "cs",
  },
  {
    id: 5,
    title: "ROAD TO FULL STACK - MOBILE",
    date: "8th December, 2021",
    description:
      "Road To Full Stack - Mobile organized by IEEE Student Branch Affinity Group of NSBM is a great opportunity for you to begin the strategy of Mobile Application Development.",
    imageUrl: "https://placehold.co/300x150.png",
    category: "cs",
  },
];

const eventcard = ({ category }: { category?: string }) => {
  const filteredEvents = category
    ? events.filter((event) => event.category === category)
    : events;
  return (
    <div className="w-full max-w-[1170px] mx-auto space-y-5 px-5 xl:px-0">
      <h3 className="text-3xl font-bold text-center">LATEST EVENTS</h3>

      <Carousel className="w-full">
        <CarouselContent>
          {filteredEvents.map((event) => (
            <CarouselItem
              key={event.id}
              className="md:basis-1/2 sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-[30rem] shadow-lg rounded-lg overflow-hidden">
                <CardContent className="flex flex-col p-0 gap-5 h-full">
                  <div className="w-full h-full space-y-4">
                    <div className="aspect-video relative w-full">
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        layout="fill"
                      />
                    </div>

                    <div className="px-4 flex flex-col gap-1">
                      <h2 className="text-xl font-semibold ">{event.title}</h2>
                      <p className="text-sm text-gray-500 text-left">
                        {event.date}
                      </p>

                      <p className="text-sm">{event.description}</p>
                    </div>
                  </div>

                  <Button className="font-bold min-w-[130px] bg-primaryLight text-white rounded hover:bg-blue-700 transition-colors m-4">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="hidden xl:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default eventcard;
