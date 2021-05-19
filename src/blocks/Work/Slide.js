import React from 'react';

const Slide = ({project, idx, total}) => {
  const {
    title,
    date,
    excerpt,
    postUrl,
    githubUrl
  } = project

  return (
    <div className={'slide'}>
      <section className={'slide-column'}>
        <p>{date}</p>
        <hr/>
        <h2>{title}</h2>

        <p>{excerpt}</p>

        <div className={'buttons'}>
          <a href="#">write-up</a>
          <a href="#">Github</a>
        </div>
      </section>

      <section className={'slide-column'}>
        <h3 id='count' >{idx}/{total}</h3>
        <div className={'slide-img'}></div>
      </section>
    </div>
  );
}

export default Slide;
