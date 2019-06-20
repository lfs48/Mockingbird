import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainMenuContainer from './main_menu/main_menu_container';
import FormContainer from './form/form_container';
import Splash from './splash';


const App = () => {
    return (
        <>
        {/* <h1>Mockingbird</h1> */}
            <h3><a href="https://www.google.com/aclk?sa=l&ai=DChcSEwil2PTZr_jiAhWGQYYKHaonDHsYABAAGgJ2dQ&sig=AOD64_1PAqh8zXpdA4kX7K1IJwWYuhNsmg&q=&ved=2ahUKEwjuwe3Zr_jiAhUh01kKHUCJBX0Q0Qx6BAgMEAE&adurl=">Sponsored by Yubikey</a></h3>
            <Switch>    
                <AuthRoute exact path='/form' component={FormContainer} />
                <AuthRoute exact path='/home' component={MainMenuContainer} />
                <AuthRoute exact path='/' component={Splash} />
            </Switch>
        </>
    )
}

export default App;
