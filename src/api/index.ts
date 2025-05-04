import { useQuery } from "@tanstack/react-query";
import { geocodeCity } from "../utils/geocodeCity";






export function useWeeklyWeather(city:string){
    const apiKey=import.meta.env.REACT_APP_OWM_KEY!;
    

    return useQuery({
        queryKey:['weather',city],
        queryFn:async()=>{
            const{lat,lon}=await geocodeCity(city,apiKey);
           
            const res=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`)
            const data=await res.json();
            return data.daily.slice(0,7)
        },
        enabled: !!city,
        staleTime: 1000 * 60 * 10,
        
    })

}
