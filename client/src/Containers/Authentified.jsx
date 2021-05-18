import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom'

import GameContext from '../Contexts/Game'

import Lobby from '../Containers/Authentified/Lobby'
import Game from '../Containers/Authentified/Game'

import Container from '../PureComponents/Authentified/Container'
import TopBar from '../PureComponents/TopBar'

const Authentified = () => {
    const { url } = useRouteMatch()
    
    const { roomId } = useParams()
    
    return <Container>
        <TopBar/>
        <GameContext {...{roomId}}>
            <Switch>
                <Route exact path = {`${url}/`}>
                    <Lobby/>
                </Route>
                <Route path = {`${url}/game`}>
                    <Game/>
                </Route>
            </Switch>
        </GameContext>
    </Container>
}

export default Authentified