import React from 'react';
import './Product.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import { AiOutlineAppstoreAdd, AiOutlineVideoCamera } from 'react-icons/ai';
import { VscGitPullRequestGoToChanges } from 'react-icons/vsc';
import { MdOutlineOnlinePrediction } from 'react-icons/md';

function Product() {
  return (
    <section className="product py-4">
      <div className="container">
        <div className="all-product">
          <Link to="/product/all-categories" className="products-title">
            <AiOutlineAppstoreAdd className="icon" />
            All Categories
          </Link>
          <Link to="/" className="products-title">
            <VscGitPullRequestGoToChanges className="icon" />
            Request for Quotation
          </Link>
          <Link to="/" className="products-title">
            <MdOutlineOnlinePrediction className="icon" />
            Online Trading
          </Link>
          <Link to="/" className="products-title">
            <AiOutlineVideoCamera className="icon" />
            Featured Video
          </Link>
          <Link to="/" className="products-title">
            <AiOutlineVideoCamera className="icon" />
            Get App
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Product;
