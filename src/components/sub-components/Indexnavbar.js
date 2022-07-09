import React from "react";
import { Link } from "react-router-dom";

const Indexnavbar = () => {
  return (
    <>
      <div
        className="d-flex flex-row-reverse"
        style={{ marginRight: 30, marginTop: 10, marginBottom: 30 }}
      >
        <Link className="nav-item nav-link" to="/signup">
          Signup
        </Link>
        <Link className="nav-item nav-link" to="/signin">
          Signin
        </Link>
        <Link
          className="nav-item nav-link"
          to="/signin"
          style={{ backgroundColor: "blue", color: "#fff", borderRadius: 5 }}
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default Indexnavbar;
