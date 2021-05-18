import styled from 'styled-components'

const Btn = styled.div`
    font-size: 4rem;
    font-weight: 800;
    color: #3EEB98;
    padding: 8px 15px;
    background: rgba(255, 255, 255, 0.18);
    border-radius: 8px;

    display:flex;
    justify-content:center;
    align-items:center;

    cursor: pointer;

    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
`

const PlayButton = ({ children, callback }) => <Btn onClick = {callback}>{ children }</Btn>

export default PlayButton
