import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Splah from './splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
    return (
        <>
            <Switch>
                <AuthRoute exact path='/' component={Splash} />
            </Switch>
        </>
    )
}

export default App