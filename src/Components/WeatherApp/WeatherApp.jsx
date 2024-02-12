import React, { useEffect, useState } from "react";
import "./WeatherApp.css"
import clear from '../Assets/clear.png';
import cloud from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import humidity from '../Assets/humidity.png';
import rain from "../Assets/rain.png";
import search from "../Assets/search.png";
import snow from '../Assets/snow.png';
import wind from "../Assets/wind.png";



const WeatherApp = () => {

    let apikey ="cc9d0c858affdb92e9af804bd6850591"
    const [wicon,setWicon] = useState(cloud)
    useEffect(() => {
        search()
      });

    const search = async () =>{
        try{
            let element = document.getElementsByClassName("cityInput")
            if(element[0].value === ""){
                element[0].value = "Budapest"
            }
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`;
        
            let response = await fetch(url);
            let data = await response.json();
            const para = document.getElementsByClassName("para")
            const wind = document.getElementsByClassName("wind")
            const temp = document.getElementsByClassName("weather-temp")
            const location = document.getElementsByClassName("weather-location")
            
            para[0].innerHTML = data.main.humidity + " %";
            wind[0].innerHTML = data.wind.speed + "km/h";
            temp[0].innerHTML = Math.floor(data.main.temp) + "°C";
            location[0].innerHTML = data.name;

            if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
                setWicon(clear);
            }
            else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
                setWicon(cloud);
            }else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
                setWicon(drizzle);   
            }else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
                setWicon(drizzle);  
            }else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
                setWicon(rain);
            }else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
                setWicon(rain);
            }else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
                setWicon(snow);
            }else{
                setWicon(clear)
            }




            element[0].value = ""
        }
        catch(err){
            alert("Próbáld újra")
            console.log(err)
        }
    }


    return(
        <>
            <div className="container">
                <div className="top-bar">
                    <input type="text" className="cityInput" placeholder="Search"></input>
                    <div className="search" onClick={()=>{search()}}>
                        <img src={search} alt=""></img>
                    </div>
                </div>

                    <div className="weather-img">
                        <img src={wicon} alt=""></img>
                    </div>
                    <div className="weather-temp">
                        
                    </div>
                    <div className="weather-location"></div>
                    <div className="data-container">



                        <div className="element">
                            <img src={humidity} alt="" className="icon"></img>
                            <div className="data">
                                <div className="para">
                                    
                                </div>
                                <div className="text">Páratartalom</div>

                            </div>
                        </div>



                        <div className="element">
                            <img src={wind} alt="" className="icon"></img>
                            <div className="data">
                                <div className="wind">
                                    
                                </div>
                                <div className="text">Szélsebesség</div>

                            </div>
                        </div>

                    </div>
            </div>
        </>
    )
}

export default WeatherApp