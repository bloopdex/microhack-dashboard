import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function RequestChart() {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Amount of failures",
        data: labels.map(() => faker.datatype.number({ min: 1, max: 7 })),
        backgroundColor: "rgb(52, 145, 207)",
        borderColor: "rgb(52, 145, 207)",
        yAxisID: "y",
        lineTension: 0,
      },
      {
        label: "Numbers of Repairing",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 7 })),
        backgroundColor: "rgb(255,196,68)",
        borderColor: "rgb(255,196,68)",
        yAxisID: "y",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
