import React from 'react';
import { Link } from 'react-router-dom';
import TagCircle from './TagCircle';

export default function Card({ heroImage, recipeName }) {
  return (
    <div className="hero-card-wraper">
      <div className="text-center">
        <Link to="/recipe" style={{ textDecoration: 'none' }}>
          <img src={heroImage} alt="" className="img-fluid" />
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <TagCircle bgcolor="#003811" circleText="GF" />
        <TagCircle bgcolor="#b45026" circleText="VG" />
        <TagCircle bgcolor="#ffb5a3" circleText="V" />
        <TagCircle bgcolor="#f31a0a" circleText="DF" />
      </div>
      <div className="recipe-name fs-4 text-center mb-3">{recipeName}</div>
    </div>
  );
}
