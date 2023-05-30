console.log('weathaaaaaa')

const getWeatherInfo = (prom) => {
    const location = prom.location.name;
    const tempC = `${prom.current.temp_c}°C`;
    const feelsTempC = `${prom.current.feelslike_c}°C`;
    const tempF = `${prom.current.temp_f}°F`;
    const feelsTempF = `${prom.current.feelslike_f}°F`;
    const weatherDescription = prom.current.condition.text;
    const humidity = `${prom.current.humidity}%`;
    const windKph = `${prom.current.wind_kph} km/h`;
    const windMph = `${prom.current.wind_mph} m/h`;
    const weatherIcon = prom.current.condition.icon;

    return {location, tempC, feelsTempC, tempF, feelsTempF, weatherDescription, humidity, windKph, windMph, weatherIcon};
}

const displayWeather = (obj) => {
    const cityName = document.querySelector('.city-name');
    const tempReal = document.querySelector('.temp-real');
    const weatherDesc = document.querySelector('.weather-desc');
    const weatherIcon = document.querySelector('.desc-icon');
    const tempFeel = document.querySelector('.temp-feel');
    const weatherHumidity = document.querySelector('.humidity');
    const weatherWind = document.querySelector('.wind');

    cityName.innerText = obj.location;
    tempReal.innerText = obj.tempC;
    weatherDesc.innerText = obj.weatherDescription;
    weatherIcon.src = obj.weatherIcon;
    tempFeel.innerText = obj.feelsTempC;
    weatherHumidity.innerText = obj.humidity;
    weatherWind.innerText = obj.windKph;    
}

const getWeather = async (city) => {
    const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=6906dfa564e940bfbc864752232105&q=${city.replace(/ /g, '\\')}`, {mode: 'cors'});
    const weather = await result.json();
    const cityWeather = getWeatherInfo(weather);
    displayWeather(cityWeather);  
}

const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    const searchValue = document.querySelector('#city').value;
    getWeather(searchValue);
})
