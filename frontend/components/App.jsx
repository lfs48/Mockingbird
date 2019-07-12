import React from 'react';
import Map from './Map/map';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainMenu from './main_menu/main_menu';
import FormContainer from './form/form_container';
import Splash from './splash';


const App = () => {
    return (
        <>

            <Switch>
                <ProtectedRoute exact path='/home' component={MainMenu} />
                <AuthRoute exact path='/form' component={FormContainer} />
                <AuthRoute exact path='/' component={Splash} />
            </Switch>
        </>
    )
}

export default App;
