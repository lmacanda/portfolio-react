import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

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
          <a href="mailto:laura.pantano2@gmail.com" target="blank">
            Send me an email
          </a>
        </article>
        <article className="contact_option">
          <AiOutlinePhone />
          <h4>Telephone Number</h4>
          <h5>+351 915061359</h5>
        </article>
        {/*END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send me a Message
          </button>
        </form>
      </div>
    </section>
  );
}
