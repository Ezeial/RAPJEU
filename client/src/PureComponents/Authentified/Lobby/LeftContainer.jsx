import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    justify-content:center;
    padding: 10px;
    max-width: 1000px;
`

const LeftContainer = ({ children }) => <Box> { children } </Box>


export default LeftContainer