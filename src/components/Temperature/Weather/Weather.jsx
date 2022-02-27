import Cloud from "./Cloud/Cloud"
import c from "./Weather.module.scss"

const Weather = (props) => {

   return (
      <div className={c.weather}>
         <div className={c.cloud}>
            <Cloud cloud={props.cloud} />
         </div>
         <div className={c.info}>
            <div className={c.temperature}>
               {props.temperature.toFixed(2)}<span className={c.celsia}>℃</span>
            </div>
            <div className={c.windy}>
               {props.wind}<span> m/s </span>
            </div>
         </div>
         <div className={c.data}>
            {props.data}
         </div>
      </div>
   )
}

export default Weather