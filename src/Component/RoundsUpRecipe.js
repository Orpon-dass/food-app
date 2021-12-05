import React from 'react';
import quickMealFour from '../img/quick-meal-four.jpg';
import quickMealOne from '../img/quick-meal-one.jpg';
import quickMealThree from '../img/quick-meal-three.jpg';
import quickMealTwo from '../img/quick-meal-two.jpg';
import SecondCard from './SecondCard';

export default function RoundsUpRecipe() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-3 ps-2 pe-2 pt-3">
          <SecondCard SecondCardImage={quickMealOne} recipeName="THAI COCONUT CURRY RAMEN" />
        </div>
        <div className="col-12 col-lg-3 ps-2 pe-2 pt-3">
          <SecondCard
            SecondCardImage={quickMealTwo}
            recipeName="SKILLET SUN DRIED TOMATO CHICKEN THIGHS"
          />
        </div>
        <div className="col-12 col-lg-3 ps-2 pe-2 pt-3">
          <SecondCard
            SecondCardImage={quickMealThree}
            recipeName="SALMON WITH GARLIC CREAM SAUCE"
          />
        </div>
        <div className="col-12 col-lg-3 ps-2 pe-2 pt-3">
          <SecondCard SecondCardImage={quickMealFour} recipeName="CHINA SHEET PAN SHRIMP TACOS" />
        </div>
      </div>
    </div>
  );
}
