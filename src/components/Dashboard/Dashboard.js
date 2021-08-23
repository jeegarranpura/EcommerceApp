import PropTypes from "prop-types";
import React, { useEffect } from "react";
import bn from "../../utils/bemnames";

const bem = bn.create("dashboard");
const Dashboard = (props) => {
  const { allUserData,
    userDetails } = props;

  return (
    <>
      <div className={bem.b("")}>
        <h1> Dashboard </h1>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
            Home
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                
                </li>
              </ul>
              <ul className="navbar-nav d-flex">
                <li className="nav-item">
                  <a className="nav-link active" href="/login">
                  </a>
                </li>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </ul>
            </div>
          </div>
        </nav> */}
        <div className="row">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {allUserData.map((element) => (
                <tr>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.mobile_no}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
