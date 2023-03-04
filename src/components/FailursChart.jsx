import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function FailuresChart({ color, label }) {
  const options = {
    responsive: true,
    beginAtZero: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
  };

  const labels = label
    ? label
    : ["January", "February", "March", "April", "May", "June", "July"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        borderRadius: 99,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 140 })),
        backgroundColor: color ? color : ["#45B56E", "#FABB58", "#F36F56"],
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
