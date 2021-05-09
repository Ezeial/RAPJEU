import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    margin: 0 25px;
    
    @media (max-width: 1000px) {
        max-width: 150px;
        margin: 0;
      }
`

const Label = styled.div`
    font-weight: 600;
    font-size: 0.8rem;
    color: white;
`

const Input = styled.input`
    font-size: 1.4rem;
    font-weight: 800;
    padding: 10px;
    background: #FFFFFF42;
    border: none;
    border-radius:13px; 
    outline: none;
    color: white;
`

const TextInput = ({ text, callback }) => <Container>
        <Label>{ text }:</Label>
        <Input onChange = {callback} type = 'text'/>
    </Container>


export default TextInput 