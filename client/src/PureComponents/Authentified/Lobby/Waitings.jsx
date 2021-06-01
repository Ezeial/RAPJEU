import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    min-height: 60px;
`

const Waitings = ({ children }) => <Box> { children } </Box>


export default Waitings