import "@mantine/core/styles.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'antd/dist/reset.css';
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import '../globals.css'
export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </MantineProvider>
      </body>
    </html>
  );
}
