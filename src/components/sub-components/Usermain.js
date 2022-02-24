import React, { useState } from "react";
import { Link } from "react-router-dom";

const Usermain = () => {
  const [survey, setSurvey] = useState({
    _id: "621601d3869342337a39c560",
    name: "RSSB ISSUES",
    questions: [
      {
        question: "question no 1",
        options: ["true", "false"],
        _id: "621601d3869342337a39c561",
      },
      {
        question: "question no 2",
        options: ["1 kms", "2 km", "3 km"],
        _id: "621601d3869342337a39c562",
      },
    ],
    createdAt: "2022-02-23T09:43:47.785Z",
    updatedAt: "2022-02-23T09:43:47.785Z",
    __v: 0,
  });
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Form Elements</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item">Forms</li>
              <li className="breadcrumb-item active">Elements</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-11">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Complete Survey here...</h5>

                  <form>
                    {survey.questions.map((question, index) => {
                      return (
                        <div key={index.toString()}>
                          <div class="row mb-3">
                            <label
                              for="inputEmail3"
                              class="col-sm-1 col-form-label"
                            >
                              1.
                            </label>
                            <div class="col-sm-8">
                              <h4>
                                Break the ice and get to know people better by
                                selecting several of these get-to-know-you
                                questions.
                              </h4>
                            </div>
                          </div>

                          <fieldset class="row mb-3">
                            <legend class="col-form-label col-sm-1 pt-0">
                              Answer
                            </legend>

                            <div class="col-sm-10">
                              {question.options.map((option, index2) => {
                                return (
                                  <div key={index2.toString()}>
                                    <div class="form-check">
                                      <input
                                        class="form-check-input"
                                        type="checkbox"
                                        id="gridCheck1"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="gridCheck1"
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

                    <div class="text-center">
                      <button type="submit" class="btn btn-primary">
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
