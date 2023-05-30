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

    return {location, tempC, feelsTempC, tempF, feelsTempF, weatherDescription, humidity, windKph, windMph};
}

const getWeather = async (city) => {
    const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=6906dfa564e940bfbc864752232105&q=${city.replace(/ /g, '\\')}`, {mode: 'cors'});
    const weather = await result.json();
    getWeatherInfo(weather);
}



getWeather('Salt Lake City');
