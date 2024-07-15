"use client";
import { Menu } from "antd";

import NAV_Links from "../constants";


import React from "react";
import { Button } from "antd";


const Navbar = () => {
  return (
    <>
    <div className="flex justify-between py-3 px-20">
      <h1 className="poppins-bold text-lg">SpaceHub</h1>

      <Menu mode="horizontal" items={NAV_Links} />
      <div className="flex gap-5">
        <Button type="text" size="large" className="bg-transparent">Signin</Button>
        <Button type="primary" size="large" className="py-5">Create Account</Button>
        </div>
      
  
      
    </div>

    </>
  );
};

export default Navbar;
