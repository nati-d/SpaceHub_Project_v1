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
              <h1 className="text-xl font-bold">Flexible Space Options</h1>
              <p className="text-sm">
              Offer a variety of spaces such as offices, labs, studios, and living spaces to cater to different needs.
              </p>
            </div>
            <div className="bg-white rounded-md px-8 py-5 space-y-2">
              <SecurityScanOutlined
                className="text-blue-10 text-xl"
                style={{ fontSize: "26px", color: "#3a7ff4" }}
              />
              <h1 className="text-xl font-bold">Affordable Pricing</h1>
              <p className="text-sm">
              Provide cost-effective solutions by allowing users to share spaces, reducing individual costs
              </p>
            </div>
            <div className="bg-white rounded-md px-8 py-5 space-y-2">
              <SecurityScanOutlined
                className="text-blue-10 text-xl"
                style={{ fontSize: "26px", color: "#3a7ff4" }}
              />
              <h1 className="text-xl font-bold">Reposting and Booking Management</h1>
              <p className="text-sm">
              Enable users to repost listings and manage bookings, ensuring optimal utilization of spaces.
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
              <h1 className="text-xl font-bold">User Reviews and Ratings</h1>
              <p className="text-sm">
              Allow users to leave reviews and ratings for spaces, helping others make informed decisions
              </p>
            </div>
            <div className="bg-white rounded-md px-8 py-5 space-y-2">
              <SecurityScanOutlined
                className="text-blue-10 text-xl"
                style={{ fontSize: "26px", color: "#3a7ff4" }}
              />
              <h1 className="text-xl font-bold">Easy Search and Filter</h1>
              <p className="text-sm">
              Implement advanced search and filter options to help users quickly find spaces that meet their specific requirements.
              </p>
            </div>
            <div className="bg-white rounded-md px-8 py-5 space-y-2">
              <SecurityScanOutlined
                className="text-blue-10 text-xl"
                style={{ fontSize: "26px", color: "#3a7ff4" }}
              />
              <h1 className="text-xl font-bold">Collaborative Environment</h1>
              <p className="text-sm">
              Promote a community-focused platform where users can collaborate, share resources, and network with like-minded individuals
              </p>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default OurFeatures;
