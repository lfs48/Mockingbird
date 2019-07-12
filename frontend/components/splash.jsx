import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../actions/session_actions';
import {createUser} from '../actions/user_actions';
import { CSSTransition } from 'react-transition-group';


export default function Splash() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(false);
        try {
            const result = await dispatch(login({username: username, password: password}));
        } catch {
            setErrors(true);
        }
    }

    const handleRegister = async (event) => {
        let result;
        event.preventDefault();
        setErrors(false);
        try {
            result = await dispatch(createUser({username: username, password: password}));
        } catch {
            setErrors(true);
        }
        if (!result) {
            setErrors(true);
        }
    }

    return (
        <CSSTransition
            in={true}
            appear
            classNames="splash-transition"
            timeout={2000}
            unmountOnExit
        >
            <div id="splash-container">
                <h1>AWAITING AUTHORIZATION</h1>
                <form>
                    <div className="splash-input-wrapper">
                        <label
                            htmlFor="splash-username-input"
                        >
                        username:
                        </label>
                        <input 
                            id="splash-username-input"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            autoComplete="off"
                        />
                    </div>
                    <div className="splash-input-wrapper">
                        <label
                            htmlFor="splash-password-input"
                        >
                        password:
                        </label>
                        <input 
                            id="splash-password-input"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit"
                        onClick={(event) => handleSubmit(event)}
                    >AUTHENTICATE CREDENTIALS</button>
                    <button 
                        onClick={(event) => handleRegister(event)}
                    >REGISTER NEW USER</button>
                </form>
                {errors ? 
                    <span id="splash-errors">ACCESS DENIED</span>
                :<></>}
            </div>
        </CSSTransition>
    );
}

