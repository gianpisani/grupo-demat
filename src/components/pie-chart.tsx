'use client';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data2001 = {
  labels: ['Ferreterías', 'MTS', 'EASY', 'CHILEMAT', 'CONSTRUMAT', 'SODIMAC', 'HOME DEPOT'],
  datasets: [
    {
      data: [75, 14, 1, 6, 6, 15, 3],
      backgroundColor: [
        'rgba(55, 59, 164, 1)', // Ferreterías
        'rgba(255, 205, 86, 1)', // MTS
        'rgba(255, 99, 132, 1)', // EASY
        'rgba(75, 192, 192, 1)', // CHILEMAT
        'rgba(153, 102, 255, 1)', // CONSTRUMAT
        'rgba(54, 162, 235, 1)', // SODIMAC
        'rgba(255, 159, 64, 1)', // HOME DEPOT
      ],
      borderColor: [
        'rgba(55, 59, 164, 1)', // Ferreterías
        'rgba(255, 205, 86, 1)', // MTS
        'rgba(255, 99, 132, 1)', // EASY
        'rgba(75, 192, 192, 1)', // CHILEMAT
        'rgba(153, 102, 255, 1)', // CONSTRUMAT
        'rgba(54, 162, 235, 1)', // SODIMAC
        'rgba(255, 159, 64, 1)', // HOME DEPOT
      ],
      borderWidth: 1,
    },
  ],
};

const data2006 = {
  labels: ['Ferreterías', 'MTS', 'EASY', 'CHILEMAT', 'CONSTRUMAT', 'SODIMAC', 'HOME DEPOT'],
  datasets: [
    {
      data: [44, 14, 7, 6, 8, 21, 0],
      backgroundColor: [
        'rgba(55, 59, 164, 1)', // Ferreterías
        'rgba(255, 205, 86, 1)', // MTS
        'rgba(255, 99, 132, 1)', // EASY
        'rgba(75, 192, 192, 1)', // CHILEMAT
        'rgba(153, 102, 255, 1)', // CONSTRUMAT
        'rgba(54, 162, 235, 1)', // SODIMAC
        'rgba(255, 159, 64, 1)', // HOME DEPOT
      ],
      borderColor: [
        'rgba(55, 59, 164, 1)', // Ferreterías
        'rgba(255, 205, 86, 1)', // MTS
        'rgba(255, 99, 132, 1)', // EASY
        'rgba(75, 192, 192, 1)', // CHILEMAT
        'rgba(153, 102, 255, 1)', // CONSTRUMAT
        'rgba(54, 162, 235, 1)', // SODIMAC
        'rgba(255, 159, 64, 1)', // HOME DEPOT
      ],
      borderWidth: 1,
    },
  ],
};

const data2017 = {
  labels: ['Ferreterías', 'MTS', 'EASY', 'CHILEMAT', 'CONSTRUMAT', 'SODIMAC', 'HOME DEPOT'],
  datasets: [
    {
      data: [17, 10, 12, 5, 6, 50, 0],
      backgroundColor: [
        'rgba(55, 59, 164, 1)', // Ferreterías
        'rgba(255, 205, 86, 1)', // MTS
        'rgba(255, 99, 132, 1)', // EASY
        'rgba(75, 192, 192, 1)', // CHILEMAT
        'rgba(153, 102, 255, 1)', // CONSTRUMAT
        'rgba(54, 162, 235, 1)', // SODIMAC
        'rgba(255, 159, 64, 1)', // HOME DEPOT
      ],
      borderColor: [
        'rgba(55, 59, 164, 1)', // Ferreterías
        'rgba(255, 205, 86, 1)', // MTS
        'rgba(255, 99, 132, 1)', // EASY
        'rgba(75, 192, 192, 1)', // CHILEMAT
        'rgba(153, 102, 255, 1)', // CONSTRUMAT
        'rgba(54, 162, 235, 1)', // SODIMAC
        'rgba(255, 159, 64, 1)', // HOME DEPOT
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Participación de mercado en el año',
    },
  },
};

export default function PieCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 className="text-center font-bold text-xl">Año 2001</h3>
        <Pie data={data2001} options={{
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
        },
        }} />
      </div>
      <div>
        <h3 className="text-center font-bold text-xl">Año 2006</h3>
        <Pie data={data2006} options={{
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
        },
        }} />
      </div>
      <div>
        <h3 className="text-center font-bold text-xl">Año 2017</h3>
        <Pie data={data2017} options={{
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
        },
        }} />
      </div>
    </div>
  );
}
