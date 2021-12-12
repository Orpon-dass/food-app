import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logoMobile from '../img/Big-Bites.png';
import logo from '../img/logo.png';

export default function Header() {
  const [menuButton, setMenuButton] = useState(true);
  const mobileMenuButton = () => {
    setMenuButton(!menuButton);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-5 d-flex justify-content-between">
            <Link to="/">
              <img className="img-fluid logo d-none d-lg-block" src={logo} alt="logo" />
            </Link>
            <Link to="/">
              <img
                className="img-fluid logo-mobile d-block d-lg-none p-3"
                src={logoMobile}
                alt="logo"
              />
            </Link>
            <div className="d-flex d-block d-lg-none">
              <div className="pt-3 pb-3 pe-1">
                <i className="bi bi-search menu-button pt-3 pe-1 pb-3" />
              </div>
              {menuButton && (
                <a
                  className="d-block p-3 d-lg-none"
                  href="/"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBackdrop"
                  aria-controls="offcanvasWithBackdrop"
                  onClick={mobileMenuButton}
                >
                  <i className="bi bi-list menu-button" />
                </a>
              )}
            </div>
          </div>
          <div className="col-7 header-right-part d-none d-lg-block">
            <div className="row">
              <div className="col-6">
                <div className="d-flex justify-content-end social-icon">
                  <i className="bi bi-facebook ps-3 pt-3" />
                  <i className="bi bi-instagram ps-3 pt-3" />
                  <i className="bi bi-youtube ps-3 pt-3" />
                  <i className="bi bi-twitter ps-3 pt-3" />
                  <i className="bi bi-pinterest ps-3 pt-3" />
                  <i className="bi bi-linkedin ps-3 pt-3 pe-3" />
                </div>
              </div>
              <div className="col-6">
                <div className="search-bar pt-3 pe-3">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recipe name"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      <i className="bi bi-search" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around nav-items pt-2 pb-3">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div>Home</div>
              </Link>
              <HashLink to="#exrecipe" smooth style={{ textDecoration: 'none' }}>
                <div>Browse Recipe</div>
              </HashLink>
              <Link to="/cookbook" style={{ textDecoration: 'none' }}>
                <div>Cook Book</div>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <div>About</div>
              </Link>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
            data-bs-scroll="true"
            aria-labelledby="offcanvasWithBackdropLabel"
          >
            <div className="offcanvas-header">
              <div className="offcanvas-title" id="offcanvasWithBackdropLabel">
                <img
                  className="img-fluid logo-mobile d-block d-lg-none"
                  src={logoMobile}
                  alt="logo"
                />
              </div>
              <button
                type="button"
                className="btn-close text-reset pe-3"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={mobileMenuButton}
              />
            </div>
            <div className="offcanvas-body position-relative">
              <div className="nav-items position-absolute">
                <Link to="/" style={{ textDecoration: 'none' }} onClick={mobileMenuButton}>
                  <div>Home</div>
                </Link>
                <Link
                  to="/browserecipe"
                  style={{ textDecoration: 'none' }}
                  onClick={mobileMenuButton}
                >
                  <div>Browse Recipe</div>
                </Link>
                <Link to="/cookbook" style={{ textDecoration: 'none' }} onClick={mobileMenuButton}>
                  <div>Cook Book</div>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }} onClick={mobileMenuButton}>
                  <div>About</div>
                </Link>
              </div>
              <div
                className="position-absolute bottom-0 start-50 translate-middle-x pb-4"
                style={{ width: '100%' }}
              >
                <div className="d-flex justify-content-around social-icon">
                  <i className="bi bi-facebook" />
                  <i className="bi bi-instagram" />
                  <i className="bi bi-youtube" />
                  <i className="bi bi-twitter" />
                  <i className="bi bi-pinterest" />
                  <i className="bi bi-linkedin pe-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
