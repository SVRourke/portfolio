import React from 'react';
import './About.scss'
import Calendar from 'components/Calendar'
const About = () => {
  return (
    <section className={"main-container column about"}>
      <div className={"about-row row"}>
        <div className={"about-left column"}>
          <h2>about me:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Maecenas sed enim ut sem viverra aliquet. 
            Sit amet mattis vulputate enim nulla aliquet porttitor. 
            Consectetur a erat nam at lectus urna duis convallis. Magnis 
            dis parturient montes nascetur ridiculus.
          </p>
        </div>

        <div className={"about-right column"}>
          <Calendar />
        </div>
      </div>
    </section>
  );
}

export default About;
