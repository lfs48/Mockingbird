import React from 'react';
import Navbar from '../navbar/navbar';
import Map from '../Map/map';

const MainMenu = () => {

  return (
    <>

      <main className="main-menu-content-container">
        <Navbar/>
        <div className="map-container">
          <Map/>
        </div>

      </main>

    </>
  )
}
export default MainMenu;