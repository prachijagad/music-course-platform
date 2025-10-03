"use client";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="z-20 h-auto md:h-[40rem] w-full text-center justify-center rounded-md flex flex-col relative overflow-hidden mx-auto md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 mt-40 md:mt-0 relative z-10 w-full text-center ">
        <h1 className="md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and tranform your music
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-black"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
