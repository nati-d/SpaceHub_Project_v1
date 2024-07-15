import { BackgroundImage, Box } from "@mantine/core";
import React from "react";
import SearchBar from "@/components/SearchBar";

const Hero = () => {
  return (
    <div
      className="relative w-full flex items-center justify-center h-[70vh]"
      style={{
        background: `url('./Hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[70%] m-auto">
        <h1 className="text-7xl text-center text-white font-extrabold">
          Discover Your Ideal Workplace with{" "}
          <span className="text-green-10">SpaceHub</span>
        </h1>
        <p className="text-white text-center font-normal">
          Flexible and Innovative Workspaces Tailored for Entrepreneurs,
          Freelancers and Professionals
        </p>
      </div>
      <SearchBar />
    </div>
  );
};

export default Hero;
