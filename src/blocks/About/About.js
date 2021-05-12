import React from 'react';
import './About.scss'

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
          <div className={"contrib"} />
        </div>
      </div>
    </section>
  );
}

export default About;
