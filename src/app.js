function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10 ){
        minutes = `0${minutes}`;
    }
    if (hours < 10 ){
        hours = `0${hours}`;
    }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

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
let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(response.data.time * 1000);
}
let apiKey = "f5463cfa1b8a4atd0o0764e3fff9eb42";
let apiUrl="https://api.shecodes.io/weather/v1/current?query=New York&key=f5463cfa1b8a4atd0o0764e3fff9eb42&units=imperial";

axios.get(apiUrl).then(displayTemperature);