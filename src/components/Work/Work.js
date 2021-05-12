import React from 'react';
import './Work.scss'

const Work = () => {
  return (
    <section className={"main-container column work"}>
      <h2>my work:</h2>
      <div className={"work-row row"}>
        <div className={"work-card"} >
          <h1>Forms</h1>
        </div>

        <div className={"work-card"} >
          <h1>Pantry</h1>
        </div>

        <div className={"work-card"} >
          <h1>Kanban</h1>
        </div>

        <div className={"work-card"} >
          <h1>Quizzlet</h1>
        </div>

        <div className={"work-card"} >
          <h1>Dice</h1>
        </div>

        <div className={"work-card"} >
          <h1>Ultima Tec</h1>
        </div>

        <div className={"work-card"} >
          <h1>Trading Unlimited</h1>
        </div>

        <div className={"work-card"} >
          <h1>Portfolio</h1>
        </div>
      </div>
    </section>
  );
}

export default Work;
