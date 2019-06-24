import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../actions/session_actions';

export default function Splash() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    return (
        <>
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
           
        </>
    );
}

