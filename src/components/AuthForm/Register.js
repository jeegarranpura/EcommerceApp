import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import bn from "../../utils/bemnames";

const bem = bn.create("register");
const Register = ({
  handleOnChangeName,
  handleOnChangeMobileno,
  handleOnChangeEmail,
  handleOnChangePassword,
  handleOnChangeCpassword,
  fullName,
  email,
  mobile_no,
  password,
  confirm_password,
  RegisterUserReq,
}) => {

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
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(formVal.password === formVal.confirm_password){
      const data = {
        name : fullName,
        email : email,
        password : password,
        mobile_no : mobile_no
      }
      await RegisterUserReq(formVal)
    }else {
      console.log("password not matched");
    }
    
    
  }
  return (
    <>
      <div className={bem.b("")}>
        <nav className="navbar navbar-expand-lg navbar-light navbar-laravel">
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
        </nav>

        <main className="my-form">
          <div className="cotainer">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">Register</div>
                  <div className="card-body">
                    <form name="my-form" action="#" onSubmit={handleSubmit}  method="get">
                      <div className="form-group row">
                        <label
                          for="full_name"
                          className="col-md-4 col-form-label text-md-right mb-3"
                        >
                          Full Name
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            id="name"
                            className="form-control mb-3"
                            name="name"
                            onChange={inputEvent}
                          />
                        </div>
                      </div>

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
                          for="phone_number"
                          className="col-md-4 col-form-label text-md-right mb-3"
                        >
                          Phone Number
                        </label>
                        <div className="col-md-6">
                          <input
                            type="text"
                            id="phone_number"
                            className="form-control mb-3"
                            name="mobile_no"
                            onChange={inputEvent}
                          />
                        </div>
                      </div>
                      
                      <div className="form-group row">
                        <label
                          for="password"
                          className="col-md-4 col-form-label text-md-right mb-3"
                        >
                          Password
                        </label>
                        <div className="col-md-6">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control mb-3"
                            onChange={inputEvent}
                          />
                        </div>
                      </div>
                      
                      <div className="form-group row">
                        <label
                          for="confirm_password"
                          className="col-md-4 col-form-label text-md-right mb-3"
                        >
                          Confirm Password
                        </label>
                        <div className="col-md-6">
                          <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            className="form-control mb-3"
                            onChange={inputEvent}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-6 offset-md-4">
                        <button type="submit" className="btn btn-primary">
                          Register
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

export default Register;
