import "@mantine/core/styles.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "antd/dist/reset.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./globals.css";
import { ConfigProvider } from "antd";
export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="">
        <MantineProvider>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: "#3A7FF4",
                  algorithm: true,
                  paddingBlock:10,
                  fontWeight:400,
                  height: 32,
                },
                
              },
            }}
          >
            <AntdRegistry>{children}</AntdRegistry>
          </ConfigProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
