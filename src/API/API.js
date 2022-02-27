import axios from "axios";

const KEY = "ccc450bf7f5659638f23c5a99b5ff2bb"

export const weatherAPI = {
   getCityWeather(city) {
      return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${KEY}`)
   }
}