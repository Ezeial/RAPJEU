import styled from 'styled-components'

const UnderBox = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center; 
    flex-direction: column;
    background: ${props => props.isUserTeam ? '#FFFFFF4F' : '#02020280'};
    border-radius: 8px;
`

export default UnderBox