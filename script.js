const apiKey = "decbf41ab340423da4c53650252605"; // Replace with your WeatherAPI.com key

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
    city
  )}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found or API error");
      }
      return response.json();
    })
    .then((data) => {
      const result = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
        <p><strong>Condition:</strong> ${data.current.condition.text}</p>
        <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.current.wind_kph} km/h</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch((error) => {
      document.getElementById(
        "weatherResult"
      ).innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
