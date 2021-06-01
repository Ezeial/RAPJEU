import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Container = ({ children }) => <Box> { children } </Box>


export default Container