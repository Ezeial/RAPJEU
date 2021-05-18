import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 15px;
    background: rgba(0, 0, 0, 0.42); 
    flex-direction: column;
    border-radius: 15px;

    margin: 10px;
`

const Card = ({ children }) => <Box> { children } </Box>


export default Card