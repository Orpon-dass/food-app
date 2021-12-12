import React from 'react';
import TagCircle from './TagCircle';

export default function PopularRecipe({ popularImage, popularText, number }) {
  return (
    <div className="row mt-2 mb-3 popular-recipe-background ms-2 me-2">
      <div className="col-12 col-lg-2 d-flex justify-content-start align-items-center ">
        <img className="img-fluid popular-image p-2" src={popularImage} alt="recentOne" />
      </div>
      <div className=" col-12 col-lg-6 d-flex flex-column flex-md-row justify-content-center align-items-center">
        <h1 className="popular-number ps-2 pe-3 mt-1 mt-lg-0">{number}</h1>
        <h4 className="popular-text text-center mt-1 mt-lg-0">{popularText}</h4>
      </div>
      <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center mt-2 mb-2 mt-lg-0">
        <TagCircle bgcolor="#003811" circleText="GF" />
        <TagCircle bgcolor="#b45026" circleText="VG" />
        <TagCircle bgcolor="#ffb5a3" circleText="V" />
        <TagCircle bgcolor="#f31a0a" circleText="DF" />
      </div>
    </div>
  );
}
