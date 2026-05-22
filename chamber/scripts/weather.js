const apiKey = "YOUR_API_KEY";
const city = "Lagos";

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("temp").textContent = data.main.temp + "°C";
  document.getElementById("desc").textContent = data.weather[0].description;
}

getWeather();