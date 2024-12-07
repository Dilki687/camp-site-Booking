import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/Landingscreen.css"

AOS.init({
  duration: 2000, // Animation duration
});

function Landingscreen() {
  return (
    <div className="row landing justify-content-center">
      <div
        className="col-md-9 my-auto text-center"
        style={{ borderRight: '8px solid white' }}
      >
        <h2 data-aos="zoom-in">CampZip</h2>
        <h1 data-aos="zoom-out">"Zip it up and camp it out"</h1>

        <Link to="/home">
          <button className="btn landingbtn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Landingscreen;
