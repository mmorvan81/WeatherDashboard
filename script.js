// Ex. of API Call api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key} use https://


var cityElem = document.getElementById("city");
var searchBtn = document.getElementById("search-btn");
var clearElem = document.getElementById("clear");
var nameElem = document.getElementById("name-of-city");
var currImageElem = document.getElementById("image");
var currTempElem = document.getElementById("temp");
var currHumElem = document.getElementById("humidity");4
var currWindElem = document.getElementById("wind-speed");
var historyElem = document.getElementById("history");

var searchHist = JSON.parse(localStorage.getItem("find")) || [];
console.log(find);

var APIKey = "321675c3da374215ac48e8399b4ab0af";

function getWeather(cityTitle) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityTitle + "&appid=" + APIKey;
    axios.get(queryURL)
    .then(function(response)  {
        console.log(response);

        var currDate = new date (response.data.dt*100);
        console.log(currDate);
}}
;
    var month = currDate.getDate();
    var day = currDate.getMonth(); //the " + 1"...not sure if I am adding it in, will test out
    var year = currDate.getYear();

     //not sure if this should go into an array with all the months listed
    nameElem.innerHTML = response.data.name + "("+ month + "/" + day + "/" + year + ")";

    //pulling in the info below into the placeholders in html - not sure about the numbers
    currTempElem.innerHTML = "temp:" + response.data.main.temp + "&#200F";
    currHumElem.innerHTML =  "humidity" + response.data.main.humidity + "82";
    currWindElem.innerHTML =  "wind speed" + response.data.main.wind.speed + "mph";

    //beginning the five day forcast information
    var cityID = reponse.cata.info;
    var forecastQuerURL = "https://api.openweathermap.org/data/2.5/forecast?id="+ cityID + APIKey;
    axios.get(forecastQuerURL)

    .then(function(response) {
        console.log(repsonse)
    })

    var forecastElement = document.querySelectorAll("forecast")
    for (i = 0; i < forecastElement.length; i++) {
        forecastElement.innerHTML = "";
        var forecastIndexElement = i *8 + 4;
        var forecasteDate = newDate(response.data.list[forcasteIndexElement].date*1000);
        var forecastMonth = forcastDate.getMonth();
        var forecastDay = forecasteDay.getDay();
        var forecastYear = forecasteDAy.getYear();
        var forecastDateElement = document.createElement("p");
        
        forecastDateElement.setAttribute("class", "forecast-date");
        forecastDateElement.innerHTML = "forecasteMonth + "/" + forecastDay + "/" + forecasteYear";
        forecastElements[i].append(forecastDateElement);

        forecastDateElement = document.createElement("img");
        forecastWeatherElement.setAttribute("scr", "https://api.openweathermap.org");
        forecastWeatherElement.setAttribute("alt")
        forecastElements[i].append(forecastWeatherElement);

        forecastTemperatureElement = document.createElement("p");
        forecastTemperatureElement.innerHTML = "temp:" + response.data.main.temp + "&#200F";
        forecastElements[i].append(forecastTemperatureElement);

        forecastHumidityElement = document.createElement("p");
        forecastHumidityElement.innerHTML =  "humidity" + response.data.main.humidity + "82";
        forecastElements[i].append(forecastHumidtyElement);
    }

searchBtn.addEventListener("click",function() {
    var search = inputElement.value;
    getWeather(search);
    searchHist.push(search);
    localStorage.setItem("search", JSON.stringify(searchHist));
    renderSearchHist();
})
clearBtn.addEventListener("click",function() {
    searchHist = [];
    renderSearchHist();
})

function renderSearchHist(){
    historyElem.innerHTML = "";
    for (i = 0; i < searchHist.length; i++) {
        var historyElem = document.createElement("input");
        historyElem.setAttribute("type");
        historyElem.setAttribute("read-only",true);
        historyElem.setAttribute("class");
        historyElem.setAttribute("value", searchHist[i]);
        historyElem.setAttribute("click", function() {
                getWeather(historyElem.value)
        })
    
    historyElem.append(historyElem);
    }
}
    
    renderSearchHist(); if (searchHist.length>0){
        getWeather(searchHist[searchHist.length])
     }