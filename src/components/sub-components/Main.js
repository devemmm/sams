import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import UserMesages from "../UserMesages";
import BarchartAnalysis from "./BarchartAnalysis";

const Main = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["sams"]);

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Select <span>| Survey</span>
                      </h5>

                      <div className="row mb-3">
                        <div className="col-sm-12">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue={"1"}>----</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn btn-success btn-lg col-sm-12"
                      >
                        Show
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Delete <span>| Survey</span>
                      </h5>

                      <div className="row mb-3">
                        <div className="col-sm-12">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option defaultValue={"1"}>------</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn btn-danger btn-lg col-sm-12"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="filter">
                      <Link className="icon" to="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="#">
                            Today
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Month
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Year
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Customers <span>| This Year</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                          <h6>1244</h6>
                          <span className="text-danger small pt-1 fw-bold">
                            12%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            decrease
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card">
                    <div className="filter">
                      <Link className="icon" to="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="#">
                            Today
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Month
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Year
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Reports <span>/Today</span>
                      </h5>

                      <div id="reportsChart"></div>
                    </div>
                  </div>
                </div>

                <div className="col-10">
                  <div className="card recent-sales">
                    <div className="filter">
                      <Link className="icon" to="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="#">
                            Today
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Month
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Year
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* start of dii */}
                    <div className="d-flex flex-row">
                      <div
                        style={{
                          borderBottom: "grey",
                          borderWidth: 1,
                        }}
                      >
                        <BarchartAnalysis />
                      </div>
                      <div
                        style={{
                          width: 350,
                          height: 300,
                        }}
                      >
                        <h5
                          style={{
                            textTransform: "capitalize",
                            marginTop: 20,
                            marginBottom: 20,
                          }}
                        >
                          ese mufite uwbwishingizi mukwvuza ?
                        </h5>

                        <div>
                          <div
                            className="d-flex flex-row"
                            style={{
                              marginBottom: 10,
                            }}
                          >
                            <div
                              style={{
                                height: 20,
                                width: 20,
                                backgroundColor: "red",
                                marginRight: 10,
                              }}
                            ></div>
                            <div>
                              <h6>Yeg</h6>
                            </div>
                          </div>

                          <div className="d-flex flex-row">
                            <div
                              style={{
                                height: 20,
                                width: 20,
                                backgroundColor: "red",
                                marginRight: 10,
                              }}
                            ></div>
                            <div>
                              <h6>Yeg</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end of dii */}

                    {/* start of dii */}
                    <div className="d-flex flex-row">
                      <div
                        style={{
                          borderBottom: "grey",
                          borderWidth: 1,
                        }}
                      >
                        <BarchartAnalysis />
                      </div>
                      <div
                        style={{
                          width: 350,
                          height: 300,
                        }}
                      >
                        <h5
                          style={{
                            textTransform: "capitalize",
                            marginTop: 20,
                            marginBottom: 20,
                          }}
                        >
                          ese mufite uwbwishingizi mukwvuza ?
                        </h5>

                        <div>
                          <div
                            className="d-flex flex-row"
                            style={{
                              marginBottom: 10,
                            }}
                          >
                            <div
                              style={{
                                height: 20,
                                width: 20,
                                backgroundColor: "red",
                                marginRight: 10,
                              }}
                            ></div>
                            <div>
                              <h6>Yeg</h6>
                            </div>
                          </div>

                          <div className="d-flex flex-row">
                            <div
                              style={{
                                height: 20,
                                width: 20,
                                backgroundColor: "red",
                                marginRight: 10,
                              }}
                            ></div>
                            <div>
                              <h6>Yeg</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end of dii */}
                  </div>
                </div>

                <div className="col-12">
                  <div className="card top-selling">
                    <div className="filter">
                      <Link className="icon" to="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="#">
                            Today
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Month
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Year
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="card-body pb-0">
                      <h5 className="card-title">
                        Top Selling <span>| Today</span>
                      </h5>

                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <Link to="#">
                                <img src="assets/img/product-1.jpg" alt="" />
                              </Link>
                            </th>
                            <td>
                              <Link to="#" className="text-primary fw-bold">
                                Ut inventore ipsa voluptas nulla
                              </Link>
                            </td>
                            <td>$64</td>
                            <td className="fw-bold">124</td>
                            <td>$5,828</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <Link to="#">
                                <img src="assets/img/product-2.jpg" alt="" />
                              </Link>
                            </th>
                            <td>
                              <Link to="#" className="text-primary fw-bold">
                                Exercitationem similique doloremque
                              </Link>
                            </td>
                            <td>$46</td>
                            <td className="fw-bold">98</td>
                            <td>$4,508</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <Link to="#">
                                <img src="assets/img/product-3.jpg" alt="" />
                              </Link>
                            </th>
                            <td>
                              <Link to="#" className="text-primary fw-bold">
                                Doloribus nisi exercitationem
                              </Link>
                            </td>
                            <td>$59</td>
                            <td className="fw-bold">74</td>
                            <td>$4,366</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <Link to="#">
                                <img src="assets/img/product-4.jpg" alt="" />
                              </Link>
                            </th>
                            <td>
                              <Link to="#" className="text-primary fw-bold">
                                Officiis quaerat sint rerum error
                              </Link>
                            </td>
                            <td>$32</td>
                            <td className="fw-bold">63</td>
                            <td>$2,016</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <Link to="#">
                                <img src="assets/img/product-5.jpg" alt="" />
                              </Link>
                            </th>
                            <td>
                              <Link to="#" className="text-primary fw-bold">
                                Sit unde debitis delectus repellendus
                              </Link>
                            </td>
                            <td>$79</td>
                            <td className="fw-bold">41</td>
                            <td>$3,239</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="filter">
                  <Link className="icon" to="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="#">
                        Today
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        This Month
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        This Year
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title">
                    Recent Activity <span>| Today</span>
                  </h5>

                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                      <div className="activity-content">
                        Quia quae rerum{" "}
                        <Link to="#" className="fw-bold text-dark">
                          explicabo officiis
                        </Link>{" "}
                        beatae
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                      <div className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                      <div className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">1 day</div>
                      <i className="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                      <div className="activity-content">
                        Tempore autem saepe{" "}
                        <Link to="#" className="fw-bold text-dark">
                          occaecati voluptatem
                        </Link>{" "}
                        tempore
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 days</div>
                      <i className="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                      <div className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">4 weeks</div>
                      <i className="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                      <div className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit
                        quas
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="filter">
                  <Link className="icon" to="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="#">
                        Today
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        This Month
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        This Year
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="card-body pb-0">
                  <h5 className="card-title">
                    Budget Report <span>| This Month</span>
                  </h5>
                </div>
              </div>

              <div className="card">
                <div className="filter">
                  <Link className="icon" to="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="#">
                        Today
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        This Month
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        This Year
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="card-body pb-0">
                  <h5 className="card-title">
                    Website Traffic <span>| Today</span>
                  </h5>
                </div>
              </div>

              <div className="card">
                <div className="filter">
                  <Link className="icon" to="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots"></i>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="#">
                        Today
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        This Month
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        This Year
                      </Link>
                    </li>
                  </ul>
                </div>

                <UserMesages />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
