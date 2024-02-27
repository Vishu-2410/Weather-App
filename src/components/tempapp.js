import React, { useEffect, useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { LuCloudRainWind } from "react-icons/lu";
import './tempapp.css';
const Temp = () => {
    let apiKey = "8579722f47c3daef60b78b5807206c1d";
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`;
            const response = await fetch(url);
            const resJson = await response.json();

            setCity(resJson.main);
        }

        fetchApi();
    }, [search, apiKey])
    return (
        <>
            <div className="container">
                <div className="top-bar">
                    <input type="search" className="inputField" onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
                </div>
                {!city ? (
                    <p className="errorMsg">No Data Found</p>
                ) : (
                    <div>
                        <div className="weather-image">
                            <TiWeatherPartlySunny className="icon" />
                        </div>
                        <div className="weather-temp">
                            {city.temp} °C<br/>
                             Max:{city.temp_max}°C | Min:{city.temp_min}°C
                        </div>
                        <div className="weather-location"><h1>{search}</h1></div>
                        <div className="data-container">
                            <div className="element">
                                <WiHumidity className="icon" />
                                <div className="data">
                                    <div className="humidity-percent">{city.humidity}%</div>
                                    <div className="text" >Humidity</div>
                                </div>
                            </div>
                            <div className="element">
                                <LuCloudRainWind className="icon" />
                                <div className="data">
                                    <div className="wind-percent">{city.wind}km/h</div>
                                    <div className="text">Wind Speed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Temp;