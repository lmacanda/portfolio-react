import React from "react";
import "./portfolio.css";
import IMG1 from "./../files/img1.jpg";
import IMG2 from "./../files/img2.jpg";
import IMG3 from "./../files/img3.JPG";
import IMG4 from "./../files/img4.JPG";

let data = [
  {
    id: 1,
    image: IMG1,
    title: "React Weather App",
    github: "https://github.com/lmacanda/weather-react-1",
    demo: "https://weather-react-1.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "React Dictionary App",
    github: "https://github.com/lmacanda/dictionary-react",
    demo: "https://dictionary-react-gamma.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Interactive Credit Card",
    github: "https://github.com/lmacanda/interactive_card",
    demo: "https://interactive-card-smoky.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "E-commerce Website",
    github: "https://github.com/lmacanda/e-commerce",
    demo: "https://e-commerce-sandy-iota.vercel.app/",
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
