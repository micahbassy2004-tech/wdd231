const apiKey = "9097b95d086aa4ade1d9a0d0e5632dbb";
const city = "Lagos";

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("temp").textContent = `${data.main.temp}°C`;
  document.getElementById("desc").textContent = data.weather[0].description;
}

async function getForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();

  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "";

  const daily = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  ).slice(0, 3);

  daily.forEach(day => {
    forecastDiv.innerHTML += `
      <p>
        ${day.dt_txt.split(" ")[0]}:
        ${Math.round(day.main.temp)}°C - ${day.weather[0].description}
      </p>
    `;
  });
}

getWeather();
getForecast();