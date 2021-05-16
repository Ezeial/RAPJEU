import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const Teams = ({ children }) => <Box> { children } </Box>


export default Teams