console.log('weathaaaaaa')
// make an object with all the necessary information
const getWeatherInfo = (prom) => {
    console.log(prom)
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
    const weatherCode = prom.current.condition.code;

    return {location, tempC, feelsTempC, tempF, feelsTempF, weatherDescription, humidity, windKph, windMph, weatherIcon, weatherCode};
}
// display the information about the weather
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
// change color theme depending on weather
const changeColorTheme = (obj) => {
    const websiteTheme = document.documentElement;
    if (obj.weatherCode === 1000) {
        websiteTheme.style.setProperty('--header-n-text', '#146152');
        websiteTheme.style.setProperty('--text-in-header-btn', '#FFEC5C');
        websiteTheme.style.setProperty('--body-background', '#B4CF66');
        websiteTheme.style.setProperty('--search-border', '2px solid #347355');
        websiteTheme.style.setProperty('--weather-card', '#FFEC5C');
    } else {
        websiteTheme.style.setProperty('--header-n-text', '#364559');
        websiteTheme.style.setProperty('--text-in-header-btn', '#CEDEF2');
        websiteTheme.style.setProperty('--body-background', '#566D8C');
        websiteTheme.style.setProperty('--search-border', '2px solid #566D8C');
        websiteTheme.style.setProperty('--weather-card', '#9CB6D9');
    }
}
// fetch the weather from WeatherAPI
const getWeather = async (city) => {
    try {
        const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=6906dfa564e940bfbc864752232105&q=${city.replace(/ /g, '\\')}`, {mode: 'cors'});
        const weather = await result.json();
        const cityWeather = getWeatherInfo(weather);
        displayWeather(cityWeather);
        changeColorTheme(cityWeather);
    } catch (error) {
        alert('Please, enter a city name!');
    }
}

// make the button work
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    const searchValue = document.querySelector('#city').value;
    getWeather(searchValue);
})
// also search on 'Enter'
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const searchValue = document.querySelector('#city').value;
        getWeather(searchValue);
    }
})