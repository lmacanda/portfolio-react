import React from "react";
import Laura_Pantano from "../files/Laura_Pantano.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={Laura_Pantano} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
}
