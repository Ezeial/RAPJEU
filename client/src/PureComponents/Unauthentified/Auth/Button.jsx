import styled from 'styled-components'

const Container = styled.div`
    background: #FFFFFF40;
    border-radius: 11px;
    padding: 15px;

    display:flex;
    justify-content:center;
    align-items:center;
    margin: 5px;
    color: white;
    font-size: 1.5rem;
    font-weight: 900;
    cursor: pointer;
`

const Button = ({callback}) => <Container onClick = {callback}>
        ENTER
    </Container>


export default Button