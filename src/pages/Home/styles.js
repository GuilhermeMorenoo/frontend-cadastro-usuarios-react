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