import UserContext from './Contexts/User'
import { Switch, Route, Redirect } from 'react-router-dom'

import Unauthentified from './Containers/Unauthentified'
import Authentified from './Containers/Authentified'

import PrivateRoute from './LogicalComponents/PrivateRoute'

const App = () => {
  return (
    <Switch>
      <UserContext> 
        <Route exact path = '/'>
          <Redirect to = '/public'/>
        </Route>
        <Route path = '/public'>
          <Unauthentified/>
        </Route>
        <PrivateRoute path = '/protected/:roomId'>
          <Authentified/>
        </PrivateRoute>
      </UserContext>
    </Switch>
  )
}

export default App
