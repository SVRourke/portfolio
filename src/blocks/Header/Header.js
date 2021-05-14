import React, { useEffect } from 'react';
import './header.scss'

import { fetchContributions } from 'fetch-contribution-calendar'

const Header = () => {

  useEffect(() => {
    fetchContributions('SVRourke')
    .then(r => console.log("IT WORKED", r))
  })

  return (
    <header className={"main-container column header"}>
      <div className={'header-row row'}>

        <div className={'column header-left'}>
          <div className={'pic'} />
        </div>

        <div className={'column header-right'}>
          <h1>Hi, I'm Sam</h1>
          <h2>
            I'm passionate about creating tools
            that make managing your life easier.
          </h2>
        </div>

      </div>
    </header>
  );
}

export default Header;