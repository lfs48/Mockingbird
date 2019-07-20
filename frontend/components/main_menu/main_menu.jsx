import React from 'react';
import Navbar from '../navbar/navbar';
import Map from '../Map/map';

const MainMenu = () => {

  return (
    <>

      <main className="main-menu-content-container">
        <Navbar/>
        <section id="main-menu-content">
          <ul>
            <li>Create Secret</li>
            <li>Recent Secrets</li>
          </ul>
          <div className="map-container">
            <Map/>
          </div>
        </section>
      </main>

    </>
  )
}
export default MainMenu;