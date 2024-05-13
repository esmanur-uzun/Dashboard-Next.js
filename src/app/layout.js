import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SessionWrapper from "@/components/wrapper/sessionWrapper";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex">
            <div className="w-16">
              <Sidebar></Sidebar>
            </div>
            <div className="w-full">
              <main>{children}</main>
            </div>
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
