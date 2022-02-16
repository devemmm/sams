import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <Link to="/" className="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt="" />
                  <span className="d-none d-lg-block">SAMS</span>
                </Link>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Create an Account
                    </h5>
                  </div>

                  <form className="row g-3 needs-validation" novalidate>
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="yourName"
                        placeholder="Your Name"
                        required
                      />
                      <div className="invalid-feedback">
                        Please, enter your name!
                      </div>
                    </div>

                    <div className="col-12">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="yourEmail"
                        placeholder="Your Email"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a valid Email adddress!
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="input-group has-validation">
                        <input
                          type="number"
                          name="username"
                          className="form-control"
                          placeholder="Phone Number"
                          required
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="yourPassword"
                        placeholder="Password"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your password!
                      </div>
                    </div>

                    <div className="col-12">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="yourPassword"
                        placeholder="Confirm-Password"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your password!
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="terms"
                          type="checkbox"
                          value=""
                          id="acceptTerms"
                          required
                        />
                        <label className="form-check-label" for="acceptTerms">
                          I agree and accept the{" "}
                          <Link to="#">terms and conditions</Link>
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">
                        Create Account
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Already have an account?{" "}
                        <Link to="/signin">Log in</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupForm;
