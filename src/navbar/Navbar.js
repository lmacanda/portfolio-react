import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav>
      <a href="/#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <MdOutlineWork />
      </a>
      <a href="#portfolio">
        <BsBook />
      </a>
      <a href="#contact">
        <BsTelephone />
      </a>
    </nav>
  );
}
