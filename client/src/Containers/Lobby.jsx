import Container from '../PureComponents/Lobby/Container'
import Footer from '../PureComponents/Lobby/Footer'
import TopBar from '../PureComponents/Lobby/TopBar'

import Home from '../Containers/SubContainers/Lobby/Home'
import Auth from '../Containers/SubContainers/Lobby/Auth'
import PreGame from '../Containers/SubContainers/Lobby/PreGame'

import {
    Switch,
    Route
} from "react-router-dom"

const Lobby = () => {
    return <Container>
        <TopBar/>
        <Switch>
            <Route exact path = '/'>    
                <Home/>
            </Route>
            <Route path = '/auth/:action'>    
                <Auth/>
            </Route>
            <Route path = '/lobby/:id?'>    
                <PreGame/>
            </Route>
        </Switch>
        <Footer/>
    </Container>
}

export default Lobby