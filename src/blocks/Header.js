import React from 'react'
import 'styles/Header.scss'

export default function Header() {
    return (
        <header className={'block'}>
            <h1>
                <span id='hi' >Hi,</span>
                <span id='im' >I'm</span>
                <span id='sam' >Sam.</span>
            </h1>
        </header>
    )
}
