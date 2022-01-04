const userInputCity =  document.getElementById("userInputCity")
const displayCityName =  document.getElementById("displayCityName");
const displayCountryName =  document.getElementById("displayCountryName");
const displayFeelsLike =  document.getElementById("displayFeelsLike");
const displayTemperature =  document.getElementById("displayTemperature");
const displaymin =  document.getElementById("displaymin");
const displaymax =  document.getElementById("displaymax");
const displayFeelsLikeCelsius =  document.getElementById("displayFeelsLikeCelsius");
const displayTemperatureCelsius =  document.getElementById("displayTemperatureCelsius");
const displayminCelsius =  document.getElementById("displayminCelsius");
const displaymaxCelsius =  document.getElementById("displaymaxCelsius");
const displayHumidity =  document.getElementById("displayHumidity");
const displayWindSpeed =  document.getElementById("windSpeed");
const displayweatherdescription =  document.getElementById("displayweatherdescription");
const displayIcon =  document.getElementById("displayIcon");
const displayError =  document.getElementById("displayErrorMessage")
const cityButton=  document.getElementById("cityButton")
const unit = "imperial";
// metrics for Fahrenheit, this will remain constant
const APIkey =  "a4a45650e5f60155d63b1c8b9d1efb59#";
// authentication to access website, this will remain constant

cityButton.addEventListener("click", () => {
// call back function, the fetch won't run until submit button for city is clicked.
  let userInput =  userInputCity.value;
  // user decides what city they want and this will dynamically update our parameters
  const url =  `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=${unit}&appid=${APIkey}`;
// endpoint with parameters to get city and imperial units when user searches it
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCityName.innerText = ` City name: ${data.name}`;
      // display city names
      displayCountryName.innerText = `Country name: ${data.sys.country}`;
     // display country name
      displayFeelsLike.innerText = ` Feels like temperature ${Math.round(data.main.feels_like)} degree(s) Fahrenheit `;
      // display current feels like temperature in Fahrenheit
      displayTemperature.innerText = `Current Temperature ${Math.round(data.main.temp)} degree(s) Fahrenheit `;
     // display current tempearture in Fahrenheit
      displaymin.innerText = `Min temperature for today: ${Math.round(data.main.temp_min)} degree(s) Fahrenheit `;
      // display current minimum temperature in Fahrenheit
      displaymax.innerText = `Max temperature for today: ${Math.round(data.main.temp_max)} degree(s) Fahrenheit `;
      // displays current maximum temperature in Fahrenheit
      displayFeelsLikeCelsius.innerText = ` Feels like temperature ${Math.round((((data.main.feels_like)-32)*5)/9)} degree(s) Celsius `;
      // displays feels like temperature in Celsius
      displayTemperatureCelsius.innerText = `Current Temperature ${Math.round((((data.main.temp)-32)*5)/9)} degree(s) Celsius `;
     // displays temperature in Celsius
      displayminCelsius.innerText = `Min temperature for today: ${Math.round((((data.main.temp_min)-32)*5)/9)} degree(s) Celsius `;
      // displays minimum temperature in Celsius
      displaymaxCelsius.innerText = `Max temperature for today: ${Math.round((((data.main.temp_max)-32)*5)/9)} degree(s) Celsius `;
      // displays maximum temperature in Celsius
      displayHumidity.innerText = `Humidity: ${data.main.humidity}% `;
      // displays humidity percentage
      displayWindSpeed.innerText = `Windspeed: ${Math.round(data.wind.speed)} mile(s)/hour `;
      // displays windspeed in miles per hour
      const imageURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png `;
      // end point to display a weather icon from open weather map, the icon is dynamically updated 
      // by the icon provided from our api.
      displayIcon.innerHTML = `<img src=${imageURL}>`;
      // icon is an image so <img src = {}> is necessary
      displayweatherdescription.innerText = `Current weather description: ${data.weather[0].description} `;
      // displays weather description (rain, sleet, snow)
    })
    .catch((error) => { 
      displayError.innerText = `Error please input a city name `
      console.log(error)
    // In case there is an error
    })  
  })
  