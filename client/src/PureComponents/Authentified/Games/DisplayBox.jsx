import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    min-width: 40%;
    max-width: 80%;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 17px;
    background: rgba(0, 0, 0, 0.42);
    margin: 8vh;
`

const SubContainer = styled.div`
    text-align: center;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background: linear-gradient(93.22deg, rgba(252, 89, 67, 0.8) 5.64%, rgba(98, 0, 138, 0.8) 97.35%);
    color:white;
    border: 3px solid white;
    border-radius: 15px;
    margin: 1.3rem;
    min-height: 5rem;
    font-size: 5rem;
    padding: 5px 20px;
    font-weight: 700;
`

const Hint = styled.div`
    font-size: 1rem;
    color:white;
    position: absolute;
    top: 0px;
`

const DisplayBox = ({ children, hint }) => {
    
    return <Container>
        <Hint>{ hint }</Hint>
        <SubContainer>   
            { children }
        </SubContainer>
    </Container>
}

export default DisplayBox