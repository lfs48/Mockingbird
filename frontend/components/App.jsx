import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { AuthRoute } from '../util/route_util';
import MainMenuContainer from './main_menu/main_menu_container';

const App = () => {
    return (
        <>
            <h1>Mockingbird</h1>
            
            <Switch>
                <AuthRoute exact path='/home' component={MainMenuContainer} />
            </Switch>
        </>
    )
}

export default App