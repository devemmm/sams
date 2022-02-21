import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import samsApi from "./apis/sams-api";

const UserMesages = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = () => {
    fetch(`${samsApi}/users/messages`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status !== 200) {
          setUpdates([]);
          console.log(res);
        } else {
          if (res.data.length > 0) {
            setUpdates(res.data);
          }
        }
      })
      .catch((error) => {
        setUpdates([]);
        console.log(error);
      });
  };

  return (
    <>
      <div className="card-body pb-0">
        <h5 className="card-title">
          News &amp; Updates <span>| Today</span>
        </h5>

        <div className="news">
          {updates.map((item, index) => {
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
