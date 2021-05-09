import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 55%;
    max-width: 800px;
    padding: 10px;
    border: solid 1px white;
`

const Container = ({ children }) => <Box> { children } </Box>


export default Container