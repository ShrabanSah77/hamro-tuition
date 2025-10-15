import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <link className="navbar-brand" href="/">
            Navbar
          </link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <link className="nav-link active" aria-current="page" href="/">
                  Home
                </link>
              </li>
              <li className="nav-item">
                <link className="nav-link" href="/">
                  Features
                </link>
              </li>
              <li className="nav-item">
                <link className="nav-link" href="/">
                  Pricing
                </link>
              </li>
              <li className="nav-item dropdown">
                <link
                  className="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </link>
                <ul className="dropdown-menu">
                  <li>
                    <link className="dropdown-item" href="/">
                      Action
                    </link>
                  </li>
                  <li>
                    <link className="dropdown-item" href="/">
                      Another action
                    </link>
                  </li>
                  <li>
                    <link className="dropdown-item" href="/">
                      Something else here
                    </link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
