import React from "react";
import BarchartAnalysis from "./BarchartAnalysis";
import constants from "../../libs/constants";

const SingleQuetionAnalitics = ({ data }) => {
  return (
    <>
      <div className="d-flex flex-row">
        <div
          style={{
            borderBottom: "grey",
            borderWidth: 1,
          }}
        >
          <BarchartAnalysis data={data.data} />
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
            {data.question}
          </h5>

          <div>
            {data.data.map((option, index) => {
              return (
                <div key={index.toString()}>
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
                        backgroundColor: constants.COLORS[index],
                        marginRight: 10,
                      }}
                    ></div>
                    <div>
                      <h6>{option.option}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleQuetionAnalitics;
