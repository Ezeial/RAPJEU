import Container from '../../../PureComponents/Lobby/Body/Container'
import Button from '../../../PureComponents/Lobby/Body/Home/Button'
import MiddleBar from '../../../PureComponents/Lobby/Body/Home/MiddleBar'

import Link from '../../../LogicalComponents/MyLink'

const Home = () => {
    return <Container>
        <Link to = '/auth/create'>
            <Button text = 'CREER'/>
        </Link>
            <MiddleBar/>
        <Link to = '/auth/join'>
            <Button text = 'REJOINDRE'/>
        </Link>
    </Container>
}

export default Home