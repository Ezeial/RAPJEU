import { useUserStore } from '../Contexts/User'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useUserStore()

    return <Route {...rest} render={(props) => (
      user.authentified 
        ? children
        : <Redirect to = '/'/>
    )} />}

export default PrivateRoute

        // {/* { user.authentified ? children : <Redirect to = '/'/> } */children}