import React from "react";
import { Link } from "react-router-dom";
import { news } from "../data/defaultData";

const UserMesages = () => {
  return (
    <>
      <div className="card-body pb-0">
        <h5 className="card-title">
          News &amp; Updates <span>| Today</span>
        </h5>

        <div className="news">
          {news.map((item, index) => {
            return (
              <div key={index.toString()}>
                <div className="post-item clearfix">
                  <img src={item.avatar} alt="" />
                  <h4>
                    <Link to="#">{item.subject}</Link>
                  </h4>
                  <p>{item.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserMesages;
