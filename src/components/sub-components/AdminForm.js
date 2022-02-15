import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  let questions;
  switch (action.type) {
    case "add_question_field":
      questions = state.questions;
      questions.push({ question: "", answer: [""] });
      return { ...state, questions };

    case "add_answer_field":
      questions = state.questions;
      questions[action.payload].answer.push("");
      return { ...state };

    case "remove_quetion":
      questions = state.questions.filter(
        (item, index) => index !== action.payload
      );

      return { ...state, questions };

    case "remove_answer_field":
      //   questions = state.questions;
      //   questions[action.payload].answer.pop();

      //   questions = state.questions[action.payload].answer.filter(
      //     (item, index) => index === 2
      //   );

      questions = state.questions[action.payload];
      let filterdQuetion = state.questions[action.payload].answer.filter(
        (item, index) =>
          index !== state.questions[action.payload].answer.length - 1
      );

      questions.answer = filterdQuetion;

      return { ...state };

    case "add_question_text":
      questions = state.questions;
      questions[action.payload.index].question = action.payload.value;

      return { ...state, questions };
    default:
      return state;
  }
};

const AdminForm = () => {
  const [survey, dispatch] = useReducer(reducer, {
    name: "",
    questions: [{ question: "", answer: ["20"] }],
  });

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
              handleRemoveQuestionAnswer({ type, index, answerIndex });
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
        console.log(survey.name);
        return dispatch({ type: "add_question_field" });

      case "answer":
        return dispatch({ type: "add_answer_field", payload: index });

      default:
        return;
    }
  };

  const handleRemoveQuestionAnswer = ({ type, index, answerIndex }) => {
    switch (type) {
      case "question":
        return dispatch({ type: "remove_quetion", payload: index });
      case "answer":
        return dispatch({ type: "remove_answer_field", payload: index });
      default:
        return;
    }
  };

  const handleOnChangeQuestionText = (e, index) => {
    e.preventDefault();
    dispatch({
      type: "add_question_text",
      payload: { value: e.target.value, index },
    });
  };

  return (
    <>
      <section className="section">
        <div className="row">
          <div className="col-lg-6" style={{ marginLeft: 400, marginTop: 100 }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Set new survey form here.</h5>

                <form className="row g-3">
                  <div className="col-12">
                    <label htmlFor="inputNanme4" className="form-label">
                      Survey Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputNanme4"
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

                          {itemq.answer.map((item, index2) => {
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
                                        // console.log(this.index1);
                                        // handleRemoveQuestionAnswer({})
                                      }}
                                    />
                                    <AddRemove
                                      type="answer"
                                      index={index1}
                                      answerIndex={index2}
                                    />
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
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <button type="reset" className="btn btn-secondary">
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
