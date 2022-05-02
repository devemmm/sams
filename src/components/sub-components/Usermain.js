import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import samsApi from "../apis/sams-api";
import ActivityIndicator from "./ActivityIndicator";
import Alert from "./Alert";

const updateAnswer = (state, action) => {
  return state.answers.map((item) => {
    var temp = Object.assign({}, item);

    if (
      temp.questionId === action.payload.questionId &&
      temp.questionName === action.payload.questionName
    ) {
      temp.answer = action.payload.answer;
    }
    return temp;
  });
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_answer":
      const survey = state.answers.filter(
        (item) =>
          item.questionId === action.payload.questionId &&
          item.questionName === action.payload.questionName
      );

      return {
        ...state,
        answers:
          survey.length > 0
            ? updateAnswer(state, action)
            : [...state.answers, action.payload],
      };

    case "set_servey_info":
      return {
        ...state,
        uid: action.payload.uid,
        surveyId: action.payload.uid,
        surveyName: action.payload.surveyName,
      };

    default:
      return state;
  }
};

const Usermain = () => {
  const [cookies] = useCookies(["sams"]);
  const [survey, setSurvey] = useState({ questions: [] });

  const [state, dispatch] = useReducer(reducer, {
    uid: "62160124869342337a39c55c",
    surveyId: survey._id,
    surveyName: survey.name,
    answers: [],
  });

  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${samsApi}/survey`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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
          setAlertMessage("now you can respond this survey");
          setAlert(true);
          setSurvey(res.data[res.data.length > 0 ? res.data.length - 2 : 0]);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setAlertType("danger");
        setAlertMessage("something went wrong ... Ops issues");
        setAlert(true);
      });
  }, []);

  const handleAnswerOption = (e, question) => {
    e.preventDefault();
    const questionId = question._id;
    const questionName = question.question;
    const answer = e.target.value;

    if (!state.surveyId && !state.surveyName) {
      setAlert(false);
      dispatch({
        type: "set_servey_info",
        payload: {
          uid: cookies.user._id,
          surveyId: survey._id,
          surveyName: survey.name,
        },
      });
    }

    dispatch({
      type: "add_answer",
      payload: { questionId, questionName, answer },
    });
  };

  const handleSubmitSurvey = (e) => {
    e.preventDefault();

    if (state.answers.length === 0 && survey.questions.length !== 0) {
      setIsLoading(false);
      setAlertType("danger");
      setAlertMessage("you must respond min 1 questions");
      setAlert(true);
    }

    setAlert(false);
    setIsLoading(true);
    fetch(`${samsApi}/surveyResponses`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...survey,
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
          setAlertMessage(
            `thank you ${cookies.user.fname} ${cookies.user.lname} for respond this survey`
          );
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
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Survey Form</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="breadcrumb-item active">Forms</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-11">
              <div className="card">
                <div className="card-body">
                  {isLoading ? (
                    <ActivityIndicator />
                  ) : alert ? (
                    <Alert type={alertType} message={alertMessage} />
                  ) : null}
                  <h5 className="card-title">Complete Survey here...</h5>

                  <form onSubmit={handleSubmitSurvey}>
                    {survey.questions.map((question, index) => {
                      return (
                        <div key={index.toString()}>
                          <div className="row mb-3">
                            <label
                              htmlFor="inputEmail3"
                              className="col-sm-1 col-form-label"
                            >
                              {index + 1}.
                            </label>
                            <div className="col-sm-8">
                              <h4>
                                Break the ice and get to know people better by
                                selecting several of these get-to-know-you
                                questions.
                              </h4>
                            </div>
                          </div>

                          <fieldset className="row mb-3">
                            <legend className="col-form-label col-sm-1 pt-0">
                              Answer
                            </legend>

                            <div className="col-sm-10">
                              {question.options.map((option, index2) => {
                                return (
                                  <div key={index2.toString()}>
                                    <div
                                      className="form-check"
                                      name="option"
                                      id="option"
                                      onChange={(e) =>
                                        handleAnswerOption(e, question)
                                      }
                                    >
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck1"
                                        value={option}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="gridCheck1"
                                      >
                                        {option}
                                      </label>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </fieldset>
                        </div>
                      );
                    })}

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
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

export default Usermain;
