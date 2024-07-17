"use client";
import BookCard from "@/components/BookCard";
import { Carousel } from "@mantine/carousel";
import { Badge, Grid, Image, Text } from "@mantine/core";
import { FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import ReviewCard from "@/components/ReviewCard";
import TabsSection from "@/components/Tabs";

const images = [
  "/Hero.jpg",
  "/portrait.jpg",
  "/building.jpg",
  
];

const DetailPage = () => {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} h={500} radius="md" />
    </Carousel.Slide>
  ));

  return (
    <div className="px-32 space-y-6">
      <Carousel withIndicators>{slides}</Carousel>

      <div>
        <Grid>
          <Grid.Col span={{ base: 12, lg: 8 }} className="space-y-5">
            <div className="flex justify-between space-y-5">
              <div>
                <h1 className="text-4xl font-semibold -mb-1">
                  4 Person Co-Working Space
                </h1>
                <Text size="xs" c="dimmed">
                  Addis Ababa,Ethiopia
                </Text>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex gap-3 px-4 py-2 bg-blue-20 w-max items-center justify-center rounded-sm">
                <IoTimeOutline size={50} color="#ccc" />
                <div>
                  <Text c="dimmed" fw={600} size="lg">
                    Duration
                  </Text>
                  <Text size="md">4 Days</Text>
                </div>
              </div>
              <div className="flex gap-3 px-4 py-2 bg-blue-20 w-max items-center justify-center rounded-sm">
                <IoTimeOutline size={50} color="#ccc" />
                <div>
                  <Text c="dimmed" fw={600} size="lg">
                    Duration
                  </Text>
                  <Text size="md">4 Days</Text>
                </div>
              </div>
              <div className="flex gap-3 px-4 py-2 bg-blue-20 w-max items-center justify-center rounded-sm">
                <IoTimeOutline size={50} color="#ccc" />
                <div>
                  <Text c="dimmed" fw={600} size="lg">
                    Duration
                  </Text>
                  <Text size="md">4 Days</Text>
                </div>
              </div>
              <div className="flex gap-3 px-4 py-2 bg-blue-20 w-max items-center justify-center rounded-sm">
                <IoTimeOutline size={50} color="#ccc" />
                <div>
                  <Text c="dimmed" fw={600} size="lg">
                    Duration
                  </Text>
                  <Text size="md">4 Days</Text>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="text-2xl font-bold">Property Description</h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur. Posuere ac accumsan mi
                in non metus eu mi dui. Lectus fusce sit nullam volutpat sit. A
                in pellentesque nulla aliquam fringilla mauris elementum. Ipsum
                tortor sed feugiat montes scelerisque id aenean. Rhoncus sed
                varius in eget ipsum sit vel venenatis faucibus. it nullam
                volutpat sit. A in pellentesque nulla aliquam fringilla mauris
                elementum. Ipsum tortor sed feugiat montes scelerisque id
                aenean. Rhoncus sed varius in eget ipsum sit vel venenatis
                faucibus.
              </p>
              <h1 className="text-2xl font-bold">Pricing Plan</h1>
              <hr />
            <TabsSection/>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-6xl">
                  4<span className="text-base">/5</span>
                </h1>
                <div className="flex gap-2">
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </div>
              </div>

              <ReviewCard />
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <BookCard />
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default DetailPage;
