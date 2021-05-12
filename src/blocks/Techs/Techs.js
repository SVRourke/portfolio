import React from 'react';
import './techs.scss'
const Techs = () => {
  return (
    <section className={"main-container column techs"}>
      <h2>what i use:</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore.
      </p>

      {/* This should be own component */}
      <div className={"techs-buttons-row row"}>
        <button >languages</button>
        <button >frameworks</button>
        <button >markup</button>
        <button >tools</button>
      </div>

      {/* This should be filtered map of techs based on buttons row */}
      <div class={"techs-icon-row row"}>
        <div className={"tech-card"}>JavaScript</div>
        <div className={"tech-card"}>Ruby</div>
        <div className={"tech-card"}>Python</div>
        <div className={"tech-card"}>React</div>
        <div className={"tech-card"}>Rails</div>
        <div className={"tech-card"}>SQL</div>
      </div>
    </section>
  );
}

export default Techs;
