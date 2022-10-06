import React from "react";
import "./humidity.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Humidity() {
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
        data: [
          52.2, 53, 53.4, 53.8, 52, 51.7, 51.3, 52.6, 52.8, 54.2, 50.2, 50,
          50.1, 50.5, 51, 54.6, 55,
        ],
        borderColor: "#000000",
        tension: 0.3,
        borderColor: "blue",
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

export default Humidity;
