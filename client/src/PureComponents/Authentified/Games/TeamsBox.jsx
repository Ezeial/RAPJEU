import styled from 'styled-components'

import Flag from '../Flag'

const Container = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    position: fixed;
    bottom: 0;
    width: 80%;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 10px 10px 0px 0px;
    transform: translateY(calc(100% - 30px));
    transition: all 0.7s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(0);
    }
`

const TeamsBox = () => <Container>
    <Flag/>
    <Flag/>
    <Flag/>
    <Flag/>
</Container>
 
export default TeamsBox