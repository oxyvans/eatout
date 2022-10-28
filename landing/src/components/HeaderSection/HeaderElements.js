import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import { Link as LinkS } from 'react-scroll'


export const HeaderContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    min-height: 100vh;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.2) 0%, 
                rgba(0, 0, 0, 0.6) 100%
            ), 
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeaderBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeaderContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction:  column;
    align-items: left;
`

export const HeaderH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 40px;

    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        
    }
`

export const TopLine = styled.p`
    color: transparent;
    //background: linear-gradient(110deg, rgb(255, 102, 115), rgb(255, 102, 115), rgb(204, 37, 228), rgb(124, 0, 255));
    background: #ff9aa2;
    font-size: 16px;
    line-height: 16px;
    font-weight: 7600;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    background-clip: text;
    -webkit-background-clip: text;
`

export const HeaderP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;

    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
        
    }
`

export const OutStand = styled.h1`
    color: ${({primary}) => (primary ? '#0DA25A' : '#43464C')};
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;

    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        
    }
`

export const HeaderBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 320px;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const Desc = styled(LinkS)`
    color: #fff;
    font-size: 10px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        color: #ff9aa2;
    }
`

export const SvgBorder = styled.svg`
    bottom: -1px;
    z-index: 5;
    position: absolute;
`

export const SvgIcon = styled.svg`
    bottom: -10px;
    right: 0;
    position: absolute;
    z-index: 6;
    width: 350px;
    height: 350px;
    visibility: hidden;

    @media screen and (max-width: 768px) {
        width: 250px;
    height: 250px;

    }

    @media screen and (max-width: 480px) {
        width: 190px;
        height: 190px;
        right: -20px;
    }
`