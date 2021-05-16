import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(96.66deg, rgba(62, 235, 152, 0.94) 0%, #AD50D2 100%);
    border-radius: 13px;
    min-width: 450px;
    cursor: pointer;
    
    position: relative;

    // box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
    // 0 2px 4px rgba(0,0,0,0.07), 
    // 0 4px 8px rgba(0,0,0,0.07), 
    // 0 8px 16px rgba(0,0,0,0.07),
    // 0 16px 32px rgba(0,0,0,0.07), 
    // 0 32px 64px rgba(0,0,0,0.07);

    @media (max-width: 1000px) {
        min-width: 250px;    
    }
`

const BigLabel = styled.div`
    color: white;
    font-size: 4.5rem;
    font-weight: 700;
    padding: 25px;
`

const Label = styled.div`
    color: white;
    font-size: 1.5rem;
    font-weight: 600;

    position: absolute;
    bottom: 8px;
`

const Button = ({ text }) => <Box>
        <BigLabel>{ text }</BigLabel>
        <Label>une partie</Label>
    </Box>


export default Button