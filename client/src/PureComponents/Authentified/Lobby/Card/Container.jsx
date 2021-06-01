import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 15px;
    flex-direction: column;
    border-radius: 15px;

    margin: 10px;
    min-width: 300px;
    width: 20%;
`

const Container = ({ children }) => <Box> { children } </Box>


export default Container