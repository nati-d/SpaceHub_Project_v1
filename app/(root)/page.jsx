"use client";
import Hero from "@/components/Hero";
import OurFeatures from "@/components/OurFeatures";
import Testimonials from "@/components/Testimonials";
import TrendingProducts from "@/components/TrendingProducts";
import { Grid } from "@mantine/core";
const HomePage = () => {
  return (
    <div className="space-y-20">
      <Hero />
      <div className="mt-40 px-32">
        <Grid>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <div className="space-y-10 py-10">
              <h1 className="text-5xl font-extrabold">
                Lorem ipsum dolor sit consectetur.{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Augue eu volutpat turpis
                orci risus mauris. A velit quisque lacus eget vitae risus nulla
                urna egestas. Duis in in eget integer mauris sit orci congue.
                Pretium vestibulum ullamcorper ac diam lobortis a. Eget justo
                eget dui duis arcu cursus arcu.urna egestas. Duis in in eget
                integer mauris sit orci congue. Pretium vestibulum ullamcorper
                ac diam lobortis a. Eget justo eget dui duis arcu cursus arcu.
              </p>
            </div>
            <div className="flex justify-between">
              <div className="w-max px-4 py-5">
                <h1 className="text-7xl font-extrabold ">20+</h1>
                <p className="font-thin text-sm text-center -mt-8">Clients</p>
              </div>
              <div className="w-max px-4 py-5">
                <h1 className="text-7xl font-extrabold ">20+</h1>
                <p className="font-thin text-sm text-center -mt-8">Clients</p>
              </div>
              <div className="w-max px-4 py-5">
                <h1 className="text-7xl font-extrabold ">20+</h1>
                <p className="font-thin text-sm text-center -mt-8">Clients</p>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <div
              style={{
                background: `url('/Hero.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-full h-full rounded-md"
            ></div>
          </Grid.Col>
        </Grid>
      </div>

      <OurFeatures/>
      <TrendingProducts/>
      <Testimonials/>
    </div>
  );
};

export default HomePage;
