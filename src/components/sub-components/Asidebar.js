import React from "react";
import { Link } from "react-router-dom";

const Asidebar = () => {
  const margin = { marginTop: 20 };
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item" style={margin}>
            <Link className="nav-link " to="/home">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="nav-item" style={margin}>
            <Link className="nav-link " to="/management">
              <i className="bi bi-grid"></i>
              <span>Management</span>
            </Link>
          </li>

          <li className="nav-item" style={margin}>
            <Link className="nav-link " to="/users">
              <i className="bi bi-grid"></i>
              <span>Users</span>
            </Link>
          </li>

          <li className="nav-item" style={margin}>
            <Link className="nav-link " to="/profile">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Asidebar;
