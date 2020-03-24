var apiKey = '177cc86131ea9f68eb20cd47fe77370a';
var defaultCityName = 'Kolkata';
var searchCity = "";


var d = new Date();

    //Getting Days Names in a Week
    var WeekDay = new Array(7);
    WeekDay[0] = "Sunday";
    WeekDay[1] = "Monday";
    WeekDay[2] = "Tuesday";
    WeekDay[3] = "Wednesday";
    WeekDay[4] = "Thursday";
    WeekDay[5] = "Friday";
    WeekDay[6] = "Saturday";

    //Getting Month Names in a Year
    var monthly = new Array(12);
    monthly[0] = "JAN";
    monthly[1] = "FEB";
    monthly[2] = "MAR";
    monthly[3] = "APR";
    monthly[4] = "MAY";
    monthly[5] = "JUN";
    monthly[6] = "JUL";
    monthly[7] = "AUG";
    monthly[8] = "SEP";
    monthly[9] = "OCT";
    monthly[10] = "NOV";
    monthly[11] = "DEC";

var day = WeekDay[d.getDay()];
var date = d.getDate();
var month = monthly[d.getMonth()];
var year = d.getFullYear();

document.getElementById('total_date').innerHTML = day+", "+date+" "+month+" "+year;


fetch('https://api.openweathermap.org/data/2.5/weather?q='+defaultCityName+'&appid='+apiKey).then(response => response.json()).then(data => {
            var temperature = data.main.temp;
            var cityName = data.name;
            var countryName = data.sys.country;
            var weatherIcon = data.weather[0].icon;
            var weatherDescription = data.weather[0].description;

          document.getElementById('temperature').innerHTML = Math.round(parseFloat(temperature)-273.15);;
          document.getElementById('cityName').innerHTML = cityName+',';
          document.getElementById('countryName').innerHTML = countryName;
          document.getElementById('weatherIcon').innerHTML = weatherIcon;
          document.getElementById('weatherDescription').innerHTML = weatherDescription.toUpperCase(); 
    });

function getWeather()
{ 
    searchCity = document.getElementById("searchCity");

    if(searchCity.value != "")
    {
        searchCity = searchCity.value;
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchCity+'&appid='+apiKey).then(response => response.json()).then(data => {
            var temperature = data.main.temp;
            var cityName = data.name;
            var countryName = data.sys.country;
            var weatherIcon = data.weather[0].icon;
            var weatherDescription = data.weather[0].description;

          document.getElementById('temperature').innerHTML = Math.round(parseFloat(temperature)-273.15);;
          document.getElementById('cityName').innerHTML = cityName+',';
          document.getElementById('countryName').innerHTML = countryName;
          document.getElementById('weatherIcon').innerHTML = weatherIcon;
          document.getElementById('weatherDescription').innerHTML = weatherDescription.toUpperCase();

        });
    }
    else
    {
           fetch('https://api.openweathermap.org/data/2.5/weather?q='+defaultCityName+'&appid='+apiKey).then(response => response.json()).then(data => {
            var temperature = data.main.temp;
            var cityName = data.name;
            var countryName = data.sys.country;
            var weatherIcon = data.weather[0].icon;
            var weatherDescription = data.weather[0].description;

          document.getElementById('temperature').innerHTML = Math.round(parseFloat(temperature)-273.15);;
          document.getElementById('cityName').innerHTML = cityName+',';
          document.getElementById('countryName').innerHTML = countryName;
          document.getElementById('weatherIcon').innerHTML = weatherIcon;
          document.getElementById('weatherDescription').innerHTML = weatherDescription.toUpperCase(); 
    });
    }
}