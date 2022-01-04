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
const APIkey = "a4a45650e5f60155d63b1c8b9d1efb59#";
// authentication to access website, this will remain constant
  
    zipButton.addEventListener("click",() => {
    let userInput1 = userInputZip.value;
    const url2 = `https://api.openweathermap.org/data/2.5/weather?zip=${userInput1}&units=${unit}&appid=${APIkey}`;
    // user input zipcode second option instead of cities.      
    fetch(url2)
      .then((response) => response.json())
      .then((data) => {
        displayCityName.innerText =  ` City name: ${data.name}`;
        displayCountryName.innerText =  `Country name: ${data.sys.country}`;
        displayFeelsLike.innerText =  ` Feels like temperature ${Math.round(data.main.feels_like)} degrees Fahrenheit`;
        displayTemperature.innerText =  `Current Temperature ${Math.round(data.main.temp)} degrees Fahrenheit`;
        displaymin.innerText =  `Min temperature for today: ${Math.round(data.main.temp_min)} degrees Fahrenheit`;
        displaymax.innerText =  `Max temperature for today: ${Math.round(data.main.temp_max)} degrees Fahrenheit`;
        displayFeelsLikeCelsius.innerText =  ` Feels like temperature ${Math.round((((data.main.feels_like)-32)*5)/9)} degrees Celsius`;
        displayTemperatureCelsius.innerText =  `Current Temperature ${Math.round((((data.main.temp)-32)*5)/9)} degrees Celsius`;
        displayminCelsius.innerText =  `Min temperature for today: ${Math.round((((data.main.temp_min)-32)*5)/9)} degrees Celsius`;
        displaymaxCelsius.innerText =  `Max temperature for today: ${Math.round((((data.main.temp_max)-32)*5)/9)} degrees Celsius`;
        displayHumidity.innerText =  `Humidity: ${data.main.humidity}%`;
        displayWindSpeed.innerText =  `Windspeed: ${Math.round(data.wind.speed)} mile(s)/hour`;
        const imageURL =  `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        displayIcon.innerHTML =  `<img src= ${imageURL}>`;
        displayweatherdescription.innerText =  `Current weather description: ${data.weather[0].description}`;
      })
      .catch((error) => { 
        displayError.innerText = `Error, input a US zip code`
      })  
    })

