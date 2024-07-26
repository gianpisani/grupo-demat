'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      backgroundColor: 'rgba(255, 99, 132, 1)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
    },
    {
      label: 'MTS',
      data: [0, 14, 10],
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1,
    },
    {
      label: 'EASY',
      data: [1, 7, 12],
      backgroundColor: 'rgba(75, 192, 192, 1)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
    },
    {
      label: 'CHILEMAT',
      data: [0, 6, 5],
      backgroundColor: 'rgba(153, 102, 255, 1)',
      borderColor: 'rgb(153, 102, 255)',
      borderWidth: 1,
    },
    {
      label: 'CONSTRUMAT',
      data: [6, 8, 6],
      backgroundColor: 'rgba(255, 159, 64, 1)',
      borderColor: 'rgb(255, 159, 64)',
      borderWidth: 1,
    },
    {
      label: 'SODIMAC',
      data: [15, 21, 50],
      backgroundColor: 'rgba(255, 205, 86, 1)',
      borderColor: 'rgb(255, 205, 86)',
      borderWidth: 1,
    },
    {
      label: 'HOME DEPOT',
      data: [3, 0, 0],
      backgroundColor: 'rgba(201, 203, 207, 1)',
      borderColor: 'rgb(201, 203, 207)',
      borderWidth: 1,
    },
  ],
};

export default function BarChart() {
  return <Bar data={data} options={{
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: false,
        text: 'Participación de mercado a lo largo de los años',
      },
    },
  }} />;
}
