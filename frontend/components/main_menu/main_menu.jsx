import React from 'react';

const MainMenu = (currentUser, logout) => {

  return (
    <>

      <main className="main-menu-content-container">
        <div className="navbar-container">
          <div className="navbar-username-container">
            <span className="navbar-username">{currentUser.username}</span>
          </div>
          <div className="navbar-logout-button-container">
            <button className="navbar-logout-button" onClick={logout}>Log Out</button>
          </div>
        </div>

        <div className="map-container">

        </div>

      </main>

    </>
  )
}
export default MainMenu;