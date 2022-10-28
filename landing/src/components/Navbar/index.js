import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements'
import { animateScroll as scroll } from 'react-scroll/modules'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toogleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/landing' onClick={toogleHome}>eatout</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='activeP'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='activeP'>Project</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='activeP'>Team</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="lets-talk" smooth={true} duration={500} >Lets talk</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
