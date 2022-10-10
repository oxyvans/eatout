import React, {useState} from 'react'
import "./nav.css"

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false)

  return (
    <header className='header'>
        <nav className="nav container">
            <div className={click ? "nav__menu  show-menu" : "nav__menu "}>
                <ul className="nav__list grid">
                    <li className="nav__item" onClick={closeMenu}>
                        <a href="/" className="nav__link active-link">
                            <i class="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/all" className="nav__link" onClick={closeMenu}>
                        <i class="uil uil-restaurant nav__icon"></i>All
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/map" className="nav__link" onClick={closeMenu}>
                        <i class="uil uil-map-marker nav__icon"></i>Map
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={closeMenu}></i>
            </div>
            <div className='section_button'>
                <a href="/login" className='button_nav button_small'>Login <i class="uil uil-user"></i></a>
                <a href="sign-in" className='button_nav button_small'>Sign in <i class="uil uil-user-plus"></i></a>
            </div>
            <div className='nav__toggle' onClick={handleClick}>
                <i class="uil uil-bars"></i>
            </div>
        </nav>
    </header>
  )
}

export default Nav