import React from "react";
import "./about.css";
import ME from "./../files/me.png";

export default function About() {
  return (
    <section id="about" className="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <p>I'm Laura...</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
