import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#fff')};

    @media screen and (max-width: 768px) {
        padding: 50px 0;
        
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100vw;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    background: rgb(239, 240, 242);
    

    @media screen and (min-width: 1440px) {
        border-radius: 40px;
        max-width: 1440px;
    }

    @media screen and (max-width: 768px) {
        height: 1750px;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
    margin: 2.5rem;

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1';
        margin: 2.5rem;
        margin-bottom: -50rem;
    }
`

export const InfoRow2 = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas:  'col1 col2 col3';
    margin: 2.5rem;
    margin-top: -2.5rem;
    
    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2' 'col3 col3';
        margin: 2.5rem;
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const Column3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col3;
`

export const TextWrapper = styled.div`
    max-width: 640px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: transparent;
    background: #ff9aa2;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    background-clip: text;
    -webkit-background-clip: text;

    @media screen and (max-width: 768px) {
        margin-top: 16px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#0E1C36')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 15px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 455px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const Mark = styled.h1`
    color: transparent;
    background: #ff9aa2;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    background-clip: text;
    -webkit-background-clip: text;
    display: inline-block;
`

export const SubtitleTitle = styled.h2`
    display: inline-block;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 1.1;
    color: #0E1C36;
    
`

export const SvgIcon = styled.svg`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const LilIcon = styled.div`
    height: 44px;
    width: 44px;
    margin-bottom: 10px;
`

export const SubWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 370px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: left;
        display: flexbox;
        max-width: 120px;
    }
`