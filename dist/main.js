/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log('weathaaaaaa')\n\nconst getWeatherInfo = (prom) => {\n    const location = prom.location.name;\n    const tempC = `${prom.current.temp_c}°C`;\n    const feelsTempC = `${prom.current.feelslike_c}°C`;\n    const tempF = `${prom.current.temp_f}°F`;\n    const feelsTempF = `${prom.current.feelslike_f}°F`;\n    const weatherDescription = prom.current.condition.text;\n    const humidity = `${prom.current.humidity}%`;\n    const windKph = `${prom.current.wind_kph} km/h`;\n    const windMph = `${prom.current.wind_mph} m/h`;\n    const weatherIcon = prom.current.condition.icon;\n\n    return {location, tempC, feelsTempC, tempF, feelsTempF, weatherDescription, humidity, windKph, windMph, weatherIcon};\n}\n\nconst displayWeather = (obj) => {\n    const cityName = document.querySelector('.city-name');\n    const tempReal = document.querySelector('.temp-real');\n    const weatherDesc = document.querySelector('.weather-desc');\n    const weatherIcon = document.querySelector('.desc-icon');\n    const tempFeel = document.querySelector('.temp-feel');\n    const weatherHumidity = document.querySelector('.humidity');\n    const weatherWind = document.querySelector('.wind');\n\n    cityName.innerText = obj.location;\n    tempReal.innerText = obj.tempC;\n    weatherDesc.innerText = obj.weatherDescription;\n    weatherIcon.src = obj.weatherIcon;\n    tempFeel.innerText = obj.feelsTempC;\n    weatherHumidity.innerText = obj.humidity;\n    weatherWind.innerText = obj.windKph;    \n}\n\nconst getWeather = async (city) => {\n    const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=6906dfa564e940bfbc864752232105&q=${city.replace(/ /g, '\\\\')}`, {mode: 'cors'});\n    const weather = await result.json();\n    const cityWeather = getWeatherInfo(weather);\n    displayWeather(cityWeather);  \n}\n\nconst searchBtn = document.querySelector('.search-btn');\nsearchBtn.addEventListener('click', () => {\n    const searchValue = document.querySelector('#city').value;\n    getWeather(searchValue);\n})\n\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;