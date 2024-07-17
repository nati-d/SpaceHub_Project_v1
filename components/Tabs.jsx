"use client";
import { Tabs, rem } from "@mantine/core";
import PriceCard from "@/components/PriceCard";

const TabsSection = () => {
  return (
    <Tabs defaultValue="coworkingspace">
      <Tabs.List>
        <Tabs.Tab value="coworkingspace">Coworking Space</Tabs.Tab>
        <Tabs.Tab value="officespace">Office Space</Tabs.Tab>
        <Tabs.Tab value="workshop">Workshop</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="coworkingspace">
        <PriceCard d = {100} m={200} y = {300}/>
      </Tabs.Panel>

      <Tabs.Panel value="officespace">
        <PriceCard d = {300} m={600} y = {900}/>
      </Tabs.Panel>

      <Tabs.Panel value="workshop">
        <PriceCard d = {1100} m={2000} y = {2900}/>
      </Tabs.Panel>
    </Tabs>
  );
};

export default TabsSection;
