import React, { useState } from "react";
import { ImLinkedin, ImGithub, ImTwitter, ImMail } from "react-icons/im";
import "styles/components/Contact.scss";

export default function Contact() {
  const [formInfo, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section id="contact" calss="column">
      <h2 class="block_heading">let's talk!</h2>
      <div id="contact-container">
        <div id="contact-badges" class="column">
          <a class="contact-badge" href="#hero">
            <ImLinkedin />
            <p>LinkedIn</p>
          </a>
          <a class="contact-badge" href="#hero">
            <ImGithub />
            <p>Github</p>
          </a>
          <a class="contact-badge" href="#hero">
            <ImTwitter />
            <p>Twitter</p>
          </a>
          <a class="contact-badge" href="mailto:samuelvanrourke@gmail.com">
            <ImMail />
            <p>email</p>
          </a>
        </div>
        <form>
          <input name="name" type="text" placeholder="name" />
          <input name="email" type="email" placeholder="email" />
          <textarea name="message" placeholder="message here..." />
          <input type="submit" value="send" />
        </form>
      </div>
    </section>
  );
}
