'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['2001', '2006', '2017'],
  datasets: [
    {
      label: 'Ferreterías',
      data: [75, 44, 17],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'MTS',
      data: [0, 14, 10],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    },
    {
      label: 'EASY',
      data: [1, 7, 12],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'CHILEMAT',
      data: [0, 6, 5],
      borderColor: 'rgb(153, 102, 255)',
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
    },
    {
      label: 'CONSTRUMAT',
      data: [6, 8, 6],
      borderColor: 'rgb(255, 159, 64)',
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
    },
    {
      label: 'SODIMAC',
      data: [15, 21, 50],
      borderColor: 'rgb(255, 205, 86)',
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
    },
    {
      label: 'HOME DEPOT',
      data: [3, 0, 0],
      borderColor: 'rgb(201, 203, 207)',
      backgroundColor: 'rgba(201, 203, 207, 0.5)',
    },
  ],
};



export default function LineChart() {
  return <Line data={data} options={
        {
            responsive: true,
            plugins: {
                legend: {
                position: 'top',
                },
                title: {
                display: true,
                text: 'Participación de mercado a lo largo de los años',
                },
            },
        }
    } />;
}
