import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;

    @media screen and (max-width: 768px) {
        padding: 50px 0;
        
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 200px;
    width: 100vw;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    

    @media screen and (max-width: 768px) {
        height: 350px;
        padding: 0 24px;
        justify-content: left;

    }
`

export const InfoRow2 = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col1 col1 col2';

    @media screen and (max-width: 1440px) {
        align-items: center;
        padding: 0 15px;
        margin-left: 45px;

    }

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
        align-items: left;
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    display: flex;

    @media screen and (max-width: 768px) {
        margin-bottom: -25px;
    }

`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    display: flex;

    @media screen and (max-width: 768px) {
        margin-top: -25px;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const SubtitleTitle = styled.h2`
    display: inline-block;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 1.1;
    color: #0E1C36;
    
`
