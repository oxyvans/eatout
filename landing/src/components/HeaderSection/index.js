import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { SvgIcon, SvgBorder, Desc, HeaderContainer, HeaderBg, VideoBg, HeaderContent, HeaderH1, HeaderP, HeaderBtnWrapper, ArrowForward, ArrowRight, OutStand, TopLine } from './HeaderElements'
import { Button2 } from '../ButtonElement'

const HeaderSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeaderContainer>
            <HeaderBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeaderBg>
            <HeaderContent>
                <TopLine>Book unforgetable memories, one click away.</TopLine>
                <HeaderH1>Plenty of restaurants at your hand.</HeaderH1>
                <HeaderP> Making it easier for folks to share memories with their loved ones by elaminating the tedious part.</HeaderP>
                <HeaderBtnWrapper>
                    <Button2 to="/" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' big='true'>
                        Book now {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button2>
                    <Desc to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>learn more </Desc>
                </HeaderBtnWrapper>
            </HeaderContent>
            <SvgBorder viewBox="0 0 1680 40" fill="none" preserveAspectRatio="none">
                <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
            </SvgBorder>
            <SvgIcon viewBox="0 0 1680 720" preserveAspectRatio="true">
            <g xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path  fill="#14B869" d="M661.77,442.84s56.52,95.77,9.42,149.15-75.36,15-75.36,15-58.09-74.62,1.57-192.37-85.7-173.27-85.7-173.27c-40.25-14.88-21.18-96.77-21.18-96.77-44.07,47.1-56.4,131.88-28.14,161.71s40.82,78.5,11,122.46-59.7,21.12-59.7,21.12c-24.37-12.91-36.07-54.09-36.07-54.09C246,53.09,311.19,6.68,337.18.81c-128.92,14.45-89.89,208.1-89.89,208.1s50.24,218.23-58.09,271.61-72.22-146-72.22-146S30.62,424,2.36,672.06c-28,245.63,201.52,367.91,206,370.29,0,0,0,0,0,0-3.78-3.18-189.21-160.87-114.75-374,0,0,37.85-91.46,114.81-101.78,0,0-86.78,101.78,119.72,134.23,0,0,134.23,29.5,88.51-134.23,0,0,81.12-1.48,81.12,85.55,0,0-7.37,156.36,118,79.66,0,0,55.57,165.76-37.86,274.63h0c99.52-90.88,171-282.58,171-282.58C805,573.25,661.77,442.84,661.77,442.84Z"/>
                    <path  fill="#14B869" d="M337.18.81c2.92-.33,5.92-.57,9-.71A27.89,27.89,0,0,0,337.18.81Z"/>
                    <path  fill="#14B869" d="M464.44,1052.1c-146.56-20.93-246.18-10.8-255.31-9.79a.13.13,0,0,0,0,.25c15,3.85,278.09,69.55,368.84-36.21C543,1038.32,504.48,1057.82,464.44,1052.1Z"/>
                    <path  fill="#14B869" d="M208.45,1042.38s-64.66-114.48-47-198.56-3.07-103.25-3.07-103.25,35.52,16.22,57.65,61.95c0,0,35.4,107.68,239,81.13,0,0,175.05-62.87,122.92,122.7C578,1006.35,457.48,1142.12,208.45,1042.38Z"/>
                </g>
            </g>
            </SvgIcon> 
        </HeaderContainer>
        
    )
}

export default HeaderSection
