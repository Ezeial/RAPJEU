import styled from 'styled-components'

const Box = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  background:linear-gradient(276.23deg, #FC5943 3.13%, #62008A 100%);
  // border: 3px solid white;
  margin: 15px 0;
`

const Flag = ({ children, callback }) => <Box onClick = {callback}> { children } </Box>


export default Flag