import React from 'react'
import Map from './Map/map_container';
import { Route, Switch, Link } from 'react-router-dom'

const App = () => {
    return (
        <>
            <h1>Mockingbird</h1>
            <Map /> 
        </>
    )
}

export default App