import React from 'react'
import FormContainer from './form/form_container'
import { Route, Switch, Link } from 'react-router-dom';
import Splash from './splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
    return (
        <>
            <h1>Mockingbird</h1>
            <FormContainer />
            <Switch>
                <AuthRoute exact path='/' component={Splash} />
            </Switch>
        </>
    )
}

export default App;