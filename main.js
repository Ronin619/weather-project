import { API_KEY } from "./config.js";
const currentWeather = document.getElementsByClassName("current-weather");

let weatherData = [];

document.querySelector("#searchBtn").addEventListener("click", (e) => {
   e.preventDefault();

  const search = document.querySelector("#inlineFormInputName").value;

  fetchWeather(search);
})

let fetchWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`

  fetch(url, {
    method: "GET",
    dataType: "json"
  })
  .then(data => data.json())
  .then(data => console.log(data))
}