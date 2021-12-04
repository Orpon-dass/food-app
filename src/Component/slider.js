import React from 'react';
import heroImageOne from '../img/hero-recipe-one.jpg';
import heroImageThree from '../img/hero-recipe-three.jpg';
import heroImageTwo from '../img/hero-recipe-two.jpg';
import Card from './Card';

export default function Slider() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Card heroImage={heroImageOne} recipeName="Easy Beet Fritters with Dill Yogurt Sauce" />
          </div>
          <div className="carousel-item">
            <Card
              heroImage={heroImageTwo}
              recipeName="Creamy Vegan Mushroom Stroganoff (GF Optional)"
            />
          </div>
          <div className="carousel-item">
            <Card heroImage={heroImageThree} recipeName="Miso Pumpkin Risotto with Crispy Sage" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
