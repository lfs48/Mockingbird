import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../actions/session_actions';
import { CSSTransition } from 'react-transition-group';


export default function Splash() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    return (
        <CSSTransition
            in={true}
            appear
            classNames="splash-transition"
            timeout={2000}
            unmountOnExit
        >
            <div id="splash-container">
                <h1>Mockingbird</h1>
                <form>
                    <input 
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="username"
                    />
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="password"
                    />
                    <button 
                        type="submit"
                        onClick={() => dispatch(login({username: username, password: password}))}
                    >Log In</button>
                </form>
            </div>
        </CSSTransition>
    );
}

