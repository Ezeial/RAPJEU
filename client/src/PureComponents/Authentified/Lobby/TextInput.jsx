import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 320px;
    @media (max-width: 1000px) {
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
    text-align: center;
    &::placeholder {
        color: white;
    }
`

const TextInput = ({ text, placeholder, callback }) => <Container>
        <Label>{ text }:</Label>
        <Input { ...{ placeholder }} onChange = {callback} type = 'text'/>
    </Container>


export default TextInput 