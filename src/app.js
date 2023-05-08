function handleSubmit(event){
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}
function search(city){
    let apiKey = "f5463cfa1b8a4atd0o0764e3fff9eb42";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayTemperature);
}

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

function displayForecast(response) {
    console.log(response.data.daily);
    let forecastElement = document.querySelector("#forecast");
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let forecastHTML = `<div class="row">`;
    days.forEach(function (day) {
    forecastHTML = 
    forecastHTML +
    `
        <div class="col-2">
            <div class="weather-forecast-date">${day}</div>
                <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                  width="45"/>
                    <div class="weather-forecast-temp">
                        <span class = "weather-forecast-temp-max">70°</span>
                        <span class = "weather-forecast-temp-min">58°</span>
                        </div>
                </div>
            `;
    });
    forecastHTML = forecastHTML + `<div>`;
    forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates){
    let apiKey = "f5463cfa1b8a4atd0o0764e3fff9eb42";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=imperial`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayForecast);
}

function displayTemperature (response){
let temperatureElement = document.querySelector("#temp");
temperatureElement.innerHTML = Math.round(response.data.temperature.current);
let cityElement = document.querySelector("#city");
cityElement.innerHTML = response.data.city;
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = response.data.condition.description;
let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = "Humidity: " + Math.round(response.data.temperature.humidity) + "%";
let windElement = document.querySelector("#wind");
windElement.innerHTML = "Wind: " + Math.round(response.data.wind.speed) + " mph";
let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate(response.data.time * 1000);
let iconElement = document.querySelector("#icon");
iconElement.setAttribute("src",`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
iconElement.setAttribute("alt", response.data.condition.description);

getForecast(response.data.coordinates);
}

search("Asheville");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
