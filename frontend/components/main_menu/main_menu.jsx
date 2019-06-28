import React from 'react';
import Map from '../Map/map';

const MainMenu = (
  currentUser, 
  logout
  ) => {

  return (
    <>

      <main className="main-menu-content-container">
        <div className="navbar-container">
          <div className="navbar-title">Mockingbird</div>
          <div className="navbar-user-container">
            <div className="navbar-username-container">
              <span className="navbar-username">
                {currentUser.username}
              </span>
            </div>
            <div className="navbar-logout-button-container">
              <button className="navbar-logout-button" onClick={() =>logout}>Log Out</button>
            </div>
          </div>
        </div>

        <div className="map-container">
          <Map/>
        </div>

      </main>

    </>
  )
}
export default MainMenu;