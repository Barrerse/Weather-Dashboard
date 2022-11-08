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

var baseUrl = "https://api.openweathermap.org"


function get5DaysForecast(apiResponse) {
    return apiResponse.list.reduce(function(days,current) {
        var currentDate=current.dt_txt.split(" ")[0];
        if(!days.find(function(day) {
            return day.dt_txt.includes(currentDate);
        })) {
            return [...days,current];
        }
        return days;
    },[])
}
console.log (currentDate);

var = deeznuts

localStorage.setItem()