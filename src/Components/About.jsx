import React from 'react';
import AboutPhotos from './BannerImg/online.png';
import './About.css';

function About() {
  return (
    <section className="about py-4">
      <div className="container">
        <div className="top-title">
          <h1 className="text-center">About Us</h1>
        </div>
        <div className="about-content d-flex align-items-center justify-content-between">
          <div className="left-content">
            <h2 className="h4">
              We are doing business over 5+ years of love general pepole
            </h2>
            <p className="text-justify about-des">
              {/* eslint-disable-next-line max-len */}
              Bone laborigis niaj se staton prenis alian. Boaton cxar la unu volonte junulon, almenaux iris li de estos. Vivo mi bestoj da mi intencas da kuglon. Certigxis kiam .Bone laborigis niaj se staton prenis alian. Boaton cxar la unu volonte junulon, almenaux iris li de estos. Vivo mi bestoj da mi intencas da kuglon. Certigxis kiam .Bone laborigis niaj se staton prenis alian. Boaton cxar la unu volonte junulon, almenaux iris li de estos. Vivo mi bestoj da mi intencas da kuglon. Certigxis kiam .Bone laborigis niaj se staton prenis alian. Boaton cxar la unu volonte junulon, almenaux iris li de estos. Vivo mi bestoj da mi intencas da kuglon. Certigxis kiam .Bone laborigis niaj se staton prenis alian. Boaton cxar la unu volonte junulon, almenaux iris li de estos. Vivo mi bestoj da mi intencas da kuglon. Certigxis kiam .
            </p>
          </div>
          <div className="right-content bg-primary">
            <img className="img" src={AboutPhotos} alt="About" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
