import styled from 'styled-components'

const Box = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
    width: 100%;
    flex-wrap: wrap;
`

const Cards = ({ children }) => <Box> { children } </Box>


export default Cards