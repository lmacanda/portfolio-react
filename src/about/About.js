import React from "react";
import "./about.css";
import ME from "../files/hdd_9851223.svg";

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
          <p>
            "When I was a child I remember doing art with my Commodore 64. I
            didn't know at the time that I was coding. Lately I looked at how it
            made me happy and I decided it was time to learn coding. I earned my
            certification in Front End Development at Jagaad Academy! My
            learning journey is only beginning, I'm thrilled to learn more and
            open to embrace all the potentiality and challenges of development."
          </p>
        </div>
      </div>
    </section>
  );
}
