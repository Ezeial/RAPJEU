import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    justify-content:space-evenly;
    width: 100%;
`

const UpperCard = ({ children }) => <Box> { children } </Box>


export default UpperCard