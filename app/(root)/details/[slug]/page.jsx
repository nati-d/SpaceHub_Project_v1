"use client"
import { Carousel } from "@mantine/carousel";
import { Image, Text } from "@mantine/core";

const images = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
];

const DetailPage = () => {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} h={500} radius="md" />
    </Carousel.Slide>
  ));

  return (
    <div className="px-32 ">
      <Carousel withIndicators>{slides}</Carousel>
      
    </div>
  );
};

export default DetailPage;
