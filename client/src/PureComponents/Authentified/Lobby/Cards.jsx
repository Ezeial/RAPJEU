import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
`

const Cards = ({ children }) => <Box> { children } </Box>


export default Cards