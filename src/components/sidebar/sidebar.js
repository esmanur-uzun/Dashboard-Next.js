import React from "react";
import {
  faGear,
  faStore,
  faPlus,
  faQuestion,
  faDoorOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SidebarButton from "@/clientComponent/SidebarButton";

const sidebar = () => {
  const open = false
  return (
    <div className={`${open ? "w-1/6" : "w-16" } h-screen fixed bg-slate-800`} >
      <aside className="relative">
        <SidebarButton open={open} />
        <ul className="text-gray-100 p-4 list-none font-medium flex  flex-col gap-10">
          <li className=" cursor-pointer flex h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <FontAwesomeIcon icon={faUser} size="lg" />
            {/* <span className="ml-4">{user[0]?.fullname}</span> */}
          </li>
          <li className=" cursor-pointer flex h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <Link href="/product">
              <FontAwesomeIcon icon={faStore} size="lg" />
              <span className="ml-4">Products</span>
            </Link>
          </li>

          <li className=" cursor-pointer flex h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <Link href="/addProduct">
              <FontAwesomeIcon icon={faPlus} size="lg" />
              <span className="ml-4">Add Product</span>
            </Link>
          </li>

          <li className="flex cursor-pointer h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <FontAwesomeIcon icon={faGear} size="lg" />
            <span className="ml-4">Setting</span>
          </li>
          <li className="flex cursor-pointer h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <FontAwesomeIcon icon={faQuestion} size="lg" />
            <span className="ml-4">Help</span>
          </li>
          <li className="flex cursor-pointer h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <FontAwesomeIcon icon={faDoorOpen} size="lg" />
            <button className="ml-4">
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default sidebar;
