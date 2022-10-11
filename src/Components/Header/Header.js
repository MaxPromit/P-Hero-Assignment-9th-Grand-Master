import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h3>Quiz Master</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav_link">
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/statistic">Statistic</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/blog">Blog</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <p className="btn btn-outline-success">
                Search
              </p>
            </form>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Header;