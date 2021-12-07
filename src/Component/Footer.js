import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container">
      <div className="row mt-5 mb-2">
        <div className="col">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-around nav-items pt-2 pb-3 pe-1 ps-1">
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <div>Home</div>
            </Link>
            <Link to="/recipe" style={{ textDecoration: 'none' }}>
              <div>Browse Recipe</div>
            </Link>
            <Link to="/cookbook" style={{ textDecoration: 'none' }}>
              <div>Cook Book</div>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <div>About</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
