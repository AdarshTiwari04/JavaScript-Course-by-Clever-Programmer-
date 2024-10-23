//  * Weather App
//  * TODO: Complete getWeatherData() to return json response Promise
//  * TODO: Complete searchCity() to get user input and get data using getWeatherData()
//  * TODO: Complete showWeatherData() to set the data in the the html file from response

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */

getWeatherData = async (city) => {
  const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "491f34b095msh708f1a2b5352c05p122af4jsna8ef901ffe0e",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return error;
  }
};

//* Retrieve city input and get the weather data
//* HINT: Use the promise returned from getWeatherData()

searchCity = async () => {
  const city = document.getElementById("city-input").value;
  try {
    const data = await getWeatherData(city);
    console.log(data);
    showWeatherData(data);
  } catch (error) {
    console.error("Error fetching the weather data", error);
  }
};

//* Show the weather data in HTML
//* HINT: make sure to console log the weatherData to see how the data looks like

showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};
