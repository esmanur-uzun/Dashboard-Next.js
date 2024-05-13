"use client";
import React, { useState } from "react";
import {
  faGear,
  faStore,
  faPlus,
  faQuestion,
  faDoorOpen,
  faUser,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {  useSession } from "next-auth/react";

const sidebar = () => {
  const [open, setOpen] = useState(false);
  const {data : session} = useSession()

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`${
        open ? "sm:w-2/6 lg:w-1/6" : "w-16"
      } h-screen fixed bg-slate-800 duration-300 `}
    >
      <aside className="relative">
        <FontAwesomeIcon
          className={`bg-white text-blue-950 text-xl rounded-full absolute -right-2 top-3 p-1 border border-blue-950 cursor-pointer ${
            !open && "rotate-180"
          }`}
          icon={faArrowLeft}
          onClick={toggleOpen}
        />
        <ul className="text-gray-100 pt-5 list-none font-medium flex  flex-col gap-10">
          <li className=" cursor-pointer flex h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <FontAwesomeIcon icon={faUser} size="lg" />
            {/* <span className="ml-4">{session.user}</span> */}
          </li>
          <li className=" cursor-pointer flex h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <Link href="/product">
              <FontAwesomeIcon icon={faStore} size="lg" />
              <span className={`${!open && "hidden"} ml-4`}>Products</span>
            </Link>
          </li>

          <li className=" cursor-pointer flex h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <Link href="/addProduct">
              <FontAwesomeIcon icon={faPlus} size="lg" />
              <span className={`${!open && "hidden"} ml-4`}>Add Product</span>
            </Link>
          </li>

          <li className="flex cursor-pointer h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <FontAwesomeIcon icon={faGear} size="lg" />
            <span className={`${!open && "hidden"} ml-4`}>Setting</span>
          </li>
          <li className="flex cursor-pointer h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <FontAwesomeIcon icon={faQuestion} size="lg" />
            <span className={`${!open && "hidden"} ml-4`}>Help</span>
          </li>
          <li className="flex cursor-pointer h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <FontAwesomeIcon icon={faDoorOpen} size="lg" />
            <button className={`${!open && "hidden"} ml-4`}>Logout</button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default sidebar;
