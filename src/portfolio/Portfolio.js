import React from "react";
import "./portfolio.css";
import IMG1 from "./../files/app.JPG";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="app" />
          </div>
          <h3>portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/lmacanda"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://spiffy-starship-85e67d.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="app" />
          </div>
          <h3>portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/lmacanda"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://spiffy-starship-85e67d.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="app" />
          </div>
          <h3>portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/lmacanda"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://spiffy-starship-85e67d.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="app" />
          </div>
          <h3>portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/lmacanda"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://spiffy-starship-85e67d.netlify.app/"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
