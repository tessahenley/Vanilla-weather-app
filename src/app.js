function displayTemperature (response){
console.log(response.data.temperature.current);
let temperatureElement = document.querySelector("#temp");
temperatureElement.innerHTML = Math.round(response.data.temperature.current);
let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.city;
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = response.data.condition.description;
let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = "Humidity: " + Math.round(response.data.temperature.humidity) + "%";
let windElement = document.querySelector("#wind");
windElement.innerHTML = "Wind: " + Math.round(response.data.wind.speed) + "mph";
}
let apiKey = "f5463cfa1b8a4atd0o0764e3fff9eb42";
let apiUrl="https://api.shecodes.io/weather/v1/current?query=New York&key=f5463cfa1b8a4atd0o0764e3fff9eb42&units=imperial";

axios.get(apiUrl).then(displayTemperature);