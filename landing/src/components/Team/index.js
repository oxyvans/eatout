import React from 'react'
import NikImg from '../../img/nik.jpg'
import PauliImg from '../../img/pauli.jpg'
import BenjaImg from '../../img/benja.jpg'
import EugeImg from '../../img/euge.jpg'
import FrancoImg from '../../img/franco.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SocialMediaWrap, SocialIcons, SocialIconLink ,SvgIcon, ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesIcon, ServicesP, ButtonWrapper } from './TeamElements'

const Team = () => {
  return (
    <ServicesContainer id="team">
        <ServicesH1>Our Team</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <SvgIcon src={EugeImg}></SvgIcon>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/maria-matto/" target="_blank" aria-label="Twitter">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="https://github.com/EugeniaMatto" target="_blank" aria-label="Twitter">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </ServicesCard>
            <ServicesCard>
                <SvgIcon src={FrancoImg}></SvgIcon>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/franco-trenche/" target="_blank" aria-label="Twitter">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="https://github.com/trenfranco" target="_blank" aria-label="Twitter">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </ServicesCard>
            <ServicesCard>
                <SvgIcon src={NikImg}></SvgIcon>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/nicolle-shiskobcki-769656217/" target="_blank" aria-label="Twitter">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="https://github.com/NikShiskobcki" target="_blank" aria-label="Twitter">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </ServicesCard>
            <ServicesCard>
                <SvgIcon src={BenjaImg}></SvgIcon>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/benjamingutierrez1999/" target="_blank" aria-label="Twitter">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="https://github.com/oxyvans" target="_blank" aria-label="Twitter">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </ServicesCard>
            <ServicesCard>
                <SvgIcon src={PauliImg}></SvgIcon>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/paulina-crespi-abb720230/" target="_blank" aria-label="Twitter">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="https://github.com/PauliCrespi" target="_blank" aria-label="Twitter">
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Team