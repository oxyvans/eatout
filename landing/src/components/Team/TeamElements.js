import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;


    @media screen and (max-width: 768px) {
    height: 1200px;
    }

    @media screen and (max-width: 480px) {
    height: 3100px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 2px;
    padding: 0 0px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-gap: 0px;
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0px;
    max-height: 480px;
    padding: 20px;
    //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 140px;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: transparent;
    background: #ff9aa2;
    margin-bottom: 24px;
    background-clip: text;
    -webkit-background-clip: text;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #0E1C36;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #0E1C36;
`

export const ButtonWrapper = styled.div`
    margin-top: 64px;
    display: flex;
    justify-content: flex-start;
`

export const SvgIcon = styled.img`
    width: 120%;
    margin: 0 0 -20px 0;
    padding-right: 0;
`

export const SocialMediaWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: 60px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialIcons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 6px;
    align-items: center;
    justify-content: flex-start;
    align-items: center;
    width: 26px;
`

export const SocialIconLink = styled.a`
    display: flex;
    flex-direction: column;
    color: #000;
    font-size: 24px;
`