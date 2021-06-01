import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    margin: 10px;
`

const Label = styled.div`
    font-weight: 700;
    font-size: 2rem;
    color: white;
`

const Input = styled.input`
    font-size: 2.5rem;
    font-weight: 700;
    
    background: #FFFFFF42;
    border: none;
    border-radius:13px; 
    outline: none;
    color: black;
    padding: 7px 15px;
    max-width: 300px;

    text-align: center;
`

const TextInput = ({ text, callback }) => <Container>
        <Label>{ text }:</Label>
        <Input onChange = {callback} type = 'text'/>
    </Container>


export default TextInput 