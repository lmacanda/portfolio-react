import React from "react";
import "./portfolio.css";
import IMG1 from "./../files/img1.jpg";
import IMG2 from "./../files/img2.jpg";
import IMG3 from "./../files/img3.jpg";

let data = [
  {
    id: 1,
    image: IMG1,
    title: "crypto",
    github: "https://github.com/lmacanda",
    demo: "https://spiffy-starship-85e67d.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "charts",
    github: "https://github.com/lmacanda",
    demo: "https://spiffy-starship-85e67d.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "app",
    github: "https://github.com/lmacanda",
    demo: "https://spiffy-starship-85e67d.netlify.app/",
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
                <img src={image} alt={title} />
              </div>
              <h3>portfolio item title</h3>
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
