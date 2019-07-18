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
          <div className="navbar-title">Mockingbird</div>
          <div className="navbar-user-container">
            <div className="navbar-username-container">
              <span className="navbar-username">
                {currentUser.username}
              </span>
            </div>
            <div className="navbar-logout-button-container">
              <button className="navbar-logout-button" onClick={() => handleLogout()}>Log Out</button>
            </div>
          </div>
        </div>
    );
}