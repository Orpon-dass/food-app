import React from 'react';
import aboutRecipe from '../img/about-one.jpg';
import Footer from './Footer';
import Header from './Header';
import Subscription from './Subscription';

export default function About() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-4 mb-4">
          <hr />
          <div className="col-12 col-lg-4">
            <img className="img-fluid p-2 mt-3 " src={aboutRecipe} alt="aboutRecipe" />
          </div>
          <div className="col-12 col-lg-8">
            <div className="about-wraper ps-2 pe-2">
              <h1 className="text-center mt-3 mb-3">Welcome, Everyone!</h1>
              <p className="fs-5">
                Big Bites celebrates simple cooking by sharing recipes that require{' '}
                <strong>ingredients or less, 1 bowl, or 30 minutes or less to prepare.</strong> 10
              </p>
              <h3>All eaters are welcome.</h3>
              <p className="fs-5">
                Whether you’re new to Big Bites or have been around for a while, we’re so glad
                you’re here.
              </p>
            </div>
            <div className="about-wraper-2 ps-2 pe-2">
              <div className="d-flex justify-cotent-center align-items-center">
                <div className="about-line-one" />
                <div className="about-text fs-2 ps-2 pe-2">10 Ingredients or Less</div>
              </div>
              <div className="d-flex justify-cotent-center align-items-center">
                <div className="about-line-two" />
                <div className="about-text fs-2 ps-2 pe-2">1 -Bowl</div>
              </div>
              <div className="d-flex justify-cotent-center align-items-center">
                <div className="about-line-three" />
                <div className="about-text fs-2 ps-2 pe-2">30 Minutes or Less to Prepare</div>
              </div>
              <p className="fs-5 mt-3 mb-4">
                If you don’t have fancy ingredients, expensive equipment, or hours to cook meals
                every night, you’re in the right place. We hope Big Bites is a useful resource for{' '}
                <strong>people who love delicious, simple food.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Subscription />
      <Footer />
    </>
  );
}
