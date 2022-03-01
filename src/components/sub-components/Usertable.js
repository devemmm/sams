import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import samsApi from "../apis/sams-api";

const Usertable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsersList();
  }, []);

  const fetchUsersList = () => {
    fetch(`${samsApi}/users`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status !== 200) {
          setUsers([]);
          console.log(res);
        } else {
          if (res.data.length > 0) {
            setUsers(res.data);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="breadcrumb-item active">Users</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Users <span>| This Month</span>
                  </h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-people"></i>
                    </div>
                    <div className="ps-3">
                      <h6>{users.length}</h6>
                      <span className="text-danger small pt-1 fw-bold">
                        0.65%
                      </span>{" "}
                      <span className="text-muted small pt-2 ps-1">
                        Increase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Users</h5>
                  <p>
                    This is a list of Sanitation accessability Monitoring System
                    users
                  </p>

                  <table className="table datatable table-primary">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">Position</th>
                        <th scope="col">Date of Birth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((item, index) => {
                        return (
                          <tr key={index.toString()}>
                            <th scope="row">{index}</th>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>

                            <td>{item.userType}</td>
                            <td>{item.dob}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Usertable;
