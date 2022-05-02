import React from "react";

const Alert = ({ type, message }) => {
  const backgroundColor = `alert alert-success bg-${type} text-light border-0 alert-dismissible fade show`;
  return (
    <>
      <div
        className={backgroundColor}
        role="alert"
        style={{ textAlign: "center", textTransform: "capitalize" }}
      >
        {message}
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;
