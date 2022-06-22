import React from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineHome />
      </a>
      <a href="#experience">
        <AiOutlineHome />
      </a>
      <a href="#portfolio">
        <AiOutlineHome />
      </a>
      <a href="#contact">
        <AiOutlineHome />
      </a>
    </nav>
  );
}
