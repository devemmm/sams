import React, { useState } from "react";
import { Link } from "react-router-dom";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Link
                    to="/"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">SAMS</span>
                  </Link>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                    </div>

                    <form className="row g-3 needs-validation" novalidate>
                      <div className="col-12">
                        {/* <label for="yourUsername" className="form-label">
                          Username
                        </label> */}
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            <i class="bi bi-envelope"></i>
                          </span>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            onChange={(e) => {
                              e.preventDefault();

                              setEmail(e.target.value);
                            }}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your username.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="input-group has-validation">
                          {/* <label for="yourPassword" className="form-label">
                              Password
                            </label> */}
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            <i class="bi bi-key"></i>
                          </span>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            onChange={(e) => {
                              e.preventDefault();
                              setPassword(e.target.value);
                            }}
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          />
                          <label className="form-check-label" for="rememberMe">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Login
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Don't have account?{" "}
                          <Link to="/signup">Create an account</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SigninForm;
