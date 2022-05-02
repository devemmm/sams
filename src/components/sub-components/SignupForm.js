import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import samsApi from "../apis/sams-api";
import ActivityIndicator from "./ActivityIndicator";
import Alert from "./Alert";

const reducer = (state, action) => {
  switch (action.type) {
    case "fname":
      return { ...state, fname: action.payload };

    case "lname":
      return { ...state, lname: action.payload };

    case "email":
      return { ...state, email: action.payload };

    case "phone":
      return { ...state, phone: action.payload };

    case "dob":
      return { ...state, dob: action.payload };

    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const SignupForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
  });

  const [password2, setPassword2] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (state.password !== password2) {
      setIsLoading(false);
      setShowAlert(true);
      setAlertType("danger");
      setAlertMessage("password does not much");

      return;
    }

    setIsLoading(true);
    fetch(`${samsApi}/users/signup`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...state,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status !== 200) {
          setIsLoading(false);
          setShowAlert(true);
          setAlertType("danger");
          setAlertMessage(res.message);
        } else {
          setIsLoading(false);
          setShowAlert(true);
          setAlertType("success");
          setAlertMessage(res.message);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setShowAlert(true);
        setAlertType("danger");
        setAlertMessage(error.message);
      });
  };

  return (
    <>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              {showAlert ? (
                <Alert type={alertType} message={alertMessage} />
              ) : null}
              <div className="card mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-center py-4">
                    <Link
                      to="/"
                      className="logo-high d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/moh.png" alt="" />
                    </Link>
                  </div>

                  <form
                    className="row g-3 needs-validation"
                    noValidate
                    onSubmit={handleSignup}
                  >
                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="yourName"
                        placeholder="Your First name"
                        required
                        value={state.fname}
                        onChange={(e) => {
                          e.preventDefault();
                          dispatch({ type: "fname", payload: e.target.value });
                        }}
                      />
                      <div className="invalid-feedback">
                        Please, enter your first name!
                      </div>
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="yourName"
                        placeholder="Your Last name"
                        required
                        value={state.lname}
                        onChange={(e) => {
                          e.preventDefault();
                          dispatch({ type: "lname", payload: e.target.value });
                        }}
                      />
                      <div className="invalid-feedback">
                        Please, enter your last name!
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
                        value={state.email}
                        onChange={(e) => {
                          e.preventDefault();
                          dispatch({ type: "email", payload: e.target.value });
                        }}
                      />
                      <div className="invalid-feedback">
                        Please enter a valid Email adddress!
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="input-group has-validation">
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Phone Number"
                          required
                          value={state.phone}
                          onChange={(e) => {
                            e.preventDefault();
                            dispatch({
                              type: "phone",
                              payload: e.target.value,
                            });
                          }}
                        />
                        <div className="invalid-feedback">
                          Please enter phone number.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="input-group has-validation">
                        <input
                          type="date"
                          name="dob"
                          className="form-control"
                          placeholder="Date-of-Birth"
                          required
                          value={state.dob}
                          onChange={(e) => {
                            e.preventDefault();
                            dispatch({
                              type: "dob",
                              payload: e.target.value,
                            });
                          }}
                        />
                        <div className="invalid-feedback">
                          Please enter Date of Birth.
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
                        value={state.password}
                        onChange={(e) => {
                          e.preventDefault();
                          dispatch({
                            type: "password",
                            payload: e.target.value,
                          });
                        }}
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
                        value={password2}
                        onChange={(e) => {
                          e.preventDefault();
                          setPassword2(e.target.value);
                        }}
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
                        <label
                          className="form-check-label"
                          htmlFor="acceptTerms"
                        >
                          I agree and accept the{" "}
                          <Link to="#">terms and conditions</Link>
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>

                    {isLoading ? <ActivityIndicator /> : null}

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
