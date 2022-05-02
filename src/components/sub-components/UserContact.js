import React from "react";
import { Link } from "react-router-dom";

const UserContact = () => {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Contact MOH</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="breadcrumb-item active">Contact</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Contact Minister of Health</h5>

                  <form>
                    <div className="row mb-5">
                      <label className="col-sm-2 col-form-label">
                        I agree that:{" "}
                      </label>
                      <div className="col-sm-10">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          >
                            this message should be contain my profile infomation
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">
                        Please you message of your idea is verry important
                      </label>
                      <div className="col-sm-10">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Subject"
                          />
                          <label htmlFor="floatingInput">Subject</label>
                        </div>

                        <div className="form-floating mb-3">
                          <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                            style={{ height: 150 }}
                          ></textarea>
                          <label htmlFor="floatingTextarea">Comments</label>
                        </div>
                        <div className="form-floating mb-3">
                          <button type="button" class="btn btn-success btn-lg">
                            Send to Minister Of Health
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UserContact;
