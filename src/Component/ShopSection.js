import React from 'react';

export default function ShopSection() {
  return (
    <div className="container">
      <div className="row g-0 mt-3">
        <div className="col shop-bg">
          <div className="shop-wraper h-100 d-flex justify-content-center align-items-center">
            <div
              className="col-10 col-lg-5 rounded shop d-flex flex-column justify-content-center align-items-center "
              style={{ backgroundColor: '#fbf8f3' }}
            >
              <h2 className="text-center mt-3 mb-3">Shop</h2>
              <p className="text-center pt-2 pb-1 ps-3 pe-3">
                Curious what equipment and pantry staples we love? Check out our shop, where we
                share our go-to and recommend appliances, ingredients, tools, and more
              </p>
              <div
                className="mb-4"
                style={{ height: '1px', width: '30%', backgroundColor: 'black' }}
              />
              <div className="show-me-link mb-5">
                <span className="fs-6">SHOP OUR RECOMMENDATIONS</span>
                <i className="bi bi-arrow-right ps-2 fs-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
