function displayTemperature (response){
console.log(response.data.temperature.current);
}

let apiKey = "f5463cfa1b8a4atd0o0764e3fff9eb42";
let apiUrl="https://api.shecodes.io/weather/v1/current?query=New York&key=f5463cfa1b8a4atd0o0764e3fff9eb42&units=imperial";

axios.get(apiUrl).then(displayTemperature);