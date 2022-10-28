import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 5px;
    background: ${({primary}) => (primary ? 'linear-gradient(110deg, rgb(255, 102, 115), rgb(255, 102, 115), rgb(204, 37, 228), rgb(124, 0, 255))' : '#0E1C36')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: '#fff';
    font-size: ${({big}) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fff;
        background: ${({primary}) => (primary ? '#0E1C36' : 'linear-gradient(110deg, rgb(255, 102, 115), rgb(255, 102, 115), rgb(204, 37, 228), rgb(124, 0, 255))')};
    }
`

export const Button2 = styled(Link)`
    border-radius: 5px;
    background: #ff9aa2; 
    color: #EBEBEB;
    white-space: nowrap; 
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    font-size: ${({big}) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #EBEBEB;
        color: #ff9aa2;
    }
`