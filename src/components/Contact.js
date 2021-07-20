import React, { useState } from "react";
import { ImLinkedin, ImGithub, ImTwitter, ImMail } from "react-icons/im";
import "styles/components/Contact.scss";

export default function Contact() {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [formInfo, setInfo] = useState(initialState);

  const handleChange = (e) => {
    const newValues = { ...formInfo };
    newValues[e.target.name] = e.target.value;
    setInfo(newValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(formInfo);

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formInfo).toString(),
    })
      .then(() => {
        alert("successfull submission");
        setInfo(initialState);
      })
      .catch(() => alert("submission error... try again"));
  };

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

        <form onSubmit={handleSubmit} name="contact">
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="name"
            value={formInfo["name"]}
          />
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="email"
            value={formInfo["email"]}
          />
          <textarea
            onChange={handleChange}
            name="message"
            placeholder="message here..."
            value={formInfo["message"]}
          />
          <input type="submit" value="send" />
        </form>
      </div>
    </section>
  );
}
