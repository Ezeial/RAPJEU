import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;

  padding: 8px;
  margin: 8px;

  background: rgba(0, 0, 0, 0.50);
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 800;
  color: white;

  width: 150px;

  @media (max-width: 1000px) {
    width: 70px;
  }
`

const Username = ({ children }) => <Box> { children } </Box>


export default Username