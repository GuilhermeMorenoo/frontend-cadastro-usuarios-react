import styled from 'styled-components'

export const Container = styled.div`
    background: #181f36;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;
`

export const TopBackground = styled.div`
    background: linear-gradient(to right, #fe7e5d, #7f3841);
    height: 30vh;
    width: 90vw;
    max-width: 900px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
`

export const Title = styled.h2`
    color: #FFF;
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    text-shadow: 2px 2px 4px black;
`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 10px;
`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #d2dae2;
    background-color: #FFF;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const InputLabel = styled.label`
    color: #FFF;
    font-size: 12px;
    font-weight: 500;

    span {
        color: #ef4f45;
        font-weight: bold;
    }
`

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
