import React, { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const reducer = (state, action) => {
  switch (action.type) {
    case "fname":
      return { ...state, fname: action.payload };
    case "lname":
      return { ...state, lname: action.payload };
    case "about":
      return { ...state, about: action.payload };
    case "company":
      return { ...state, company: action.payload };
    case "country":
      return { ...state, country: action.payload };
    case "address":
      return { ...state, address: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    default:
      return state;
  }
};
const Profilebody = () => {
  const [cookies] = useCookies(["sams"]);
  const [user] = useState(cookies.user);

  const [state, dispatch] = useReducer(reducer, {
    fname: user.fname,
    lname: user.lname,
    about:
      "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.",
    company: "Sanitation accessability Monitoring System (SAMS)",
    userType: user.userType,
    country: "RWANDA",
    address: "KG 181 Street, KIGALI, Rwanda",
    phone: user.phone,
    email: user.email,
  });

  const handleChangePassword = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Profile</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="breadcrumb-item">Users</li>
              <li className="breadcrumb-item active">Profile</li>
            </ol>
          </nav>
        </div>

        <section className="section profile">
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img
                    src={cookies.user.avatar}
                    alt="Profile"
                    className="rounded-circle"
                  />
                  <h2>
                    {user.fname} {user.lname}
                  </h2>
                  <h3>Position: {user.userType}</h3>
                  <div className="social-links mt-2">
                    <Link to="#" className="twitter">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to="#" className="facebook">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to="#" className="instagram">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to="#" className="linkedin">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Overview
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                      >
                        Edit Profile
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-settings"
                      >
                        Settings
                      </button>
                    </li>

                    <li className="nav-item">
                      <button
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-change-password"
                      >
                        Change Password
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content pt-2">
                    <div
                      className="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      <h5 className="card-title">About</h5>
                      <p className="small fst-italic">
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </p>

                      <h5 className="card-title">Profile Details</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">
                          Full Name
                        </div>
                        <div className="col-lg-9 col-md-8">
                          {user.fname} {user.lname}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Company</div>
                        <div className="col-lg-9 col-md-8">
                          Sanitation accessability Monitoring System (SAMS)
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Job</div>
                        <div className="col-lg-9 col-md-8">{user.userType}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Country</div>
                        <div className="col-lg-9 col-md-8">RWANDA</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Address</div>
                        <div className="col-lg-9 col-md-8">
                          KG 181 Street, KIGALI, Rwanda
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Phone</div>
                        <div className="col-lg-9 col-md-8">{user.phone}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Email</div>
                        <div className="col-lg-9 col-md-8">{user.email}</div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade profile-edit pt-3"
                      id="profile-edit"
                    >
                      <form>
                        <div className="row mb-3">
                          <label
                            htmlFor="profileImage"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Profile Image
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <img
                              src="assets/img/profile-img.jpg"
                              alt="Profile"
                            />
                            <div className="pt-2">
                              <Link
                                to="#"
                                className="btn btn-primary btn-sm"
                                title="Upload new profile image"
                              >
                                <i className="bi bi-upload"></i>
                              </Link>
                              <Link
                                to="#"
                                className="btn btn-danger btn-sm"
                                title="Remove my profile image"
                              >
                                <i className="bi bi-trash"></i>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="fullName"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Full Name
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="fullName"
                              type="text"
                              className="form-control"
                              id="fullName"
                              defaultValue={state.fname}
                              // value={state.fname}
                              // onChange
                              disabled
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="about"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            About
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <textarea
                              name="about"
                              className="form-control"
                              id="about"
                              // style='height: 100px'
                              style={{ height: 100 }}
                              value={state.about}
                              onChange={(e) => {
                                e.preventDefault();
                                dispatch({
                                  type: "about",
                                  payload: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="company"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Company
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="company"
                              type="text"
                              className="form-control"
                              id="company"
                              defaultValue={state.company}
                              disabled
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="Job"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Job
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="job"
                              type="text"
                              className="form-control"
                              id="Job"
                              defaultValue={state.userType}
                              disabled
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="Country"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Country
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="country"
                              type="text"
                              className="form-control"
                              id="Country"
                              value={state.country}
                              onChange={(e) => {
                                e.preventDefault();
                                dispatch({
                                  type: "country",
                                  payload: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="Address"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Address
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="address"
                              type="text"
                              className="form-control"
                              id="Address"
                              defaultValue={state.address}
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="Phone"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Phone
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="phone"
                              type="text"
                              className="form-control"
                              id="Phone"
                              defaultValue={state.phone}
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="Email"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Email
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="email"
                              type="email"
                              className="form-control"
                              id="Email"
                              defaultValue={state.email}
                              disabled
                            />
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="tab-pane fade pt-3" id="profile-settings">
                      <form>
                        <div className="row mb-3">
                          <label
                            htmlFor="fullName"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Email Notifications
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="changesMade"
                                // checked
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="changesMade"
                              >
                                Changes made to your account
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="newProducts"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="newProducts"
                              >
                                Information on new products and services
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="proOffers"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="proOffers"
                              >
                                Marketing and promo offers
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="securityNotify"
                                defaultChecked
                                disabled
                              />
                              <label
                                className="form-check-label"
                                htmlFor="securityNotify"
                              >
                                Security alerts
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div>

                    <div
                      className="tab-pane fade pt-3"
                      id="profile-change-password"
                    >
                      <form onSubmit={handleChangePassword}>
                        <div className="row mb-3">
                          <label
                            htmlFor="currentPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Current Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="password"
                              type="password"
                              className="form-control"
                              id="currentPassword"
                              required
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="newPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            New Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="newpassword"
                              type="password"
                              className="form-control"
                              id="newPassword"
                              required
                            />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label
                            htmlFor="renewPassword"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Re-enter New Password
                          </label>
                          <div className="col-md-8 col-lg-9">
                            <input
                              name="renewpassword"
                              type="password"
                              className="form-control"
                              id="renewPassword"
                              required
                            />
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Change Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profilebody;
