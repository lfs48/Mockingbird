import React from 'react';
import Navbar from '../navbar/navbar';
import Map from '../Map/map';

const MainMenu = () => {

  const handleOpenForm = () => {
    
  }

  return (
    <>

      <main className="main-menu-content-container">
        <Navbar/>
        <section id="main-menu-content">
          <ul>
            <li onClick={() => handleOpenForm()}>Create Secret</li>
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