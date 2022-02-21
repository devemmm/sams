import React from "react";
import BarchartAnalysis from "./BarchartAnalysis";

const SingleQuetionAnalitics = () => {
  return (
    <>
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
    </>
  );
};

export default SingleQuetionAnalitics;
