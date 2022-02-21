import React, { useReducer, useState } from "react";
import ActivityIndicator from "./ActivityIndicator";
import Alert from "./Alert";

const reducer = (state, action) => {
  switch (action.type) {
    case "names":
      return { ...state, names: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "subject":
      return { ...state, subject: action.payload };
    case "message":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, {
    names: "",
    email: "",
    subject: "",
    message: "",
  });

  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3001/users/message", {
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
  };

  return (
    <>
      <div id="main1" className="main">
        <section className="section contact">
          {isLoading ? (
            <ActivityIndicator />
          ) : alert ? (
            <Alert type={alertType} message={alertMessage} />
          ) : null}
          <div className="row gy-4">
            <div className="col-xl-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>
                      KG 181 ST (Street),
                      <br />
                      Kigali Gasabo
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>
                      +250 788 596 281
                      <br />
                      +250 783 230 814
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      info@sams.com
                      <br />
                      primaryemmy@gmail.com
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday
                      <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="card p-4">
                <form className="php-email-form" onSubmit={handleSubmitForm}>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="names"
                        className="form-control"
                        placeholder="Your Name"
                        required
                        value={state.names}
                        onChange={(e) => {
                          e.preventDefault();
                          dispatch({ type: "names", payload: e.target.value });
                        }}
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={state.email}
                        onChange={(e) => {
                          e.preventDefault();
                          dispatch({ type: "email", payload: e.target.value });
                        }}
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                        value={state.subject}
                        onChange={(e) => {
                          e.preventDefault();
                          dispatch({
                            type: "subject",
                            payload: e.target.value,
                          });
                        }}
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                        value={state.message}
                        onChange={(e) => {
                          e.preventDefault();
                          dispatch({
                            type: "message",
                            payload: e.target.value,
                          });
                        }}
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
