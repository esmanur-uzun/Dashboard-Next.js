import React from "react";
import {
  faGear,
  faStore,
  faPlus,
  faQuestion,
  faDoorOpen,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const sidebar = () => {
  return (
    <div className="w-1/6 h-screen fixed bg-slate-800">
      <aside>
        <ul className="text-gray-100 p-4 list-none font-medium flex flex-col gap-8">
          <li className=" cursor-pointer flex h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <FontAwesomeIcon icon={faUser} size="lg" />
            <span className="ml-4">User</span>
          </li>
          <li className=" cursor-pointer flex h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <Link href="/product">
              <FontAwesomeIcon icon={faStore} size="lg" />
              <span className="ml-4">Products</span>
            </Link>
          </li>

          <li className=" cursor-pointer flex h-10 items-center px-4 hover:bg-slate-500 hover:text-white rounded-md">
            <FontAwesomeIcon icon={faPlus} size="lg" />
            <span className="ml-4">Add Product</span>
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
            <span className="ml-4">Log Out</span>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default sidebar;
