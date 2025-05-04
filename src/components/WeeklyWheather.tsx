import { useWeeklyWeather } from "../api";

type Props = {
  city: string;
};
const WeeklyWeather: React.FC<Props> = ({ city }) => {
  const { data, isLoading, error } = useWeeklyWeather(city);
  console.log('data weather ',data);
  if (isLoading) return <div>Loading weather...</div>;
  if (error) return <div>Error fetching weather</div>;

  return (
    <div className="w-full rounded-lg bg-[rgb(250,249,255)]">
      <div className="flex gap-4 overflow-x-auto">
        {data?.map((day: any) => (
          <div
            key={day.dt}
            className="min-w-[100px] p-2 border rounded text-center"
          >
            <div className="text-sm">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </div>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="w-12 h-12 mx-auto"
            />
            <div className="text-sm">
              {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°
            </div>
            <div className="text-xs text-gray-600">
              {day.weather[0].description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeeklyWeather;
