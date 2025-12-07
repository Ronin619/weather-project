import { API_KEY } from "./config.js";

let weatherData = [];

let renderWeather = () => {
  document.querySelector('#currentWeather').replaceChildren();

  for (let i = 0; i < weatherData.length; i++) {
    const template = `
      <div class="weatherProfile">
      <h2 class="temp">${Math.ceil(weatherData[i].temperature)}°</h2>
      <h2 class="city">${weatherData[i].cityName}</h2>
      <h2 class="condition">${weatherData[i].weatherCondition}</h2>
      </div>
      <div class="weatherIcon">
        <img src=${weatherData[i].weatherIcon}>
      </div>
    `
    document.querySelector("#currentWeather").insertAdjacentHTML("beforeend", template);
  }
}


document.querySelector("#searchBtn").addEventListener("click", (e) => {
   e.preventDefault();

  let search = document.querySelector("#inlineFormInputName").value;

  fetchWeather(search);

  search = "";
});

let fetchWeather = (city) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`

  fetch(weatherUrl , {
    method: "GET",
    dataType: "json"
  })
  .then(res => res.json())
  .then(res => { 
    addWeather(res);
  })
}

let addWeather = (res) => {
  weatherData = [];

  const weatherProfile = {
    temperature: res.main.temp,
    cityName: res.name,
    weatherCondition: res.weather[0].main,
    weatherIcon: `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
  }

  weatherData.push(weatherProfile);

  renderWeather(weatherData);
}
