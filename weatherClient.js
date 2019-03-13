const API_KEY = '4e32b0aa1595cccfed79c316e0afc5ae';

const fecthWeatherDataAsync = async (latitude, longitude) => {
  console.log('in fetch', latitude, longitude);
  let response;
  if ((latitude != '') & (longitude != '')) {
    response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );
  } else {
    console.warn('must pass latitude and longitude');
  }
  let data = await response.json();
  return data;
};
