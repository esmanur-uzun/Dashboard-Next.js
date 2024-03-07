import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const header = () => {
  return (
    <div className="h-14 flex justify-between items-center fixed top-0 w-full opacity-55  bg-slate-700">
      <div className="">
        <span className="ps-3 text-xl text-gray-100 font-semibold">Logo</span>
      </div>
      <div>
        <span className="pr-2">
          <FontAwesomeIcon icon={faUser} color="white" size="1x" />
        </span>
        <span className="pr-6 text-gray-100 font-semibold">User Name</span>
      </div>
    </div>
  );
};

export default header;
