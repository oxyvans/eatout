import React, { useState } from 'react'
import FooterSection from '../components/FooterSection'
import HeaderSection from '../components/HeaderSection'
import Project from '../components/Project'
import ContactUs from '../components/ContactUs'
import About from '../components/About'
import { homeObjOne, homeObjTwo } from '../components/Project/Data'
import { homeObjBkgOne } from '../components/About/DataBkg'

import Navbar from '../components/Navbar'
import Team from '../components/Team'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeaderSection />
            <About {...homeObjBkgOne}/>
            <Project {...homeObjOne} />
            <Team />
            <ContactUs />
            <FooterSection />
        </>
    )
}

export default Home
