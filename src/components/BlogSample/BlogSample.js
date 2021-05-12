import React from 'react';
import './BlogSample.scss'
const BlogSample = () => {
  return (
    <section className={"main-container column blog"}>
      <h2>thoughts:</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore.
      </p>

      <div className={'blog-cards-row row'}>
        <div className={'post-card'}>
          <h3>lessons learned building my first app</h3>
          <div className={'post-card_img'}></div>
          <p>
            sed do eiusmod tempor incididunt ut labore et
            dolore.
          </p>

        </div>

        <div className={'post-card'}>
          <h3>dolor sitdolor amet, consectetur adipiscing</h3>
          <div className={'post-card_img'}></div>
          <p>
            sed do eiusmod tempor incididunt ut labore et
            dolore.
          </p>

        </div>

        <div className={'post-card'}>
          <h3>dolor sit amet, consectetur adipiscing</h3>
          <div className={'post-card_img'}></div>
          <p>
            sed do eiusmod tempor incididunt ut labore et
            dolore.
          </p>

        </div>



      </div>

    </section>
  );
}

export default BlogSample;
