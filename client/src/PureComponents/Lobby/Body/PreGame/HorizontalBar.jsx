import styled from 'styled-components'

const Box = styled.div`
    width: 100%;
    margin: 8px 0;
    height: 8px;
    background: linear-gradient(90deg, #AD50D2 0%, #3EEB98 98.09%);
    border-radius: 8px;

    // box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
    // 0 2px 4px rgba(0,0,0,0.07), 
    // 0 4px 8px rgba(0,0,0,0.07), 
    // 0 8px 16px rgba(0,0,0,0.07),
    // 0 16px 32px rgba(0,0,0,0.07), 
    // 0 32px 64px rgba(0,0,0,0.07);
`

const HorizontalBar = ({ children }) => <Box> { children } </Box>


export default HorizontalBar