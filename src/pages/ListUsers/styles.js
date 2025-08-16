import styled from "styled-components";

export const Container = styled.div`
    background: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const Title = styled.h2`
    color: #FFF;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    text-shadow: 2px 2px 4px black;
    margin-top: 20px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin: 30px 0;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;

    h3 {
        color: #FFF;
        font-size: 24px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p {
        color: #FFF;
        font-size: 14px;
        font-weight: 350;
        margin: 3px;
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

export const AvatarUser = styled.img`
    height: 80px;
`




