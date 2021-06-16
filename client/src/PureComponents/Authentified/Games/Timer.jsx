import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 15px;
    border-bottom: solid 3px white;
    background: rgba(0, 0, 0, 0.8);
    position: sticky;
    top: 0;
    z-index: 50;
    box-shadow: 0 1px 1px rgba(0,0,0,0.08), 
                0 2px 2px rgba(0,0,0,0.12), 
                0 4px 4px rgba(0,0,0,0.16), 
                0 8px 8px rgba(0,0,0,0.20);
`

const Progress = styled.div`
    width: ${props => props.progress}%;
    height: 100%;
    background: linear-gradient(270deg, #62008A 0%, #FC5943 100%);
    border-radius: 0px 15px 15px 0px;
`

const TimeRemaining = styled.div`
    font-size: 3rem;
    font-weight: 800;
    color: white;
    position: absolute;
    margin: 0 10px;
    right: 0;
`

const Timer = ({ remain = 7, progress = 80 }) => <Container>
        <Progress progress = {progress}/>
        <TimeRemaining>{remain}</TimeRemaining>
    </Container>

export default Timer