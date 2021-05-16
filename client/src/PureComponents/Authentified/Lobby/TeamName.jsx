import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    @media (max-width: 1000px) {
        max-width: 150px;
        margin: 0;
      }
`

const SmLabel = styled.div`
    font-weight: 600;
    font-size: 0.8rem;
    color: white;
`

const Label = styled.div`
    font-size: 1.4rem;
    font-weight: 800;
    padding: 10px;
    background: #FFFFFF42;
    border: none;
    border-radius:13px; 
    outline: none;
    color: white;
    text-align: center;
`

const TeamName = ({ text, name }) => <Container>
        <SmLabel>{ text }:</SmLabel>
        <Label>{ name || '...' }</Label>
    </Container>


export default TeamName 