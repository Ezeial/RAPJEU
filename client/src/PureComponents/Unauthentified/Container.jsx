import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;

    background: radial-gradient(75% 75% at 61.53% 50%, #AD50D2 3.12%, #62008A 100%);
`

const Container = ({ children }) => <Box> { children } </Box>


export default Container