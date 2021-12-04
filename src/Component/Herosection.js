import React from 'react';
import { Link } from 'react-router-dom';
import heroImageOne from '../img/hero-recipe-one.jpg';
import heroImageThree from '../img/hero-recipe-three.jpg';
import heroImageTwo from '../img/hero-recipe-two.jpg';
import Card from './Card';
import Slider from './slider';

export default function Herosection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 d-none d-lg-block">
          <Card heroImage={heroImageOne} recipeName="Easy Beet Fritters with Dill Yogurt Sauce" />
        </div>
        <div className="col-12 col-lg-4 d-none d-lg-block">
          <Card
            heroImage={heroImageTwo}
            recipeName="Creamy Vegan Mushroom Stroganoff (GF Optional)"
          />
        </div>
        <div className="col-12 col-lg-4 d-none d-lg-block">
          <Card heroImage={heroImageThree} recipeName="Miso Pumpkin Risotto with Crispy Sage" />
        </div>
        <div className="col d-block d-lg-none">
          <Slider />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <Link to="/allrecipe" style={{ textDecoration: 'none' }}>
            <div className="show-me-link mb-3">
              <span className="fs-6">SHOW ME EVERYTHING</span>
              <i className="bi bi-arrow-right ps-2 fs-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
