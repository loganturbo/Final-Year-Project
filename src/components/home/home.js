import React from "react";
import styled, { keyframes } from "styled-components";
import "./home.css";
import { BsLightbulb } from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";

function Home() {
  const numbers = document.querySelectorAll(".number");
  const svgEl = document.querySelectorAll("svg circle");
  const counters = Array(numbers.length);
  const intervals = Array(counters.length);
  counters.fill(0);

  numbers.forEach((number, index) => {
    intervals[index] = setInterval(() => {
      if (counters[index] === parseInt(number.dataset.num)) {
        clearInterval(counters[index]);
      } else {
        counters[index] += 1;
        number.innerHTML = counters[index] + "%";
        svgEl[index].style.strokeDashoffset = Math.floor(
          472 - 440 * parseFloat(number.dataset.num / 100)
        );
      }
    }, 20);
  });

  return (
    <>
      <div className="overview">
        <div className="progressbar1">
          <h2 className="temp">Temperature</h2>
          <div className="outer1">
            <div className="inner1">
              <div className="number" id="number" data-num="35">
                35.7<span>&#176;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="progressbar2">
          <h2 className="hum">Humidity</h2>
          <div className="outer2">
            <div className="inner2">
              <div id="number" data-num="43">
                43%
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg>
        </div>
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
