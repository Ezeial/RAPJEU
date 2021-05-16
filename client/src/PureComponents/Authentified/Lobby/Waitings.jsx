import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

const Waitings = ({ children }) => <Box> { children } </Box>


export default Waitings