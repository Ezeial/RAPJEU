import styled from 'styled-components'

const Box = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    width: 100%;

    padding: 10px 0;
    margin: 10px 0 0 0;

    background: linear-gradient(90.98deg, #3EEB98 0%, #AD50D2 89.82%);

    
    color: white;
    font-weight: 800;
    font-size: 6rem;
    
    // box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
    // 0 2px 4px rgba(0,0,0,0.07), 
    // 0 4px 8px rgba(0,0,0,0.07), 
    // 0 8px 16px rgba(0,0,0,0.07),
    // 0 16px 32px rgba(0,0,0,0.07), 
    // 0 32px 64px rgba(0,0,0,0.07);
`


const TopBar = () => <Box>RAP JEU</Box>


export default TopBar