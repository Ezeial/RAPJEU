import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    @media (max-width: 1000px) {
      }
`

const SmLabel = styled.div`
    font-weight: 600;
    font-size: 0.8rem;
    color: white;
`

const Label = styled.div`
    width: 100%;
    font-size: 1.4rem;
    font-weight: 800;
    padding: 10px;
    background: #FFFFFF42;
    border: none;
    border-radius:13px; 
    outline: none;
    color: white;
    text-align: center;
    
    width: 300px;
`

const TeamName = ({ text, children }) => <Container>
        <SmLabel>{ text }:</SmLabel>
        <Label>{ children || '...' }</Label>
    </Container>


export default TeamName 