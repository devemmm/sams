import React, { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ActivityIndicator from "./ActivityIndicator";
import Alert from "./Alert";
import samsApi from "../apis/sams-api";

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };

    default:
      return state;
  }
};

const SigninForm = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["sams"]);
  const [state, dispatch] = useReducer(reducer, { email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();
  const handleSignin = (e) => {
    e.preventDefault();

    setIsLoading(true);
    fetch(`${samsApi}/users/signin`, {
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
          const { user } = res.data;

          if (cookies.user) {
            removeCookie("user", { path: "/" });
          }
          setCookie("user", JSON.stringify(user), { path: "/" });
          navigate("/home", { replace: true });
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
      <div className="container">
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
                        {/* <span className="d-none d-lg-block">SAMS</span> */}
                      </Link>
                    </div>

                    <form
                      className="row g-3 needs-validation"
                      noValidate
                      onSubmit={handleSignin}
                    >
                      <div className="col-12">
                        {/* <label for="yourUsername" className="form-label">
                          Username
                        </label> */}
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            <i className="bi bi-envelope"></i>
                          </span>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            value={state.email}
                            onChange={(e) => {
                              e.preventDefault();
                              dispatch({
                                type: "email",
                                payload: e.target.value,
                              });
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
                            <i className="bi bi-key"></i>
                          </span>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            value={state.password}
                            onChange={(e) => {
                              e.preventDefault();
                              dispatch({
                                type: "password",
                                payload: e.target.value,
                              });
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
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>

                        {isLoading ? (
                          <div style={{ marginTop: 20 }}>
                            <ActivityIndicator />
                          </div>
                        ) : null}
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
