import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
`

const Container = ({ children }) => <Box> { children } </Box>


export default Container