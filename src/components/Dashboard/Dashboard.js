import PropTypes from "prop-types";
import React, { useEffect } from "react";
import bn from "../../utils/bemnames";

const bem = bn.create("dashboard");
const Dashboard = () => {
  return (
    <>
      <div className={bem.b("")}>
        <h1> Dashboard </h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav d-flex">
                <li className="nav-item">
                  <a className="nav-link active" href="/login">
                    Login
                  </a>
                </li>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row">
          <form className="form-group " action="" method="POST">
            <div className="form-control">
              <label>Name: </label>
              <input type="text" />
            </div>
            <div className="form-control">
              <label>Name: </label>
              <input type="text" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
