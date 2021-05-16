import Container from '../../PureComponents/Unauthentified/Home/Container'
import Button from '../../PureComponents/Unauthentified/Home/Button'
import MiddleBar from '../../PureComponents/Unauthentified/Home/MiddleBar'

import Link from '../../LogicalComponents/MyLink'

import { useRouteMatch } from 'react-router-dom'

const Home = () => {
    const { path } = useRouteMatch()

    return <Container>
        <Link to = {`${path}/auth/create`}>
            <Button text = 'CREER'/>
        </Link>
            <MiddleBar/>
        <Link to = {`${path}/auth/join`}>
            <Button text = 'REJOINDRE'/>
        </Link>
    </Container>
}

export default Home