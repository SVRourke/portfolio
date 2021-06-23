import React from 'react'
import 'styles/Header.scss'
import { Fade } from 'react-awesome-reveal'

export default function Header() {
    return (
        <header className={'block col'}>
            <Fade className='hero-word hi' direction={'down'} >
                <span id='hi'>Hi,</span>
            </Fade>

            <Fade className='hero-word sam' direction={'right'} duration={1000} delay={600}>
                <span id='sam'>Sam.</span>
            </Fade>
            <Fade className='hero-word im' direction={'left'} delay={200} >
                <span className='outline-title'>I'm</span>
            </Fade>
        </header>
    )
}
