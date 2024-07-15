"use client"
import React from "react";
import { Button, Select, Space } from "antd";
import PROPERTY_TYPES from '@/constants/index'

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SearchBar = () => {
  return (
    <div className="flex gap-4 justify-between shadow-md flex-1 mx-32 bg-white border py-12 px-20 rounded-md absolute -bottom-16">
      <Select
        placeholder="Select Property Type"
        style={{
          width: 500, 
        }}
        size="large"
        onChange={handleChange}
        className="bg-gray-10"
        options={[
          { value: "office", label: "Office" },
          { value: "coworking", label: "Coworking Space" },
          { value: "industrial", label: "Industrial Space" },
          { value: "retail", label: "Retail Space" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
      <Select
        style={{
          width: 500, 
        }}
        placeholder="Select Location"
        size="large"
        onChange={handleChange}
        options={[
          { value: "office", label: "Office" },
          { value: "coworking", label: "Coworking Space" },
          { value: "industrial", label: "Industrial Space" },
          { value: "retail", label: "Retail Space" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
      <Button size="large" type="primary">Search</Button>
    </div>
  );
};

export default SearchBar;
