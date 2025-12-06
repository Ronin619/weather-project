import { API_KEY } from "./config.js";
const currentWeather = document.getElementsByClassName("current-weather");

let weatherData = [];

let renderWeather = (res, iconUrl) => {

}

document.querySelector("#searchBtn").addEventListener("click", (e) => {
   e.preventDefault();

  const search = document.querySelector("#inlineFormInputName").value;

  fetchWeather(search);
})

let fetchWeather = (city) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`

  fetch(weatherUrl , {
    method: "GET",
    dataType: "json"
  })
  .then(res => res.json())
  .then(res => { 

    const icon = res.weather[0].icon;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    renderWeather(res, iconUrl);
  })
}

