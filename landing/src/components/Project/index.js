import React from 'react'
import { Mark, Column2, Img, ImgWrap, InfoContainer, InfoWrapper, Column1, TextWrapper, TopLine, Heading, Subtitle, InfoRow } from './ProjectElements'

const Project = ({lightBg, id, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id="project">
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine primary={primary ? 1 : 0}>{topLine}</TopLine>
                        <Heading lightText={lightText}>Learn more about <Mark>EatOut</Mark>.</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                       
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default Project