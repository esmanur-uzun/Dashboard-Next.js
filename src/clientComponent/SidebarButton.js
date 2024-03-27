"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const sidebarButton = ({ open }) => {
  function yazdir() {
    console.log(open);
  }
  return (
    <div>
      <FontAwesomeIcon
        className="bg-white text-blue-950 text-xl rounded-full absolute -right-2 top-3 p-1 border border-blue-950 cursor-pointer  "
        icon={faArrowLeft}
        onClick={yazdir}
      />
    </div>
  );
};

export default sidebarButton;
