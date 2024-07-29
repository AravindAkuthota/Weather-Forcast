export function renderCurrentWeather(weather) {
    const currentWeatherContainer = document.getElementById('current-weather');
    currentWeatherContainer.innerHTML = `
        <h2>Current Weather in ${weather.location.name}</h2>
        <p>Temperature: ${weather.current.temp_c}°C</p>
        <p>Humidity: ${weather.current.humidity}%</p>
        <p>Conditions: ${weather.current.condition.text}</p>
        <img src="https:${weather.current.condition.icon}" alt="${weather.current.condition.text}">
    `;
}

export function renderForecast(forecast) {
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '<h2>5-Day Forecast</h2>';
    const forecastList = document.createElement('div');
    forecast.forecast.forecastday.forEach((day) => {
        const forecastItem = document.createElement('div');
        forecastItem.innerHTML = `
            <p>${new Date(day.date).toLocaleDateString()}</p>
            <p>Max Temp: ${day.day.maxtemp_c}°C</p>
            <p>Min Temp: ${day.day.mintemp_c}°C</p>
            <p>Conditions: ${day.day.condition.text}</p>
            <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}">
        `;
        forecastList.appendChild(forecastItem);
    });
    forecastContainer.appendChild(forecastList);
}
