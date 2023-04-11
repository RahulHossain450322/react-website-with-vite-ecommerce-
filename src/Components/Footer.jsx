import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { RxTwitterLogo } from 'react-icons/rx';
import { BsWhatsapp } from 'react-icons/bs';

import './Footer.css';

function Footer() {
  return (
    <footer className="footer py-5 bg-light">
      <div className="footer-content container">
        <div className="footer-title">
          &copy;
          <span className="">Company Name 2023.</span>
          <span className=""> All rights reserved</span>
        </div>
        <div className="footer-icon">
          <a
            href="/instragram"
            className="text-light bg-danger p-2 rounded-circle me-1"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="/facebook"
            className="text-light bg-danger p-2 rounded-circle me-1"
          >
            <FaFacebookF />
          </a>
          <a
            href="/twitter"
            className="text-light bg-danger p-2 rounded-circle me-1"
          >
            <RxTwitterLogo />
          </a>
          <a
            href="/whats'app"
            className="text-light bg-danger p-2 rounded-circle"
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
