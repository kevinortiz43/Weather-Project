const userInputZip = document.getElementById("userInputZip")
const displayCityNameZip = document.getElementById("displayCityNameZip");
const displayCountryNameZip = document.getElementById("displayCountryNameZip");
const displayTemperatureZip = document.getElementById("displayTemperatureZip");
const displayminZip = document.getElementById("displayminZip");
const displaymaxZip = document.getElementById("displaymaxZip");
const displayHumidityZip = document.getElementById("displayHumidityZip");
const displayFeelsLikeZip = document.getElementById("displayFeelsLikeZip");
const displayWindSpeedZip = document.getElementById("windSpeedZip");
const displayweatherdescriptionZip = document.getElementById("displayweatherdescriptionZip");
const displayIconZip = document.getElementById("displayIconZip");
const displayErrorZip = document.getElementById("displayErrorMessageZip")
const zipButton = document.getElementById("zipButton")
const unit = "imperial";
// metrics for Fahrenheit, this will remain constant
const APIkey = "a4a45650e5f60155d63b1c8b9d1efb59#";
// authentication to access website, this will remain constant
  
    zipButton.addEventListener("click", ()=> {
    let userInput2 = userInputZip.value;
    const url2 = `https://api.openweathermap.org/data/2.5/weather?zip=${userInput2}&units=${unit}&appid=${APIkey}`;
    // user input zipcode second option instead of cities.      
    fetch(url2)
      .then((response) => response.json())
      .then((dataZip) => {
        displayCityNameZip.innerText = ` City name: ${dataZip.name}`;
        displayCountryNameZip.innerText = `Country name: ${dataZip.sys.country}`;
        displayTemperatureZip.innerText = `Current Temperature ${Math.round(dataZip.main.temp)} degrees Fahrenheit`;
        displayFeelsLikeZip.innerText = ` Feels like temperature ${Math.round(dataZip.main.feels_like)} degrees Fahrenheit`;
        displayminZip.innerText = `Min temperature for today: ${Math.round(dataZip.main.temp_min)} degrees Fahrenheit`;
        displaymaxZip.innerText = `Max temperature for today: ${Math.round(dataZip.main.temp_max)} degrees Fahrenheit`;
        displayHumidityZip.innerText = `Humidity: ${dataZip.main.humidity}%`;
        displayWindSpeedZip.innerText = `Windspeed: ${Math.round(dataZip.wind.speed)} mile(s)/hour`;
        const imageURL2 = `http://openweathermap.org/img/wn/${dataZip.weather[0].icon}@2x.png`;
        displayIconZip.innerHTML = `<img src=${imageURL2}>`;
        displayweatherdescriptionZip.innerText = `Current weather: ${dataZip.weather[0].description}`;
      })
      .catch((error) => { 
        displayErrorZip.innerText = `Error input a US zip code`
      })  
    })

