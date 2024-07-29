import { fetchWeather, fetchForecast } from './api.js';
import { renderCurrentWeather, renderForecast } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const cityInput = document.getElementById('city-input');

    searchButton.addEventListener('click', async () => {
        const city = cityInput.value;
        if (city.trim() !== '') {
            try {
                const weather = await fetchWeather(city);
                if (weather) {
                    renderCurrentWeather(weather);
                }

                const forecast = await fetchForecast(city);
                if (forecast) {
                    renderForecast(forecast);
                }
            } catch (error) {
                console.error('Error fetching and rendering weather data:', error);
            }
        } else {
            alert('Please enter a city name');
        }
    });
});
