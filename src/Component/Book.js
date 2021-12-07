import React from 'react';
import fanFavourite from '../img/fan-favorites-ebook.png';
import socialMediaOne from '../img/social-media-one.jpg';
import socialMediaThree from '../img/social-media-three.jpg';
import socialMediaTwo from '../img/social-media-two.jpg';

export default function Book() {
  return (
    <div className="container">
      <div className="row BooK-wraper">
        <div className="col-12 col-lg-6">
          <div className="row book-wraper-right-bg mt-5 me-1 ms-1">
            <div className="col-12 col-lg-6 text-center pt-3">
              <img src={fanFavourite} className="img-fluid" alt="cookBook" />
            </div>
            <div className="col-12 col-lg-6 pt-3 book-wraper-text">
              <h3 className="text-center">Want More Deliciousness?</h3>
              <h6 className="text-center pt-2">
                Subscribe here and we'll send you an email as new recipes are published
              </h6>
              <p className="text-center pt-2">
                As a thank you, we'd also love to send you our fan favorites ebook!
              </p>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Email Address"
                aria-label=".form-control-lg example"
              />
              <button type="button" className="btn btn-outline-primary w-100 book-button mt-3 mb-4">
                GET MY BOOK
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row mt-5">
            <div className="col-12 col-lg-4 social-media-flower mt-2">
              <div className="d-flex justify-content-start justify-content-lg-center align-items-center">
                <h6 className="pe-2">INSTAGRAM</h6>
                <h2>2.1M</h2>
              </div>
              <div style={{ height: '3px', backgroundColor: '#d56638' }} />
            </div>
            <div className="col-12 col-lg-4 social-media-flower mt-2">
              <div className="d-flex justify-content-start justify-content-lg-center align-items-center">
                <h6 className="pe-2">PINTEREST</h6>
                <h2>358K</h2>
              </div>
              <div style={{ height: '3px', backgroundColor: '#ffded6' }} />
            </div>
            <div className="col-12 col-lg-4 social-media-flower mt-2">
              <div className="d-flex justify-content-start justify-content-lg-center align-items-center">
                <h6 className="pe-2">FACEBOOK</h6>
                <h2>498K</h2>
              </div>
              <div style={{ height: '3px', backgroundColor: '#d56638' }} />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col text-center">
              <img src={socialMediaOne} className="img-fluid" alt="one" />
            </div>
            <div className="col text-center">
              <img src={socialMediaTwo} className="img-fluid" alt="two" />
            </div>
            <div className="col text-center">
              <img src={socialMediaThree} className="img-fluid" alt="three" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
