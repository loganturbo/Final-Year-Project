import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { CgLogOut } from "react-icons/cg";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-brand">
          <img src="Egg3.png" alt="IMG" />
          <div className="info">
            <h3>Smart Incubation System</h3>
          </div>
        </div>

        <ul className="nav-list-top">
          <li className="nav-item">
            <i>
              <MdSpaceDashboard />
            </i>
            <Link to="/">
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <i>
              <FaTemperatureHigh />
            </i>
            <Link to="/temperature-graph">
              <span>Temperature</span>
            </Link>
          </li>
          <li className="nav-item">
            <i className="humidity">
              <WiHumidity />
            </i>
            <Link to="/humidity-graph">
              <span>Humidity</span>
            </Link>
          </li>
          <li className="nav-item">
            <i>
              <CgLogOut />
            </i>
            <Link to="/logout">
              <span>Logout</span>
            </Link>
          </li>
        </ul>
        <ul className="nav-list-bottom">
          <li className="nav-item"></li>
          <li className="nav-item"></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
