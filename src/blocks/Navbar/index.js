import React from 'react';
import './navbar.scss'
const NavBar = () => {
  return (
    <section id={'NavBar'}>
      <div>
        <p>Samuel V. Rourke</p>
        <p>Full-Stack Developer</p>
      </div>

      <nav>
        <a >about</a>
        <a >work</a>
        <a >blog</a>
        <a >contact</a>
      </nav>

    </section>
  );
}

export default NavBar;
