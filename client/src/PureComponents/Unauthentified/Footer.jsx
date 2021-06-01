import styled from 'styled-components'

const Box = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    width: 100%;

    padding: 5px 0;
    background: #FFFFFF40;


    
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
`

const Span = styled.span`
    color: ${props => props.color || 'white'};
    text-align:center;
    font-size: inherit;
`

const Footer = () => <Box>made with <span style = {{ lineHeight: '0'}}>❤️</span> by&nbsp;<Span color = 'black'> belle bande d’amis corporation ® </Span></Box>


export default Footer