import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
`

const Container = ({ children }) => <Box> { children } </Box>


export default Container