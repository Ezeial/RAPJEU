import styled from 'styled-components'
import ArrowSvg from '../../../../assets/arrow.svg'

const Container = styled.div`
    background: #0000006B;
    border-radius: 11px;
    padding: 15px;

    display:flex;
    justify-content:center;
    align-items:center;
    margin: 5px;

    cursor: pointer;
`

const Svg = styled.img`
width: 40px;
`

const Button = () => <Container>
        <Svg src = {ArrowSvg}/>
    </Container>


export default Button