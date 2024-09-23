
export const lineChartData = {
    labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ],
    datasets: [
        {
            label: "Steps by others",
            data: [100, 200, 100, 300, 200, 120, 500],
            borderColor: "#3333ff",
        },
        {
            label: "Steps by me",
            data: [500, 1000, 700, 900, 1000, 600, 250],
            borderColor: "#ff3333",
        }
    ],
};

export const barChartData = {
    labels: [
        "Rent",
        "Groceries",
        "Utilities",
        "Transportation",
        "Entertainment",
    ],
    datasets: [
        {
            label: "Monthly Expenses",
            data: [800, 300, 200, 150, 100],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
        }
    ],
};

/* 
export const pieChartData = {
    labels: ["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"],
    datasets: [
        {
            label: "Social Media usage",
            data: [300, 50, 100, 200, 150],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
            ],
            hoveroffset: 4,
        },
    ],
};
 */

export const data = {
    labels: ['Gold', 'Silver', 'Bronze'],
    datasets: [
      {
        label: 'Medal Count',
        data: [12, 19, 3], // Example values for medals
        backgroundColor: ['#FFD700', '#C0C0C0', '#CD7F32'],
        borderColor: ['#FFD700', '#C0C0C0', '#CD7F32'],
        borderWidth: 1,
      },
    ],
  };
  