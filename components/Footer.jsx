"use client"
import React from 'react';
import { Layout, Typography, Space, Divider } from 'antd';
import NAV_Links from '../constants';

const Footer = () => {
  return (
    <Layout.Footer className="bg-blue-20 py-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <Typography.Title level={3} className="text-3xl font-bold mb-4">
          SpaceHub
        </Typography.Title>
        <Typography.Paragraph className="text-gray-700 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Typography.Paragraph>
        <Typography.Paragraph className="text-gray-500 mb-4">
          <Space>
            <span>Home</span>
            <Divider type="vertical" />
            <span>Rent</span>
            <Divider type="vertical" />
            <span>Rerent</span>
            <Divider type="vertical" />
            <span>Connect</span>
            <Divider type="vertical" />
            <span>About Us</span>
          </Space>
        </Typography.Paragraph>

        <div className="flex justify-center mb-4">
          <img src="/facebook-logo.png" alt="Facebook Logo" className="h-8 mr-4" />
        </div>

        <Typography.Paragraph className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque ea atque omnis
          dignissimos nihil quis, eligendi excepturi sequi error quasi deleniti porro autem soluta
          sit assumenda obcaecati veritatis aliquam.
        </Typography.Paragraph>
      </div>
    </Layout.Footer>
  );
};

export default Footer;