import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 575px;
    @media (max-width: 1000px) {
        
        min-height: 430px;
    }
`

export default Container 