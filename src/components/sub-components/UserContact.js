import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import ActivityIndicator from "./ActivityIndicator";
import Alert from "./Alert";
import samsApi from "../apis/sams-api";


const UserContact = () => {
  const [cookies, setCookie] = useCookies('["sams"]');

  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('')
  const [names, setNames] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')




  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log({ email, names, subject, message })

    if (!subject || !message) {
      setAlertType("danger");
      setAlertMessage("please fill subject and message");
      return setAlert(true);
    }

    setIsLoading(true);
    fetch(`${samsApi}/users/message`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, names, subject, message }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status !== 200) {
          setIsLoading(false);
          setAlertType("danger");
          setAlertMessage("something went wrong ... Ops issues");
          setAlert(true);
        } else {
          setIsLoading(false);
          setAlertType("success");
          setAlertMessage("your message sent sucessfully !!!");
          setAlert(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setAlertType("danger");
        setAlertMessage("something went wrong ... Ops issues");
        setAlert(true);
      });
  }


  useEffect(() => {
    setEmail(cookies.user.email)
    setNames(cookies.user.fname + " " + cookies.user.lname)
  })

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
          {isLoading ? (
            <ActivityIndicator />
          ) : alert ? (
            <Alert type={alertType} message={alertMessage} />
          ) : null}
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
                            className="form-control"
                            id="floatingInput"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => {
                              e.preventDefault()
                              setSubject(e.target.value)
                            }}
                          />
                          <label htmlFor="floatingInput">Subject</label>
                        </div>

                        <div className="form-floating mb-3">
                          <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                            style={{ height: 150 }}
                            value={message}
                            onChange={(e) => {
                              e.preventDefault()
                              setMessage(e.target.value)
                            }}
                          ></textarea>
                          <label htmlFor="floatingTextarea">Message</label>
                        </div>
                        <div className="form-floating mb-3">
                          <button type="button" className="btn btn-success btn-lg" onClick={handleSendMessage}>
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
      </main >
    </>
  );
};

export default UserContact;
