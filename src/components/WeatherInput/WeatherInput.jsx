import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addWeatherThunk } from "../../redux/weatherReducer"
import c from "./WeatherInput.module.scss"
import weather from "../../common/icon/cloudy.png"

const WeatherInput = () => {
   const dispatch = useDispatch()
   const [city, setCity] = useState()

   const onSubmit = (cityValue) => {
      dispatch(addWeatherThunk(cityValue.cityValue))

   }
   const { handleSubmit, register } = useForm()

   return (
      <div className={c.input_wrapper}>
         <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
            <div className={c.input_wrapper}>
               <input autoComplete="off"
                  {...register('cityValue', { onChange: (e) => setCity(e.target.value) }, { value: city })} className={c.input} />
            </div>
            <div className={c.btn_wrapper}>
               <input type='image' src={weather} className={c.img} />
            </div>
         </form>
      </div>
   )
}

export default WeatherInput;