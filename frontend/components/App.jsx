import React from 'react';
import Map from './Map/map';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainMenuContainer from './main_menu/main_menu_container';
import FormContainer from './form/form_container';
import Splash from './splash';


const App = () => {
    return (
        <>

            <Switch>
                <ProtectedRoute exact path='/home' component={MainMenuContainer} />
                <AuthRoute exact path='/' component={Splash} />
                <AuthRoute exact path='/form' component={FormContainer} />
            </Switch>
        </>
    )
}

export default App;
