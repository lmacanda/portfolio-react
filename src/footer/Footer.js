import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="permalinks">
        <li>
          <a href="/#" rel="noopener noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__source">
        <small>
          <a
            href="https://github.com/lmacanda/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>{" "}
          by Laura Pantano
        </small>
      </div>
    </footer>
  );
}
