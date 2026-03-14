const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("getWeather");
const weatherDiv = document.getElementById("weather");

async function getWeather(city) {

  try {

    weatherDiv.innerHTML = "Loading weather...";

    const res = await fetch(`https://wttr.in/${city}?format=j1`);

    const data = await res.json();

    const current = data.current_condition[0];

    weatherDiv.innerHTML = `
      <h3>${city}</h3>
      <p>🌡 Temperature: ${current.temp_C}°C</p>
      <p>🌥 Weather: ${current.weatherDesc[0].value}</p>
      <p>💧 Humidity: ${current.humidity}%</p>
      <p>💨 Wind Speed: ${current.windspeedKmph} km/h</p>
    `;

  } catch (error) {

    weatherDiv.innerHTML = "❌ Unable to fetch weather";

    console.error(error);

  }

}

searchBtn.addEventListener("click", () => {

  const city = cityInput.value.trim();

  if (!city) {
    weatherDiv.innerHTML = "⚠️ Please enter a city";
    return;
  }

  getWeather(city);

});

cityInput.addEventListener("keypress", (e) => {

  if (e.key === "Enter") {
    searchBtn.click();
  }

});


/* Default city when page loads */

window.addEventListener("load", () => {

  cityInput.value = "Delhi";   // show Delhi in input
  getWeather("Delhi");         // fetch Delhi weather

});