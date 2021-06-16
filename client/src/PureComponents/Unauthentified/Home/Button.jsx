import styled from 'styled-components'

const Bg = styled.div`  
    border-radius: 13px;
    background: #FFFFFF66;
    padding: 15px;
    margin: 10px;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(276.23deg, #FC5943 3.13%, #62008A 100%);
    border-radius: 13px;
    border: solid 5px white;

    min-width: 450px;
    cursor: pointer;
    
    position: relative;

    @media (max-width: 1000px) {
        min-width: 29rem;
    }
`

const BigLabel = styled.div`
    color: white;
    font-size: 4.5rem;
    font-weight: 700;
    z-index: inherit;
    padding: 2rem;
`

const Label = styled.div`
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    z-index: inherit;
    position: absolute;
    bottom: 8px;
`

const Button = ({ text }) => <Bg>
    <Box>
        <BigLabel>{ text }</BigLabel>
        <Label>une partie</Label>
    </Box>
</Bg>

export default Button