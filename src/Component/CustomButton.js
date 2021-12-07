import React from 'react';

export default function CustomButton({ buttonText, buttonclass, typeOfRecipe }) {
  return (
    <button
      type="button"
      onClick={typeOfRecipe}
      className={`btn btn-outline-primary fs-6 w-100 m-3 ${buttonclass} `}
    >
      {buttonText}
    </button>
  );
}
