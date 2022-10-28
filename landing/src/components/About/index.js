import React from 'react'
import { SubWrap, SubtitleTitle, LiLIcon, InfoWrapperBig, SvgIcon, Mark, Column3 ,Column2, Img, ImgWrap, InfoContainer, InfoWrapper, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, InfoRow, InfoRow2, LilIcon } from './AboutElements'
import Image from '../../img/logo.png'


const About = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id="about">
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine primary={primary ? 1 : 0}>{topLine}</TopLine>
                        <Heading lightText={lightText}>Easy reservations at plenty of <Mark>restaurants</Mark>.</Heading>
                        <Subtitle darkText={darkText}>{description}.</Subtitle>
                        
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={Image}></Img>
                    </ImgWrap>
                </Column2>
            </InfoRow>
            <InfoRow2>
                <Column1>
                    <SubWrap>
                        <LilIcon>
                            <SvgIcon viewBox="0 0 24 24" preserveAspectRatio="true" fill="#ff9aa2">
                                <path d="M0 0h24v24H0V0z" fill="none"/><path fill='#none' d="M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-3.44-4.44c.63 1.03 1.07 2.18 1.3 3.38-.47.3-.91.63-1.34.98-.42-.34-.87-.67-1.33-.97.25-1.2.71-2.35 1.37-3.39zM12 15.45c-.82-1.25-1.86-2.34-3.06-3.2-.13-.09-.27-.16-.4-.26.13.09.27.17.39.25C6.98 10.83 4.59 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45zm1.32 4.15c-.44.15-.88.27-1.33.37-.44-.09-.87-.21-1.28-.36-3.29-1.18-5.7-3.99-6.45-7.35 1.1.26 2.15.71 3.12 1.33l-.02.01c.13.09.26.18.39.25l.07.04c.99.72 1.84 1.61 2.51 2.65L12 19.1l1.67-2.55c.69-1.05 1.55-1.95 2.53-2.66l.07-.05c.09-.05.18-.11.27-.17l-.01-.02c.98-.65 2.07-1.13 3.21-1.4-.75 3.37-3.15 6.18-6.42 7.35zm-4.33-7.32c-.02-.01-.04-.03-.05-.04 0 0 .01 0 .01.01.01.01.02.02.04.03z"/>
                            </SvgIcon>
                        </LilIcon>
                        <SubtitleTitle>Quality</SubtitleTitle>
                    </SubWrap>
                    <Subtitle darkText={darkText}>All places available on our site are certified by ourselves, and fully integrated with our APIs to make sure everything runs smooth.</Subtitle>
                </Column1>
                <Column2>
                    <SubWrap>
                        <LilIcon>
                            <SvgIcon viewBox="0 0 24 24" preserveAspectRatio="true" fill="#ff9aa2">
                                <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"/>     
                            </SvgIcon>
                        </LilIcon>  
                        <SubtitleTitle>Location</SubtitleTitle>
                    </SubWrap>
                    <Subtitle darkText={darkText}>You can easily filter by any location of your choice so no time is wasted while scrolling for places out of your desired zone.</Subtitle>
                </Column2>
                <Column3>
                    <SubWrap>
                        <LilIcon>
                            <SvgIcon viewBox="0 0 24 24" preserveAspectRatio="true" fill="#ff9aa2">
                                <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/>
                            </SvgIcon>
                        </LilIcon>
                        <SubtitleTitle>Easy Communication</SubtitleTitle>
                    </SubWrap>
                    <Subtitle darkText={darkText}>Dont worry about forgetting the date of your reservation, we take care of everything, even making sure you are there at the right time.</Subtitle>
                </Column3>
            </InfoRow2>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default About
