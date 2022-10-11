import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <h3>Quiz Master</h3>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav_link">
              <li class="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/home">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/statistic">Statistic</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/blog">Blog</NavLink>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <p class="btn btn-outline-success">
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