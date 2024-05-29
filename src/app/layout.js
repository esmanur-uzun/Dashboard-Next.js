import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Toaster } from "@/components/ui/toaster";
import { isAuthenticated } from "@/app/auth/auth";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <div className="flex">
          <div className="w-16">
            <Sidebar />
          </div>
          <div className="w-full">
            <main>{children}</main>
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  );
}
