import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    position: absolute; 
    bottom: 50px;
    padding: 2.1rem 0;
`

const TextInput = styled.input`
    padding: 15px;
    height: 100%;
    background: rgba(255, 255, 255, 0.31);
    border-radius: 12px;
    border: none;
    outline: none;
    text-align: center;
    font-weight: 700;
    min-width: 3rem;
    width: 25rem;
    font-size: 3rem;
`

const Btn = styled.div`
    margin: 0 10px;
    padding: 15px;
    background: #FFFFFF40;
    border-radius: 11px;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    color: white;
    font-size: 3rem;
    font-weight: 600;
    cursor: pointer;
`

const Hint = styled.div`
    font-size: 1rem;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
`

const ResponseBox = () => <Container>
    <Hint>Ecris ta réponse:</Hint>
    <TextInput type = 'text'/>
    <Btn>
        Enter
    </Btn>
</Container>

export default ResponseBox 