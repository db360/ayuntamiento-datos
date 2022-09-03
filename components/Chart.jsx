import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {

  const data = {
    backgroundColor: [
      "rgb(2, 88, 255)",
      "rgb(249, 151, 0)",
      "rgb(255, 199, 0)",
      "rgb(32, 214, 152)",
    ],
    labels: ["Event 1", "Event 2", "Event 3", "Event 4"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100, 400],
        backgroundColor: [
          "rgb(2, 88, 255)",
          "rgb(249, 151, 0)",
          "rgb(255, 199, 0)",
          "rgb(32, 214, 152)",
        ],
        hoverOffset: 5,
      }
    ]
  };

  const options = {
    elements: {
      arc: {
        weight: 0.5,
        borderWidth: 3,
      },
    },
  }

  return (
    <div className="mt-10 mb-10">
        <Doughnut data={data} options={options}/>
    </div>
  )
}

export default Chart;