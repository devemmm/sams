import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Asidebar = () => {
  const margin = { marginTop: 20 };
  const [cookies] = useCookies('["sams"]');

  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          {cookies.user.userType === "admin" ? (
            <div>
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
            </div>
          ) : null}

          {cookies.user.userType == "user" ? (
            <div>
              <li className="nav-item" style={margin}>
                <Link className="nav-link " to="/home">
                  <i className="bi bi-person"></i>
                  <span>Home</span>
                </Link>
              </li>

              <li className="nav-item" style={margin}>
                <Link className="nav-link " to="/contact">
                  <i className="bi bi-person"></i>
                  <span>Contact MOH</span>
                </Link>
              </li>
            </div>
          ) : null}

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
