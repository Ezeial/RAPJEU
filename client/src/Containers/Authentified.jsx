import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom'

import GameContext from '../Contexts/Game'

import Lobby from '../Containers/Authentified/Lobby'
import Game from '../Containers/Authentified/Game'

const Authentified = () => {
    const { url } = useRouteMatch()
    
    const { roomId } = useParams()
    
    return <GameContext {...{roomId}}>
        <Switch>
            <Route exact path = {`${url}/`}>
                <Lobby/>
            </Route>
            <Route path = {`${url}/game`}>
                <Game/>
            </Route>
        </Switch>
    </GameContext>
}

export default Authentified