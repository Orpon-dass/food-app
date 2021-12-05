import React from 'react';
import recentFive from '../img/recent-five.jpg';
import recentfour from '../img/recent-four.jpg';
import recentOne from '../img/recent-one.jpg';
import recentThree from '../img/recent-three.jpg';
import recentTwo from '../img/recent-two.jpg';
import PopularRecipe from './PopularRecipe';
import RecipeKey from './RecipeKey';

export default function RecentRecipe() {
  return (
    <div className="container-fluid">
      <div className="row mt-5 mb-5 pt-5">
        <div className="col-12 col-lg-8 pb-3" style={{ backgroundColor: '#fbf8f3' }}>
          <div className="fs-2 mt-3 pt-4 ps-2 pe-2 pb-2">READER FAVORITES</div>
          <div className="line ms-2 me-2 mb-4" />
          <PopularRecipe
            popularImage={recentOne}
            popularText="Butternut Squash Lasagna (Vegan, GF Optional)"
            number="01"
          />
          <PopularRecipe
            popularImage={recentTwo}
            popularText="The BEST Gluten-Free Bread (No-Knead!)"
            number="02"
          />
          <PopularRecipe
            popularImage={recentThree}
            popularText="Pecan Pie Bars (Vegan + GF)"
            number="03"
          />
          <PopularRecipe
            popularImage={recentfour}
            popularText="Easy Apple Coffee Cake (GF, Vegan)"
            number="04"
          />
          <PopularRecipe
            popularImage={recentFive}
            popularText="Roasted Red Pepper Chickpea Curry (Instant Pot Friendly)"
            number="05"
          />
        </div>
        <div className="col-12 col-lg-4" style={{ backgroundColor: '#fbf8f3' }}>
          <div className="mt-5 pt-3">
            <RecipeKey />
          </div>
        </div>
      </div>
    </div>
  );
}
