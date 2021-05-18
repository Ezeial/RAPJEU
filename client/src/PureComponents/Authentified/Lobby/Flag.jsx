import styled from 'styled-components'

const Box = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background: linear-gradient(90.98deg, #3EEB98 0%, #AD50D2 89.82%);
    @media (max-width: 1000px) {
        height: 50px;
        width: 50px;
      }
    `

const Flag = ({ children, callback }) => <Box onClick = {callback}> { children } </Box>


export default Flag