import React from "react";
import "./header.css";
import CTA from "./CTA";
import IO from "../files/io.jpg";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Laura Pantano</h1>
        <h5 className="text-light">Junior Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={IO} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
