import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Home from '../Containers/Unauthentified/Home'
import Auth from '../Containers/Unauthentified/Auth'

import Container from '../PureComponents/Unauthentified/Container'
import TopBar from '../PureComponents/TopBar'
import Footer from '../PureComponents/Unauthentified/Footer'

const Unauthentified = () => {
    const { path } = useRouteMatch()

    return <Container>
        <TopBar/>
            <Switch>
                <Route exact path = {`${path}`}>
                    <Home/>
                </Route>
                <Route path = {`${path}/auth/:action?`}>
                    <Auth/>
                </Route>
            </Switch>
        <Footer/>
    </Container>
}

export default Unauthentified