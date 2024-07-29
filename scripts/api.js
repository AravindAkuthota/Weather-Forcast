const API_KEY = '9e7bf87a5ede419d973174504242807'; // Replace with your actual API key
const BASE_URL = 'https://api.weatherapi.com/v1';

export async function fetchWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
        if (!response.ok) {
            const errorDetails = await response.text(); // Get more details about the error
            throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}. Details: ${errorDetails}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch weather:', error);
        return null;
    }
}

export async function fetchForecast(city) {
    try {
        const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5`);
        if (!response.ok) {
            const errorDetails = await response.text(); // Get more details about the error
            throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}. Details: ${errorDetails}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch forecast:', error);
        return null;
    }
}
