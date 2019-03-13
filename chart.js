let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: [],
    datasets: [
      {
        label: 'Temperature in Celcius',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: []
      }
    ]
  },

  // Configuration options go here
  options: { responsive: true }
});

const updateChart = data => {
  for (const item of data.list) {
    chart.data.labels.push(item.dt_txt);
    chart.data.datasets[0].data.push(item.main.temp);
  }
  chart.update();
};

const clearChart = () => {
  chart.data.labels = [];
  chart.data.datasets[0].data = [];
  chart.update();
};
