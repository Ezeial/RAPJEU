import styled from 'styled-components'

const TextInput = styled.input`
    width: 100%;
    min-height: 66px;
    background: rgba(255, 255, 255, 0.31);
    border-radius: 12px;
    border: none;
    outline: none;
    margin: 10px 0;
    padding: 10px 0;
    text-align: center;
    font-weight: 700;
    font-size: 2rem;

    &::placeholder {
        color: white;
    }
`

export default TextInput