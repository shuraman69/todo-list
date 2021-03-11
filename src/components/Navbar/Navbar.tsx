import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper px1">
                <a href="/" className="brand-logo">TodoAppTypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/info">Информация</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}