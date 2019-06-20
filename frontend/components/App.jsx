import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainMenuContainer from './main_menu/main_menu_container';
import FormContainer from './form/form_container';
import Splash from './splash';


const App = () => {
    return (
        <>
                <h1>Mockingbird</h1>
                <FormContainer />
            <Switch>
                <AuthRoute exact path='/home' component={MainMenuContainer} />
                <AuthRoute exact path='/' component={Splash} />
            </Switch>
        </>
    )
}

export default App;