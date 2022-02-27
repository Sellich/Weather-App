export const selectGetTemperature = (state) => {
   return state.weather.temperature
}

export const selectGetCity = (state) => {
   return state.weather.city
}
export const selectIsLoading = (state) => {
   return state.weather.isLoading
}