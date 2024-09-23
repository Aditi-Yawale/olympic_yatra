export const chartData = {
  labels: ["USA", "China", "Russia", "Germany", "Japan"], // Labels for each section of the pie
  datasets: [
    {
      label: "Medals",
      data: [50, 30, 20, 10, 40], // Corresponding data for each label
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

export const barChartData = {
  labels: ['Country A', 'Country B', 'Country C'],
  datasets: [
    {
      label: 'Gold Medals',
      data: [12, 19, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Silver Medals',
      data: [5, 15, 10],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Bronze Medals',
      data: [3, 10, 13],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
    },
  ],
};
