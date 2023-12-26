import c from "./Temperature.module.scss";
import { useSelector } from "react-redux";
import { selectGetCity, selectGetTemperature } from "../../redux/selectWeather";
import Weather from "./Weather/Weather";


const Temperature = () => {
  const temperature = useSelector(selectGetTemperature).map((item) =>
    <Weather temperature={item.main.temp - 273.15}
      key={item.dt}
      wind={item.wind.speed}
      cloud={item.clouds.all}
      data={item.dt_txt} />
  );

  const city = useSelector(selectGetCity);

  return (
    <div>
      <div className={c.city}>
        {city}
      </div>
      <div className={c.temperature}>
        {temperature}
      </div>
    </div>
  )
};

export default Temperature;
