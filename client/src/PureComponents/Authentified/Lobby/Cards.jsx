import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-items:space-between;
`

const Cards = ({ children }) => <Box> { children } </Box>


export default Cards