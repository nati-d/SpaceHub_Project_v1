"use client"
import { Menu, Button } from "antd";
import React from "react";
import { NAV_Links } from "../constants"; // Adjust import to use named export

const Navbar = () => {
  const renderMenuItems = () => {
    return NAV_Links.map((link, index) => (
      <Menu.Item key={index}>
        <a href={link.path}>{link.label}</a>
      </Menu.Item>
    ));
  };

  return (
    <div className="flex justify-between py-3 px-20">
      <h1 className="poppins-bold text-lg">SpaceHub</h1>

      <Menu mode="horizontal">
        {renderMenuItems()}
      </Menu>

      <div className="flex gap-5">
        <Button type="text" size="large" className="bg-transparent">
          Signin
        </Button>
        <Button type="primary" size="large" className="py-5">
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
