import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import UserMesages from "../UserMesages";
import SingleQuetionAnalitics from "./SingleQuetionAnalitics";
import samsApi from "../apis/sams-api";
import ActivityIndicator from "./ActivityIndicator";
import Alert from "./Alert";

const Main = () => {
  const [cookies, setCookie] = useCookies('["sams"]');
  const [surveys, setSurveys] = useState([]);
  const [showDeleteModel, setShowDeleteModel] = useState(true);
  const [surveyStatistics, setSurveyStatistics] = useState([]);
  const [surveyId, setSurveyId] = useState("621601d3869342337a39c560");

  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setSurveys(cookies.surveys);

    getSurveyStatistics(signal, surveyId);

    return () => {
      controller.abort();
    };
  }, []);

  const getSurveyStatistics = (signal, surveyId) => {
    fetch(`${samsApi}/surveyresponses/statistics/${surveyId}`, {
      method: "get",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status !== 200) {
        } else {
          setCookie("surveyStatistics", JSON.stringify(res.data), {
            path: "/",
          });

          setSurveyStatistics(res.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleDeleteSurvey = (e) => {
    e.preventDefault();
    setShowDeleteModel(false);
  };


  const handleGenerateReport =  ()=>{
    setIsLoading(true);
    fetch(`${samsApi}/surveyResponses/report`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        generateReport: true,
        email: cookies.user.email
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setIsLoading(false)
        if (res.status !== 200) {
          setAlert(true)
          setAlertType("danger");
          setAlertMessage("Something went wrog Ops issues");
        } else {
          setAlert(true);
          setAlertType("success");
          setAlertMessage(res.data.info);
        }
      })
      .catch((error) => {
        console.log(error.message)
        setIsLoading(false)
        setAlert(true)
          setAlertType("danger");
          setAlertMessage("Something went wrog Ops issues");
      });    

  }

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboards</h1>

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
                            onChange={(e) => {
                              e.preventDefault();

                              const controller = new AbortController();
                              const signal = controller.signal;
                              setSurveyId(e.target.value);

                              getSurveyStatistics(signal, surveyId);
                            }}
                          >
                            {surveys.map((item) => {
                              return (
                                <option key={item._id} value={item._id}>
                                  {item.name}
                                </option>
                              );
                            })}
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
                            {surveys.map((item, index) => (
                              <option key={item._id} value={item._id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn btn-danger btn-lg col-sm-12"
                        data-bs-toggle="modal"
                        data-bs-target="#verticalycentered"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  {showDeleteModel ? (
                    <div>
                      <div className="card">
                        <div>
                          <div
                            className="modal fade"
                            id="verticalycentered"
                            tabIndex="-1"
                          >
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">
                                    Vertically Centered
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  This changes should affect some data in
                                  database please. Are you sure you want to
                                  delete this survey permanently in Sanitation
                                  Accessability Monitoring System ?
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                    onClick={(e) => handleDeleteSurvey(e)}
                                  >
                                    Yes Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
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
                      
                      <button
                      type="button"
                      className="btn btn-primary d-flex"
                      style={{width: '100%', textAlign: 'center'}}
                      onClick = {handleGenerateReport}
                      >Gen Survey Reports</button>
                    
                    </div>
                  </div>
                </div>


                {
                  isLoading ? <ActivityIndicator  /> : alert ?  <Alert type={alertType} message={alertMessage} />: null
                }

                
                
                <div className="col-12">
                  <div className="card">
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

                    {surveyStatistics.map((question, index) => {
                      return (
                        <div key={index.toString()}>
                          <SingleQuetionAnalitics data={question} />
                        </div>
                      );
                    })}
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
