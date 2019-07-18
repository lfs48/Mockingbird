import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../actions/session_actions';

export default function Navbar() {

    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.entities.users[state.session.id])

    const handleLogout = () => {
        dispatch(logout());
    }

    return(
        <div className="navbar-container">
            <span className="navbar-title">
              Mockingbird
            </span>
            <div className="navbar-user-container">
                <span className="navbar-username">
                    Welcome, agent {currentUser.username}
                </span>
                <button 
                className="navbar-logout-button" 
                onClick={() => handleLogout()}>
                    Log Out
                </button>
            </div>
        </div>
    );
}