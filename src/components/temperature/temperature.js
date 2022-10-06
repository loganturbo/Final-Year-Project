import React from "react";
import "./temperature.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Temperature() {
  const data = {
    labels: [
      "May 1",
      "May 2",
      "May 3",
      "May 4",
      "May 5",
      "May 6",
      "May 7",
      "May 8",
      "May 9",
      "May 10",
      "May 11",
      "May 12",
      "May 13",
      "May 14",
      "May 15",
      "May 16",
      "May 17",
      "May 18",
      "May 19",
      "May 20",
      "May 21",
    ],
    datasets: [
      {
        data: [38, 37, 39.5, 36, 37.5, 36, 38.5, 39, 36.5, 40, 40.5],
        borderColor: "#000000",
        tension: 0.3,
        borderColor: "red",
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <>
      <div className="overview">
        <div className="temp-chart">
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default Temperature;
