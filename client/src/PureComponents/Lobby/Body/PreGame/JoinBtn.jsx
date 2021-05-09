import styled, { keyframes } from 'styled-components'

const Fade = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 8px 15px;
    background: linear-gradient(90.98deg, #3EEB98 0%, #AD50D2 89.82%);
    border-radius: 8px;

    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    margin: 8px;
    background-size: 200%;
    animation: 4s ${Fade} linear infinite;

    cursor: pointer;
    transition: all 1s ease;
        &:hover {
            background-size: 100%;
        }
`

const JoinBtn = ({ callback }) => <Box onClick = {callback}>REJOINDRE</Box>


export default JoinBtn