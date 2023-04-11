import React from 'react';
import BannerPhoto from './BannerImg/ei_1678615255311-removebg-preview.png';

import './Banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-des container d-flex justify-content-center align-items-center">
        <div className="banner-image">
          <img className="img-fluid" src={BannerPhoto} alt="Banner" />
        </div>
        <div className="banner-content p-3 me-3">
          <div className="banner-title">
            <span className="newArrivals">NEW ARRIVALS</span>
            <h1 className="justForYou">JUST FOR YOU</h1>
          </div>
          <div className="">
            <div className="banner-card d-flex">
              <p className="online bg-dark text-light p-2">
                FOR ONELINE
                <br />
                <span className="h4">ORDER</span>
              </p>
              <p className="discount p-2">
                30%
                <br />
                OFF
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
