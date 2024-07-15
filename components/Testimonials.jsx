import { Grid, Text } from "@mantine/core";
import React from "react";

const Testimonials = () => {
  return (
    <div className="px-32 py-10">
      <Grid>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <div className="px-12">
            <h1 className="font-bold text-5xl ">What Our Customers Says</h1>
            <p className="text-base font-normal ">
              Lorem ipsum dolor sit amet consectetur. Quis nam in nulla
              scelerisque sapien turpis. Viverra enim nibh nullam ipsum in.
              Lorem ipsum dolor sit amet consectetur. Augue eu volutpat turpis
              orci risus mauris. A velit quisque lacus eget vitae risus nulla
              urna egestas. Duis in in eget integer mauris sit orci congue.
            </p>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <div>
            <div className="border px-5 py-10 relative h-full w-[80%] m-auto flex flex-col justify-center">
              <div>
                <h3 className="text-2xl text-center  text-green-10 font-semibold">
                  Abebe Teklu
                </h3>
                <Text c="dimmed" size="sm" className="-mt-8 text-center">
                  CEO & Marketing Director
                </Text>
              </div>
              <p className="text-center text-sm">
                scelerisque sapien turpis. Viverra enim nibh nullam ipsum in.
                Lorem ipsum dolor sit amet consectetur. Augue eu volutpat turpis
                orci risus mauris. A velit quisque lacus eget vitae risus nulla
                urna egestas. Duis in in eget integer mauris sit orci congue.
              </p>
              <div
                className="absolute -top-10 w-[70px] h-[80px] rounded-md left-[45%]"
                style={{
                  background: `url('./portrait.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Testimonials;
