import React, { useState, useReducer } from "react";
import _ from "lodash";
import constants from "../../libs/constants";
import samsApi from "../apis/sams-api";
import ActivityIndicator from "./ActivityIndicator";
import Alert from "./Alert";

const { ERROR } = constants;

const reducer = (state, action) => {
  let questions;

  switch (action.type) {
    case "add_question_field":
      return {
        ...state,
        questions: [...state.questions, { question: "", options: [""] }],
      };

    case "add_answer_field":
      state.questions[action.payload].options.push("");

      return { ...state };

    case "remove_quetion_field":
      return { ...state, questions: _.dropRight(state.questions) };

    case "remove_answer_field":
      const inital = state;
      const initalquetion = inital.questions[action.payload];
      const lastFieldAfterDrop = _.dropRight(initalquetion.options);
      let pp = inital;

      pp.questions[action.payload].options = lastFieldAfterDrop;
      return { ...state };

    case "add_question_text":
      questions = state.questions;
      questions[action.payload.index].question = action.payload.value;

      return { ...state, questions };

    case "add_answer_text":
      state.questions[action.payload.index].options[
        action.payload.answerIndex
      ] = action.payload.value;

      return { ...state };

    case "add_survey_name":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const AdminForm = () => {
  const [survey, dispatch] = useReducer(reducer, {
    name: "",
    questions: [{ question: "", options: [""] }],
  });

  const defaultError = { ERROR: "", MSG: "" };

  const [alert, setAlert] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("ewhfr ejk");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(defaultError);

  const AddRemove = ({ type, index, answerIndex }) => {
    return (
      <>
        <div
          style={{
            width: 150,
            marginLeft: 15,
          }}
        >
          <button
            type="button"
            className="btn btn-success"
            style={{ marginRight: 10 }}
            onClick={(e) => {
              e.preventDefault();
              handleAddQuetionAnswer(type, index);
            }}
          >
            <i className="ri-add-fill"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              handleRemoveQuestionAnswer({
                type,
                index,
                answerIndex,
              });
            }}
          >
            <i className="ri-spam-3-line"></i>
          </button>
        </div>
      </>
    );
  };

  const handleAddQuetionAnswer = (type, index) => {
    switch (type) {
      case "question":
        if (_.isEmpty(survey.questions[index].question)) {
          return setError(ERROR.QUESTION);
        }

        return dispatch({ type: "add_question_field" });

      case "answer":
        if (
          _.isEmpty(
            survey.questions[index].options[
              survey.questions[index].options.length - 1
            ]
          )
        ) {
          return setError(ERROR.ANSWER);
        }
        return dispatch({ type: "add_answer_field", payload: index });

      default:
        return;
    }
  };

  const handleRemoveQuestionAnswer = ({ type, index }) => {
    switch (type) {
      case "question":
        return dispatch({ type: "remove_quetion_field", payload: index });
      case "answer":
        return dispatch({
          type: "remove_answer_field",
          payload: index,
        });
      default:
        return;
    }
  };

  const handleChangeSurveyName = (e) => {
    e.preventDefault();

    error.ERROR === ERROR.SURVEY_NAME.ERROR
      ? setError(defaultError)
      : setError(error);

    dispatch({ type: "add_survey_name", payload: e.target.value });
  };

  const handleOnChangeQuestionText = (e, index) => {
    e.preventDefault();

    error.ERROR === ERROR.QUESTION.ERROR
      ? setError(defaultError)
      : setError(error);

    dispatch({
      type: "add_question_text",
      payload: { value: e.target.value, index },
    });
  };

  const handleOnChangeAnswerText = (e, index, answerIndex) => {
    e.preventDefault();

    setError(defaultError);
    dispatch({
      type: "add_answer_text",
      payload: { value: e.target.value, index, answerIndex },
    });
  };

  const refleshPage = (e) => {
    e.preventDefault();
    return window.location.reload(false);
  };

  const handleOnSubmitSurvey = (e) => {
    e.preventDefault();

    if (_.isEmpty(survey.name)) {
      return setError(ERROR.SURVEY_NAME);
    }

    survey.questions.forEach(({ question }) => {
      return _.isEmpty(question)
        ? setError({
            ...ERROR.QUESTION,
            MSG: "Qestion should not be null",
          })
        : setError(defaultError);
    });

    if (_.isEmpty(error.ERROR) && _.isEmpty(error.MSG)) {
      setIsLoading(true);
      fetch(`${samsApi}/survey`, {
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
            // setShowAlert(true);
            setAlertType("danger");
            setAlertMessage(res.message);
          } else {
            setIsLoading(false);
            setAlertMessage("survey form created successfull");
            setAlertType("success");
            setAlert(true);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          // setShowAlert(true);
          setAlertType("danger");
          setAlertMessage(error.message);
        });
    }
    return;
  };

  return (
    <>
      <section className="section">
        <div className="row">
          <div className="col-lg-6" style={{ marginLeft: 400, marginTop: 100 }}>
            <div className="card">
              <div className="card-body">
                {isLoading ? (
                  <ActivityIndicator />
                ) : alert ? (
                  <Alert type={alertType} message={alertMessage} />
                ) : null}

                <h5 className="card-title">Set new survey form here.</h5>

                {error.MSG ? (
                  <h5
                    style={{
                      textAlign: "center",
                      color: "red",
                      backgroundColor: "pink",
                      alignSelf: "center",
                      borderRadius: 5,
                    }}
                  >
                    {error.MSG}
                  </h5>
                ) : null}

                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="inputNanme4" className="form-label">
                      Survey Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputNanme4"
                      onChange={(e) => handleChangeSurveyName(e)}
                    />
                  </div>

                  {survey.questions.map((itemq, index1) => {
                    return (
                      <div key={index1.toString()}>
                        <div>
                          <div className="col-12">
                            <label htmlFor="inputNanme4" className="form-label">
                              Question
                            </label>
                            <div className="d-flex flex-row">
                              <input
                                type="text"
                                className="form-control"
                                id="inputNanme4"
                                // value={item.question}
                                onChange={(e) => {
                                  e.preventDefault();
                                  handleOnChangeQuestionText(e, index1);
                                }}
                              />
                              {index1 === survey.questions.length - 1 ? (
                                <AddRemove type="question" index={index1} />
                              ) : null}
                            </div>
                          </div>

                          {itemq.options.map((item, index2) => {
                            return (
                              <div key={index2.toString()}>
                                <div
                                  className="col-10"
                                  style={{ marginLeft: 100 }}
                                >
                                  <label
                                    htmlFor="inputNanme4"
                                    className="form-label"
                                  >
                                    Answer
                                  </label>
                                  <div className="d-flex flex-row">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="inputNanme4"
                                      //   value={item}
                                      style={{ width: "100%" }}
                                      onChange={(e) => {
                                        e.preventDefault();
                                        handleOnChangeAnswerText(
                                          e,
                                          index1,
                                          index2
                                        );
                                      }}
                                    />

                                    {index2 ===
                                    survey.questions[index1].options.length -
                                      1 ? (
                                      <AddRemove
                                        type="answer"
                                        index={index1}
                                        answerIndex={index2}
                                      />
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={(e) => {
                        handleOnSubmitSurvey(e);
                      }}
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="btn btn-secondary"
                      onClick={(e) => refleshPage(e)}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminForm;
