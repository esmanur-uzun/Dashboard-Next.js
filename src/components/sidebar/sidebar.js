import React,{useState} from "react";
import {
  faGear,
  faStore,
  faPlus,
  faQuestion,
  faDoorOpen,
  faUser,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const sidebar = () => {
  // const { user } = store.getState().user;
  // console.log(user[0]);
  // const [open, setOpen] = useState()
  return (
    <div className="w-1/6 h-screen fixed bg-slate-800 ">
      <aside className="relative">
        <FontAwesomeIcon className="bg-white text-blue-950 text-xl rounded-full absolute -right-2 top-3 p-1 border border-blue-950 cursor-pointer  " icon={faArrowLeft}/>
        <ul className="text-gray-100 p-4 list-none font-medium flex flex-col gap-8">
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
