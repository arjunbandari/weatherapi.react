import "./WeatherResult.css";

export default function WeatherResult({ weatherData }) {
    return (
        <div className="weather-container">
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
            <p><strong>Min Temp:</strong> {weatherData.main.temp_min}°C</p>
            <p><strong>Max Temp:</strong> {weatherData.main.temp_max}°C</p>
            <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
        </div>
    );
}
