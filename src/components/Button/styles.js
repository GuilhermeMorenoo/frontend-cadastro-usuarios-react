import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid #FFF'};
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)' : 'transparent'};
    font-size: 16px;
    color: #FFF;
    padding: 16px 32px;
    width: fit-content;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    transition: background-color 0.5s ease, color 0.5s ease;

    &:hover{
        ${props => props.theme === 'primary' ? 'opacity: 0.8;' : 'background-color: #FFF ; color: #000'}
    }
    &:active{
        opacity: 0.5;
    }
`