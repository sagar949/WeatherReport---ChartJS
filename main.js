const btnForecast = document.querySelector('.btn');
btnForecast.addEventListener('click', ForecastData);

function ForecastData() {
  clearChart();
  console.log('In ForecastData');
  let lat = document.querySelector('#latitude').value;
  let lon = document.querySelector('#longitude').value;
  let heading = document.querySelector('.heading');
  console.log(lat, lon);
  fecthWeatherDataAsync(lat, lon).then(data => {
    updateChart(data);
    let chartHeading =
      data.city.name !== ''
        ? `${data.city.name} - City Weather Forecast`
        : `Weather Forecast`;
    heading.innerHTML = chartHeading;
  });
}
