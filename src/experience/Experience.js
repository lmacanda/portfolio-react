import React from "react";
import "./experience.css";
import { BsShieldFillCheck } from "react-icons/bs";

export default function Experience() {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsShieldFillCheck />
              <h4>HTML</h4>
              <small className="text-light">Junior</small>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck />
              <h4>CSS</h4>
              <small className="text-light">Junior</small>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck />
              <h4>JavaScript</h4>
              <small className="text-light">Junior</small>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck />
              <h4>React</h4>
              <small className="text-light">Junior</small>
            </article>
            <article className="experience__details">
              <BsShieldFillCheck />
              <h4>Bootstrap</h4>
              <small className="text-light">Junior</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience-__background"></div>
        <article className="experience__details">
          <BsShieldFillCheck />
          <h4>HTML</h4>
          <small className="text-light">Junior</small>
        </article>
        <article className="experience__details">
          <BsShieldFillCheck />
          <h4>CSS</h4>
          <small className="text-light">Junior</small>
        </article>
        <article className="experience__details">
          <BsShieldFillCheck />
          <h4>JavaScript</h4>
          <small className="text-light">Junior</small>
        </article>
        <article className="experience__details">
          <BsShieldFillCheck />
          <h4>React</h4>
          <small className="text-light">Junior</small>
        </article>
        <article className="experience__details">
          <BsShieldFillCheck />
          <h4>Bootstrap</h4>
          <small className="text-light">Junior</small>
        </article>
      </div>
    </section>
  );
}
