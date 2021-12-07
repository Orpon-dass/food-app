import React, { useState } from 'react';
import heroImageOne from '../img/hero-recipe-one.jpg';
import heroImageThree from '../img/hero-recipe-three.jpg';
import heroImageTwo from '../img/hero-recipe-two.jpg';
import quickMealFour from '../img/quick-meal-four.jpg';
import quickMealOne from '../img/quick-meal-one.jpg';
import quickMealThree from '../img/quick-meal-three.jpg';
import quickMealTwo from '../img/quick-meal-two.jpg';
import CustomButton from './CustomButton';
import SecondCard from './SecondCard';

export default function ExploreRecipe() {
  const [type, setType] = useState(true);
  const typeOfRecipe = () => {
    setType(!type);
  };
  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <div className="col-6 col-lg-3">
          <CustomButton
            typeOfRecipe={typeOfRecipe}
            buttonText="SWEET(DESSERT)"
            buttonclass="explore-one-button"
          />
        </div>
        <div className="col-6 col-lg-3">
          <CustomButton
            typeOfRecipe={typeOfRecipe}
            buttonText="ENTREE"
            buttonclass="explore-two-button"
          />
        </div>
        <div className="col-6 col-lg-3">
          <CustomButton
            typeOfRecipe={typeOfRecipe}
            buttonText="SNACKS"
            buttonclass="explore-three-button"
          />
        </div>
        <div className="col-6 col-lg-3">
          <CustomButton
            typeOfRecipe={typeOfRecipe}
            buttonText="HELPFUL"
            buttonclass="explore-four-button"
          />
        </div>
      </div>
      <div className="row">
        {type === true && (
          <div className="col-12 col-lg-3 ps-2 pe-2 pt-3">
            <SecondCard
              typeOfRecipe={typeOfRecipe}
              SecondCardImage={quickMealOne}
              recipeName="THAI COCONUT CURRY RAMEN"
            />
          </div>
        )}
        {type === true && (
          <div className="col-12 col-lg-3 ps-2 pe-2 pt-3">
            <SecondCard
              typeOfRecipe={typeOfRecipe}
              SecondCardImage={quickMealTwo}
              recipeName="SKILLET SUN DRIED TOMATO CHICKEN THIGHS"
            />
          </div>
        )}
        {type === true && (
          <div className="col-12 col-lg-3 ps-2 pe-2 pt-3">
            <SecondCard
              typeOfRecipe={typeOfRecipe}
              SecondCardImage={quickMealThree}
              recipeName="SALMON WITH GARLIC CREAM SAUCE"
            />
          </div>
        )}
        {type === true && (
          <div className="col-12 col-lg-3 ps-2 pe-2 pt-3">
            <SecondCard
              typeOfRecipe={typeOfRecipe}
              SecondCardImage={quickMealFour}
              recipeName="CHINA SHEET PAN SHRIMP TACOS"
            />
          </div>
        )}
        {type === false && (
          <div className="col-12 col-lg-3 pe-2 pt-4">
            <SecondCard
              SecondCardImage={heroImageOne}
              recipeName="Easy Beet Fritters with Dill Yogurt Sauce"
            />
          </div>
        )}
        {type === false && (
          <div className="col-12 col-lg-3 pe-2 pt-4">
            <SecondCard
              SecondCardImage={heroImageTwo}
              recipeName="Creamy Vegan Mushroom Stroganoff (GF Optional)"
            />
          </div>
        )}
        {type === false && (
          <div className="col-12 col-lg-3 pe-2 pt-4">
            <SecondCard
              SecondCardImage={heroImageThree}
              recipeName="Miso Pumpkin Risotto with Crispy Sage"
            />
          </div>
        )}
        {type === false && (
          <div className="col-12 col-lg-3 pe-2 pt-4">
            <SecondCard
              SecondCardImage={heroImageTwo}
              recipeName="Miso Pumpkin Risotto with Crispy Sage"
            />
          </div>
        )}
      </div>
    </div>
  );
}
