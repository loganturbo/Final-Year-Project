import React from "react";
import styled, { keyframes } from "styled-components";
import "./home.css";
import { BsLightbulb } from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";
import ProgressBar from "../Progress-bar/progress-bar";
import ProgressBar2 from "../Progress-bar2/progress-bar2";


function Home() {
  const Progress1 = {
    humidityProgress: 43
  }
  const Progress2 = {
    temperatureProgress: 31
  }
    return (
    <>
      <div className="overview">
        <ProgressBar {...Progress1}  />
        <ProgressBar2 {...Progress2} />
        <div className="controls">
          <div className="bulb-control">
            <i>
              <BsLightbulb />
            </i>
            <button className="bulb-on">On</button>
            <button className="bulb-off">Off</button>
          </div>
          <div className="fan-control">
            <i>
              <GiComputerFan />
            </i>
            <button className="fan-on">On</button>
            <button className="fan-off">Off</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
