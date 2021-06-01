import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;

    background: linear-gradient(243.18deg, #FC5943 3.13%, #62008A 100%);
`

const Container = ({ children }) => <Box> { children } </Box>


export default Container