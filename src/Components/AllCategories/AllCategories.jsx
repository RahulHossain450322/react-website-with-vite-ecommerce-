import React from 'react';
import { GiTomato, GiChemicalBolt } from 'react-icons/gi';
import { FaArtstation, FaChair } from 'react-icons/fa';
import { SiStmicroelectronics } from 'react-icons/si';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

function AllCategories() {
  return (
    <section className="categories py-4">
      <div className="container">
        <div className="more-product d-flex align-items-center">
          <GiTomato />
          <Link to="/product/all-catogories/agriculter&food" className="ms-2 text-decoration-none text-dark">Agriculture & Food</Link>
        </div>
        <div className="more-product d-flex align-items-center">
          <FaArtstation />
          <Link to="/product/all-catogories/arts&crafts" className="ms-2 text-decoration-none text-dark">Arts & Crafts</Link>
        </div>
        <div className="more-product d-flex align-items-center">
          <GiChemicalBolt />
          <Link to="/product/all-catogories/chemicals" className="ms-2 text-decoration-none text-dark">Chemicals</Link>
        </div>
        <div className="more-product d-flex align-items-center">
          <SiStmicroelectronics />
          <Link to="/product/all-catogories/electrical&electronics" className="ms-2 text-decoration-none text-dark">Electrical & Electronics</Link>
        </div>
        <div className="more-product d-flex align-items-center">
          <FaChair />
          <Link to="/product/all-catogories/furniture" className="ms-2 text-decoration-none text-dark">Furniture</Link>
        </div>
      </div>
    </section>
  );
}

export default AllCategories;
