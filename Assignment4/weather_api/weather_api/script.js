const apiKey = 'a72f33de282ac1cca4877a339a42c70b'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (city !== '') {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => displayWeather(data))
      .catch(error => console.error('Error:', error));
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = '';

  if (data.cod === '404' || data.cod === '400') {
    weatherInfo.innerHTML = '<p>City not found</p>';
  } else {
    const cityName = data.name;
    const country = data.sys.country;
    const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius

    const description = data.weather[0].description;
    
    const weatherDetails = `
      <h2>${cityName}, ${country}</h2>
      <p>${description}</p>
      <p>Temperature: ${temperature}°C</p>
    `;
    weatherInfo.innerHTML = weatherDetails;
  }
}
