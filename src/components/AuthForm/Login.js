import PropTypes from "prop-types";
import { history } from "../../utils/navigation-utils";
import React, { useEffect, useState } from "react";
import bn from "../../utils/bemnames";

const bem = bn.create("login");
const Login = ({ LoginReq, props }) => {
  const [formVal, setFormVal] = useState({
    name: "",
    password: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setFormVal((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await LoginReq(formVal);
  };
  return (
    <>
      <div className={bem.b("")}>
        {/* <nav className="navbar navbar-expand-lg navbar-light navbar-laravel">
          <div className="container">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        <main className="my-form">
          <div className="cotainer">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">Login</div>
                  <div className="card-body">
                    <form
                      name="my-form"
                      action=""
                      method="get"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group row">
                        <label
                          for="email_address"
                          className="col-md-4 col-form-label text-md-right mb-3"
                        >
                          E-Mail Address
                        </label>
                        <div className="col-md-6">
                          <input
                            type="email"
                            id="email"
                            className="form-control mb-3"
                            name="email"
                            onChange={inputEvent}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label
                          for="full_name"
                          className="col-md-4 col-form-label text-md-right mb-3"
                        >
                          Password
                        </label>
                        <div className="col-md-6">
                          <input
                            type="password"
                            id="password"
                            className="form-control mb-3"
                            name="password"
                            onChange={inputEvent}
                          />
                        </div>
                      </div>
                      <div className="row mb-3 mt-2">
                        <div className="col-md-4" />
                        <label className="col-md-6">
                          Create Account! <a href="/register">Click here</a>
                        </label>
                      </div>
                      <div className="col-md-6 offset-md-4">
                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
