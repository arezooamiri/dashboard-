import axios from "axios";

interface WeatherResponse{
    current_condition:[
        {
            temp_C:string;
            weatherDesc:[{value:string}]
        }
    ];

}

const fetchWeather= async (city:string): Promise<WeatherResponse> =>{
    const response=await axios.get(`https://wttr.in/${city}?format=j1`);
    return response.data
}

export default fetchWeather;



