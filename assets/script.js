// Code given by the professor 
// function get5DaysForecast(apiResponse) {
//     return apiResponse.list.reduce(function(days,current) {
//         var currentDate=current.dt_txt.split(" ")[0];
//         if(!days.find(function(day) {
//             return day.dt_txt.includes(currentDate);
//         })) {
//             return [...days,current];
//         }
//         return days;
//     },[])
// }

// //Example usage
// fetch("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}").then(function(response){
//    return response.json();
// }).then(function(data){
//    var fiveDaysForecast=get5DaysForecast(data);
//    console.log(fiveDaysForecast);
// });

// SEARCH HISTORY FUNCTION 

// STORE API INFORMATION IN VARIABLES
var baseUrl = "https://api.openweathermap.org";
var APIkey = "d882ee08c41452ba3fd165e1c9e8e0a8";

// STORE JQUERY SELECTORS IN VARIABLES
var searchFormEl = document.querySelector('#search-city');
var resultTextEl = document.querySelector('#cityName');

// VARIABLES FOR ARRAYS AND INPUTS
var cityName;
var weather =[];
var cityList =[];
var inTemp = $("#d0-temp");
var inHum = $("#d0-hum");
var inWind = $("#d0-wind");
var inUV = $("#d0-UV");

// FUNCTION TO DISPLAY WEATHER
function weatherDisplay(weather){
inWind.text(weather[0].wind);
inUV.text(weather[0].UV);
$("#cityName").text(cityName);
if (weather[0].UV < 3) {varUV = `Green`}; // 0-2 is Low, < 3
if (weather[0].UV < 6) {varUV = `Yellow`}; // 3-5 is Moderate < 6
if (weather[0].UV < 8) {varUV = `Orange`}; // 6-7 is High < 8
if (weather[0].UV < 11) {varUV = `Red`}; // 8-10 is Very High < 11
if (weather[0].UV >= 11) {varUV = `Violet`}; // 11+ is Extreme >= 11
$(`#d0-UV`).css( "background-color", varUV);
for (var i = 0; i <= 5; i++) {
    $(`#d`+i+`-temp`).text(weather[i].temp);
    $(`#d`+i+`-icon`).html(weather[i].icon);
    $(`#d`+i+`-hum`).text(weather[i].hum);
    $(`#d`+i+`-date`).html(weather[i].date);
    $(`#d`+i+`-icon`).attr("src",weather[i].icon);
}
}

function showCityList(cityList) {  //displays the list of cities chosen in the past
    var varText = "";
    for (var i = 0; i < cityList.length; i++) {
      varText += `<li class="btn list-group-item list-group-item-action d-flex justify-content-between align-items-center" onclick="searchApi('`+cityList[i]+`')">`+cityList[i]+`</li>`;
    }
    $(`#cityListGroup`).html(varText);
}