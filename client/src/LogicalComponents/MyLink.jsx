import { Link } from 'react-router-dom'
import styled from 'styled-components'


const UnstyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const NewLink = (props) => <UnstyledLink {...props} />

export default NewLink