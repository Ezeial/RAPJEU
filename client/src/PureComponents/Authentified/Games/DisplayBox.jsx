import styled from 'styled-components'

const Container = styled.div`
    padding: 10px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.42);
`

const SubContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    border: 2px solid white;
    border-radius: 15px;

    font-size: 5rem;
    padding: 5px 15px;
    font-weight: 800;
`

const DisplayBox = ({ children }) => {
    return <Container>
        <SubContainer>   
            { children }
        </SubContainer>
    </Container>
}

export default DisplayBox