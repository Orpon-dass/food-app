import React from 'react';
import latestRecipe from '../img/latest.png';

export default function Subscription() {
  return (
    <div className="container-fluid">
      <div className="row subcription-background mb-3">
        <div className="col-12 col-lg-7 suscription d-flex justify-content-center justify-content-lg-end align-items-center">
          <p className="pe-2 pt-3">GET THE</p>
          <img src={latestRecipe} className="d-none d-lg-block img-fluid" alt="latestRecipe" />
          <p className="d-block d-lg-none pt-3">LATEST RECIPE</p>
          <p className="ps-2 pt-3">RIGHT IN YOUR INBOX :</p>
        </div>
        <div className="col-12 col-lg-5 suscription d-flex justify-content-center justify-content-lg-start align-items-center">
          <div className="w-50 pb-3 pt-lg-3">
            <form action="">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="email address"
                aria-label=".form-control-lg example"
              />
            </form>
          </div>
          <a href="signup" className="sub-sign ps-3 pb-3 pt-lg-3">
            SIGN UP
            <i className="bi bi-arrow-right-circle ps-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
