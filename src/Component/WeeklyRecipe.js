import React from 'react';

export default function WeeklyRecipe() {
  return (
    <div className="container">
      <div className="row mt-5 g-0 shadow">
        <div className="col-12 col-lg-6">
          <div
            className="d-flex pt-4 pb-4 flex-column justify-content-center align-items-center h-100"
            style={{ backgroundColor: '#fbf8f3' }}
          >
            <p className="text-center week-pick fs-1 font-monospace pt-4">Pick of the Week</p>
            <h3 className="text-center week-Cinnamon">Easy Cinnamon Baked Apples</h3>
            <div className="week-para text-center fs-6 p-4">
              Easy Cinnamon Baked Apples requiring simple ingredients and 1 bowl, plus naturally
              sweetened! The perfect grain- and gluten-free plant-based dessert for the holidays and
              beyond!
            </div>
            <button
              type="button"
              className="btn btn-outline-primary button-week-custom fs-3 mt-2 mb-4"
            >
              VIEW RECIPE
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="text-center weekly-recipe-image" />
        </div>
      </div>
    </div>
  );
}
