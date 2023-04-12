import React, { useState } from 'react';
import { FaOpencart } from 'react-icons/fa';
import './Navbar.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    const navbar = document.querySelector('#demo');
    navbar.classList.toggle('show');
    setToggle(!toggle);
  };

  return (
    <header className="header bg-light position-sticky top-0">
      <nav className="container navItem navbar navbar-expand-lg">
        <div className="logo-section d-flex">
          <a href="/" className="text-danger">
            <FaOpencart className="logo" />
          </a>
          <div className="onlineTitle my-auto">
            <span className="ms-2">ONELINE</span>
            <span className="ms-2 store">STORE</span>
          </div>
          <button
            onClick={handleClick}
            type="button"
            className="btn-background bg-light menu-icon"
          >
            {toggle ? <AiOutlineMenu className="navmenu" /> : <RxCross1 className="cross" />}
          </button>
        </div>
        <div id="demo" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="/" className="nav-link link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="/product" className="nav-link link">
                PRODUCT
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link link">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="phone ms-auto text-end">
          <span className="normal-bold">CALL NOW</span>
          <br />
          <span className="bold">1800-555-888</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
