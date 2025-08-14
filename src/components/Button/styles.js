import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background: linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%);
    font-size: 16px;
    color: #FFF;
    padding: 16px 32px;
    width: fit-content;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    }
`