import React from 'react';
import { Link } from 'react-router-dom';

export default function SecondCard({ SecondCardImage, recipeName }) {
  return (
    <div className="hero-card-wraper">
      <div className="text-center">
        <Link to="/recipe" style={{ textDecoration: 'none' }}>
          <img src={SecondCardImage} alt="" className="img-fluid" />
        </Link>
      </div>
      <div className="recipe-name fs-5 text-center mb-3 mt-3 h-100">{recipeName}</div>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <button type="button" className="btn btn-outline-primary quick-meal-button">
          SEE MORE
        </button>
      </div>
    </div>
  );
}
