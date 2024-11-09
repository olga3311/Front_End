const apiKey = 'fcfa13f2fe2b4d27851231820240711';
let city = "Munich";
const call = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;


const getWeather = async () => {
    const response = await fetch(call);
    const data = await response.json();
    //console.log(data);

    displayInfoAboutWeather(
        data.location.localtime,
        data.location.name,
        data.current.temp_c,
        data.current.condition.text,
        data.current.condition.icon
    );
}
getWeather();


function displayInfoAboutWeather(localtime, name, temp_c, text, icon) {
    const cityName = document.querySelector('.city-text');
    cityName.textContent = name;

    const tempContent = document.querySelector('.temperature-now-text');
    tempContent.textContent = temp_c;

    const dataContent = document.querySelector("#today");
    dataContent.textContent = localtime;

    const iconContent = document.querySelector("#firstIcon");
    iconContent.src = icon;

    const conditionContent = document.querySelector("#weather");
    conditionContent.textContent = text;
}


const getWeekWeather = async () => {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`);
    const data = await response.json();
    displayInfoAboutWeek(arrayOfDailyForecast(data.forecast.forecastday));
};

getWeekWeather();

function displayInfoAboutWeek(OneWeekForecast) {

    const days = document.querySelectorAll('.day');
    //days.forEach((day) => { })
    for (const [arrElemIndex, divDay] of days.entries()) {
        const img = divDay.querySelector("img");
        img.src = OneWeekForecast[arrElemIndex+1].icon;

        const date = divDay.querySelectorAll(".text-weekDay");
        date[0].innerHTML = OneWeekForecast[arrElemIndex+1].date;
        date[1].innerHTML = OneWeekForecast[arrElemIndex+1].mintemp;

        const tempMax = divDay.querySelector(".temperature-max-text");
        tempMax.innerHTML = OneWeekForecast[arrElemIndex+1].maxtemp;

        // const tempMin = divDay.querySelectorAll(".text-weekDay");
        //tempMin[1].innerHTML = OneWeekForecast[arrElemIndex].mintemp;

    }
};

function arrayOfDailyForecast(forecastDays) {
    //const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const OneDayForecast = (forecastOneDay) => {
        const resultObj = {};
        resultObj.maxtemp = forecastOneDay.day.maxtemp_c;
        resultObj.mintemp = forecastOneDay.day.mintemp_c;
        resultObj.icon = forecastOneDay.day.condition.icon;
        //resultObj.date = forecastOneDay.date;
        //resultObj.date = daysArr[new Date(forecastOneDay.date).getDay()]
        resultObj.date = new Intl.DateTimeFormat(navigator.language, {
            weekday: "short",
          }).format(new Date(forecastOneDay.date));
        //console.log(new Date(forecastOneDay.date).getDay())
        
        return resultObj;
    }
    const OneWeekForecast = forecastDays.map(OneDayForecast);
    return OneWeekForecast;
    //console.log( OneWeekForecast);
};

//  data.forecast.forecastday[0].date,
//  data.forecast.forecastday[0].day.maxtemp_c,
//  data.forecast.forecastday[0].day.mintemp_c,
//  data.forecast.forecastday[0].day.condition.icon,
