import './weather-app.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { WiHumidity } from "react-icons/wi";
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import logo1 from "../../assets/creared_sky.png";
import logo2 from '../../assets/few_clouds.png';
import logo3 from '../../assets/scatterd.jpg';
import logo4 from "../../assets/brocken.png";
import logo9 from '../../assets/slower_rain.png';
import logo10 from '../../assets/rain.png';
import logo11 from "../../assets/thunder.png";
import logo13 from '../../assets/snow.png';
import logo50 from '../../assets/mist.png';

const images={
    "01d":logo1,
    "02d":logo2,
    "03d":logo3,
    "04d":logo4,
    "09d":logo9,
    "10d":logo10,
    "11d":logo11,
    "13d":logo13,
    "50d":logo50
}


export function WeatherApp(){
    const [api,setApidata]=useState({temperature:"",windSpeed:"",humidity:"",icons:"",city:""})
    const weather_city=useRef("")
     

    function handleCityChange(e){
        weather_city.current=e.target.value;
    }
    function handleClick(){
        if(weather_city.current===""){
            alert("Please Provide the location");
        }else{
            LoadData(weather_city.current);
        }
    }

    const images={
        "01d":logo1,
        "02d":logo2,
        "03d":logo3,
        "04d":logo4,
        "09d":logo9,
        "10d":logo10,
        "11d":logo11,
        "13d":logo13,
        "50d":logo50
    }
    

    function LoadData(city){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf53bca1e72286408aabda7ba695f148`).then(res=>{
            const icon=images[res.data.weather[0].icon] || logo1
            setApidata({
                temperature:Math.floor(res.data.main.temp/10),
                windSpeed:res.data.wind.speed,
                humidity:res.data.main.humidity,
                icons:icon,
                city:city
            });
        }).catch(()=>{
            alert("This city is not found")
        }
        )
    }
    useEffect(()=>{
        LoadData("bhubaneswar");
    },[])
    return(
        <div className="weather-div">
            <div className="weather-input-container">
                <input type="text" className="weather-input" placeholder="Bhubaneswer" onChange={handleCityChange} />
                <button className="input-btn" onClick={handleClick}> <FontAwesomeIcon icon={faMagnifyingGlass} className="weather-icons" /> </button>
            </div>

            <div className="waether-iamge">
                <img src={api.icons} alt="uploading" />
                <h1 className="weather-temp">{api.temperature}&deg;C</h1>
                <h2 className="weather-location">{api.city}</h2>
            </div>
            <div className="weather-features">
                <div className="weather-feature-box">
                   <FontAwesomeIcon icon={faWind} className="weather-icons icons-extra" />
                   <div className="humidity-percent">
                    <h3>{api.humidity}</h3>
                    <h3>Humidity</h3>
                   </div>
                </div>
                <div className="weather-feature-box">
                   <WiHumidity className="weather-icons icons-extra" />
                   <div className="humidity-percent">
                    <h3>{api.windSpeed}</h3>
                    <h3>Wind Speed</h3>
                   </div>
                </div>
            </div>
             <ul>
             
             </ul>
        </div>  
       
    )
}