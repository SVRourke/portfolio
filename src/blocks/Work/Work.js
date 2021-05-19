import React, {useState} from 'react';
import './Work.scss'
import Slide from './Slide'

import {projects} from './testData'

const Work = () => {
  const [idx, setIdx] = useState(0) 
  const sorted = projects.sort((a, b) => b.date - a.date)

  const nextSlide = () => {
    idx !== sorted.length - 1
      ? setIdx(idx + 1)
      : setIdx(0)
  }

  const prevSlide = () => {
    idx !== 0
      ? setIdx(idx - 1)
      : setIdx(sorted.length - 1)
  }
  return (
    <section className={"main-container column work"}>
      <h2 id='project-title'>my work:</h2>
      <Slide project={projects[idx]} idx={idx + 1} total={sorted.length} />

      <div className={'work-controls row'} >
        <button onClick={prevSlide} >prev</button>
        <p>{idx + 1} of {sorted.length}</p>
        <button onClick={nextSlide} >next</button>
      </div>
    </section>
  );
}

export default Work;
