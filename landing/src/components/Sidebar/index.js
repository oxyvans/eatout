import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" smooth={true} duration={500} spy={true} exact='true' onClick={toggle}>About</SidebarLink>
                <SidebarLink to="project" smooth={true} duration={500} spy={true} exact='true' onClick={toggle}>Project</SidebarLink>
                <SidebarLink to="team" smooth={true} duration={500} spy={true} exact='true' offset={-180} onClick={toggle}>Team</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="lets-talk" smooth={true} duration={500} spy={true} exact='true' onClick={toggle}>Lets talk</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
        </SidebarContainer>
        
    )
}

export default Sidebar
