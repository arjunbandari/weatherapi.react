import { useState } from "react";
import SearchBox from "./searchBox";
import WeatherResult from "./WeatherResult";
import "./App.css";

export default function App() {
    const [weatherData, setWeatherData] = useState(null);

    return (
        <div className="app-container">
            <h1>Weather App</h1>
            <SearchBox setWeatherData={setWeatherData} />
            {weatherData && <WeatherResult weatherData={weatherData} />}
        </div>
    );
}
