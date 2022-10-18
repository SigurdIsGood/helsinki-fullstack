import axios from 'axios'
import { useState, useEffect } from 'react'

const DetailedInfo = ({country}) => {

    const langList = Object.values(country.languages)
    const [weatherInfo, setWeatherInfo] = useState({main:{temp:''},wind:{speed:''},weather:[{icon:''}]})
    const api_key = process.env.REACT_APP_API_KEY
    
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}&units=metric`)
            .then( response => setWeatherInfo(response.data))
    },[])

    return (
        <>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <br/>
            <h2>languages:</h2>
            <ul>
                {langList.map((lang) => {
                    return (<li key={lang}>{lang}</li>)
                })}
            </ul>
            <img style={{width:200}} src={country.flags.png} />
            <h2>weather in {country.capital}</h2>
            <div>temperature {weatherInfo.main.temp} Celcius</div>
            <img style={{width:100}} src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} />
            <div>wind {weatherInfo.wind.speed} m/s</div>
        </>
    )
}

export default DetailedInfo