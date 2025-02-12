import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";

interface Member {
  name: string;
  imageUrl: string;
  title: string;
  linkdInURL: string;
  facebookURL: string;
}

const members: Member[] = [
  {
    name: "Chathuranga Senarathne ",
    imageUrl: "https://placehold.co/200x200.png",
    title: "Chairperson - IEEE Student Branch",
    facebookURL: "#",
    linkdInURL: "#",
  },
  {
    name: "Dewmi Hathurusingha",
    imageUrl: "https://placehold.co/200x200.png",
    title: "Chairperson - IEEE Women In Engineering",
    facebookURL: "#",
    linkdInURL: "#",
  },
  {
    name: "Abhishek Bandaranaike",
    imageUrl: "https://placehold.co/200x200.png",
    title: "Chairperson - IEEE Computer Society",
    facebookURL: "#",
    linkdInURL: "#",
  },
];

const ExecutiveCommittee: React.FC = () => {
  return (
    <div className="container mx-auto max-w-[1170px] space-y-5 px-5 xl:px-0">
      <h3 className="text-3xl font-bold text-center uppercase">
        Meet the Executive Committee
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {members.map((member, index) => (
          <Card
            key={index}
            className="flex flex-col items-center overflow-hidden"
          >
            <div className="aspect-square w-full relative">
              <Image
                src={member.imageUrl}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="text-center my-5 space-y-1">
              <CardTitle className="text-xl font-semibold">
                {member.name}
              </CardTitle>
              <CardDescription>{member.title}</CardDescription>
              <div className="flex justify-center space-x-3">
                <Link href={member.facebookURL}>
                  <BsFacebook className="text-xl text-blue-600" />
                </Link>

                <Link href={member.linkdInURL}>
                  <BsLinkedin className="text-xl text-blue-700" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button className="w-[200px] px-4 py-2 bg-[#1f609b] text-white rounded hover:bg-[#316ca3] transition-colors duration-300">
          VIEW ALL MEMBERS
        </Button>
      </div>
    </div>
  );
};

export default ExecutiveCommittee;
