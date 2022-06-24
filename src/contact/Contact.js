import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Contact() {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__contaner">
        <div className="contact__options"></div>
        <article className="contact_option">
          <AiOutlineMail />
          <h4>Email</h4>
          <h5>laura.pantano2@gmail.com</h5>
          <a href="mailto:laura.pantano2@gmail.com">Send a message</a>
        </article>
        {/*END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  );
}
