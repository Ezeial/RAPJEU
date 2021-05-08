import styled from 'styled-components'

const Box = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
`

const Bar = styled.div`
    width: 7px;
    height: 150px;
    border-radius: 30px;

    background: white;
`

const Label = styled.div`
    font-size: 3rem;
    font-weight: 700;
    margin: 15px;
    color:white;
`

const MiddleBar = () => <Box>
        <Bar/>
            <Label>OU</Label>
        <Bar/>
    </Box>


export default MiddleBar