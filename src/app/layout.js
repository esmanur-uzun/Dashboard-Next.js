import { Inter } from "next/font/google";
import "./globals.css";
import Header  from "@/components/header/header";
import  Sidebar  from "@/components/sidebar/sidebar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import {store} from '@/store'
import { fetchUser } from "@/store/auth";


const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  await store.dispatch(fetchUser())
  // console.log(store.getState().user)
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header/> */}
        <div className="flex">
          <div className="w-1/6">
            <Sidebar></Sidebar>
          </div>
          <div className="w-5/6">
          <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
