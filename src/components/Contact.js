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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(formInfo);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formInfo }),
    })
      .then(() => {
        alert("Success!");
        setInfo(initialState);
      })
      .catch((error) => alert(error));
  };

  return (
    <section id="contact">
      <h2 class="block_heading">let's talk!</h2>
      <div id="contact-container">
        <div id="contact-badges">
          <a
            class="contact-badge"
            href="https://www.linkedin.com/in/samuel-v-rourke/"
          >
            <ImLinkedin />
            <p>LinkedIn</p>
          </a>
          <a class="contact-badge" href="https://github.com/svrourke">
            <ImGithub />
            <p>Github</p>
          </a>
          <a class="contact-badge" href="https://twitter.com/SVRourke">
            <ImTwitter />
            <p>Twitter</p>
          </a>
          <a class="contact-badge" href="mailto:samuelvanrourke@gmail.com">
            <ImMail />
            <p>email</p>
          </a>
        </div>

        <form onSubmit={handleSubmit} name="contact">
          <input type="hidden" name="form-name" value="contact" />
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
