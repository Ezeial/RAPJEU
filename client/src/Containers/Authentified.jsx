import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom'

import GameContext from '../Contexts/Game'

import Lobby from '../Containers/Authentified/Lobby'
import Games from './Authentified/Games'

import Container from '../PureComponents/Authentified/Container'
import TopBar from '../PureComponents/TopBar'

const Authentified = () => {
    const { url } = useRouteMatch()
    
    const { roomId } = useParams()
    
    return <Container>
        <GameContext {...{roomId}}>
            <Switch>
                <Route exact path = {`${url}/`}>        
                    <TopBar/>
                    <Lobby/>
                </Route>
                <Route path = {`${url}/games`}>
                    <Games/>
                </Route>
            </Switch>
        </GameContext>
    </Container>
}

export default Authentified