import React from "react";
import "./portfolio.css";
import IMG1 from "./../files/img1.jpg";
import IMG2 from "./../files/img2.jpg";

let data = [
  {
    id: 1,
    image: IMG1,
    title: "React Weather App",
    github: "https://github.com/lmacanda/weather-react-1",
    demo: "https://sprightly-figolla-2c1ee4.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "React Dictionary App",
    github: "https://github.com/lmacanda/dictionary-react",
    demo: "https://deft-cendol-c00d5b.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <a href={demo} target="blank">
                  <img src={image} alt={title} />
                </a>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
