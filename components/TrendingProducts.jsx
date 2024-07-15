import React from "react";
import ProductCard from "./ProductCard";
import { useCallback, useEffect, useState } from "react";
import { Carousel, Embla } from "@mantine/carousel";
import { Progress } from "@mantine/core";

const TrendingProducts = () => {
  
  return (
    <div className="px-32">
      <h1 className="text-3xl text-center font-bold mb-16">
        Explore Our Rental Workplaces
      </h1>
      <Carousel
        dragFree
        slideSize="20%"
        slideGap="md"
        initialSlide={5}
        loop
      >
        {" "}
        <Carousel.Slide><ProductCard/></Carousel.Slide>
        <Carousel.Slide><ProductCard/></Carousel.Slide>
        <Carousel.Slide><ProductCard/></Carousel.Slide>
        <Carousel.Slide><ProductCard/></Carousel.Slide>
        <Carousel.Slide><ProductCard/></Carousel.Slide>
        <Carousel.Slide><ProductCard/></Carousel.Slide>
        <Carousel.Slide><ProductCard/></Carousel.Slide>
        <Carousel.Slide><ProductCard/></Carousel.Slide>
        
      </Carousel>
    </div>
  );
};

export default TrendingProducts;
