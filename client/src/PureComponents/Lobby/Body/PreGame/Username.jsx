import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 8px;
    background: rgba(0, 0, 0, 0.50);
    border-radius: 8px;

    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    min-width: 150px;
    margin: 8px;
    @media (max-width: 1000px) {
        min-width: 70px;
      }
`

const Username = ({ children }) => <Box> { children } </Box>


export default Username