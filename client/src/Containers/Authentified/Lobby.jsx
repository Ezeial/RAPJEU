import { Link, useRouteMatch } from 'react-router-dom'

const Lobby = ({ roomId }) => {
    const { url } = useRouteMatch()
    
    return <Link to = {`${url}/game`}>LINK</Link>
}

export default Lobby