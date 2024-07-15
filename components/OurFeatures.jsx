import { Grid } from "@mantine/core";
import React from "react";
import { SecurityScanOutlined } from "@ant-design/icons";

const OurFeatures = () => {
  return (
    <div className="bg-blue-20 w-full  px-32 py-10">
      <div className="w-[70%] mx-auto mb-6">
        <h1 className="font-bold text-6xl text-center">Our Features</h1>
        <p className="text-sm font-normal text-center -mt-8">
          Lorem ipsum dolor sit amet consectetur. Quis nam in nulla scelerisque
          sapien turpis. Viverra enim nibh nullam ipsum in. 
        </p>
      </div>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <div className="flex flex-col space-y-6">
            <div className="bg-white rounded-md px-8 py-5 space-y-2">
              <SecurityScanOutlined
                className="text-blue-10 text-xl"
                style={{ fontSize: "26px", color: "#3a7ff4" }}
              />
              <h1 className="text-xl font-bold">100% Secure</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Quis nam in nulla scele
              </p>
            </div>
            <div className="bg-white rounded-md px-8 py-5 space-y-2">
              <SecurityScanOutlined
                className="text-blue-10 text-xl"
                style={{ fontSize: "26px", color: "#3a7ff4" }}
              />
              <h1 className="text-xl font-bold">100% Secure</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Quis nam in nulla scele
              </p>
            </div>
            <div className="bg-white rounded-md px-8 py-5 space-y-2">
              <SecurityScanOutlined
                className="text-blue-10 text-xl"
                style={{ fontSize: "26px", color: "#3a7ff4" }}
              />
              <h1 className="text-xl font-bold">100% Secure</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Quis nam in nulla scele
              </p>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <div
            className="w-full h-full rounded-md"
            style={{
              background: `url('./building.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <div className="flex flex-col space-y-6">
            <div className="bg-white rounded-md px-8 py-5 space-y-2">
              <SecurityScanOutlined
                className="text-blue-10 text-xl"
                style={{ fontSize: "26px", color: "#3a7ff4" }}
              />
              <h1 className="text-xl font-bold">100% Secure</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Quis nam in nulla scele
              </p>
            </div>
            <div className="bg-white rounded-md px-8 py-5 space-y-2">
              <SecurityScanOutlined
                className="text-blue-10 text-xl"
                style={{ fontSize: "26px", color: "#3a7ff4" }}
              />
              <h1 className="text-xl font-bold">100% Secure</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Quis nam in nulla scele
              </p>
            </div>
            <div className="bg-white rounded-md px-8 py-5 space-y-2">
              <SecurityScanOutlined
                className="text-blue-10 text-xl"
                style={{ fontSize: "26px", color: "#3a7ff4" }}
              />
              <h1 className="text-xl font-bold">100% Secure</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Quis nam in nulla scele
              </p>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default OurFeatures;
