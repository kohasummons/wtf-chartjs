// import { Chart } from "chart.js/auto";
import {
  Chart,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
} from "chart.js";

Chart.register(
  Colors,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend
);

import { getAquisitionsByYear } from "./api";

(async function () {
  //   const data = [
  //     { year: 2010, count: 10, rate: 23 },
  //     { year: 2011, count: 20, rate: 22 },
  //     { year: 2012, count: 15, rate: 33 },
  //     { year: 2013, count: 25, rate: 32 },
  //     { year: 2014, count: 22, rate: 20 },
  //     { year: 2015, count: 30, rate: 14 },
  //     { year: 2016, count: 28, rate: 20 },
  //   ];

  const data = await getAquisitionsByYear();

  new Chart(document.getElementById("acquisitions"), {
    type: "bar",
    options: {
      animation: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data.map((row) => row.count),
        },
        {
          label: "Customer Satisfaction by year",
          data: data.map((row) => row.rate),
        },
      ],
    },
  });
})();
