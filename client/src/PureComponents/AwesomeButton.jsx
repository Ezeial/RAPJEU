import styled, { keyframes } from 'styled-components'
const Glowing = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`

const Box = styled.div`
    padding: 8px 15px;
    margin: 8px;
    font-size: 50px;
    font-weight: 600;
    color: white;
    background: #111;
    cursor: pointer;
    border-radius: 10px;
    position: relative;
    z-index: 0;
    font-size: 4.5rem;
    &:before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: ${Glowing} 20s linear infinite;
        opacity: 1;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }
    &:after {
        
    transition: all 0.7s ease;
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
    }
    &:hover:after {
        background: transparent;
    }
`

const AwesomeButton = ({ children }) => {
    return <Box>{children}</Box> 
}

export default AwesomeButton