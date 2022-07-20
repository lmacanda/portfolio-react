import React from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  let [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        href="/#"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsShieldFillCheck />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <GiWallet />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsTelephone />
      </a>
    </nav>
  );
}
