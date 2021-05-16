import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction: column; 
    padding: 20px;

    background: #0000006B;
    border-radius: 12px;

    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
    0 2px 4px rgba(0,0,0,0.07), 
    0 4px 8px rgba(0,0,0,0.07), 
    0 8px 16px rgba(0,0,0,0.07),
    0 16px 32px rgba(0,0,0,0.07), 
    0 32px 64px rgba(0,0,0,0.07);
`

const Box = ({ children }) => <Container>{ children }</Container>


export default Box