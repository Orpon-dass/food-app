import React from 'react';
import SectionHeader from './SectionHeader';
import TagCircle from './TagCircle';

export default function RecipeKey() {
  return (
    <div className="wraper">
      <SectionHeader headingText="Recipe Key" />
      <div className="key-wraper d-flex ms-3 justify-content-start align-items-center">
        <div className="ps-2 pe-2">
          <TagCircle bgcolor="#003811" circleText="GF" />
        </div>
        <div className="recipe-key-value fs-5">Gluten-Free</div>
      </div>
      <div className="key-wraper d-flex ms-3 justify-content-start align-items-center">
        <div className="ps-2 pe-2">
          <TagCircle bgcolor="#b45026" circleText="VG" />
        </div>
        <div className="recipe-key-value fs-5" />
        Vegan
      </div>

      <div className="key-wraper d-flex ms-3 justify-content-start align-items-center">
        <div className="ps-2 pe-2">
          <TagCircle bgcolor="#ffb5a3" circleText="V" />
        </div>
        <div className="recipe-key-value fs-5">Vegetarian</div>
      </div>

      <div className="key-wraper d-flex ms-3 justify-content-start align-items-center">
        <div className="ps-2 pe-2">
          <TagCircle bgcolor="#f31a0a" circleText="DF" />
        </div>
        <div className="recipe-key-value fs-5">Dairy-Free</div>
      </div>
      <div className="key-wraper pb-5 d-flex ms-3 justify-content-start align-items-center">
        <div className="ps-2 pe-2">
          <TagCircle bgcolor="black" circleText="NF" />
        </div>
        <div className="recipe-key-value fs-5">Dairy-Free</div>
      </div>
    </div>
  );
}
