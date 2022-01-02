// const express = require("express");
// const https = require("https");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function(req,res){
// res.sendFile(__dirname + "/index.html")
// })

// app.post("/", function(req, res){

// https.get(url, function(response){

//     response.on("data", function(data){
//         const weatherData = JSON.parse(data)
//         console.log(weatherData)
//         const temp = weatherData.main.feels_like
//         const weatherDescription = weatherData.weather[0].description
//         const icon = weatherData.weather[0].icon
//         const imageURL = " http://openweathermap.org/img/wn/" + icon +"@2x.png"
//         res.write("<p> The weather is currently " + weatherDescription + "</p>")
//         res.write("<h1>The temperature in" +query + "is " + temp + " degrees Fahrenheit.</h1>")
//         res.write("<img src=" + imageURL + ">")
//         res.send()
//     })
// })
// })