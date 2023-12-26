import { createSlice } from "@reduxjs/toolkit";
import { weatherAPI } from "../API/API";

const weatherState = {
  temperature: [],
  city: null,
  isLoading: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: weatherState,
  reducers: {
    addWeather: (state, action) => {
      const temperature = action.payload
      state.temperature = temperature
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setCity: (state, action) => {
      state.city = action.payload
    }
  }
});

export const addWeatherThunk = (city) => async (dispatch) => {
  const response = await weatherAPI.getCityWeather(city)
  dispatch(setIsLoading(false))
  dispatch(addWeather(response.data.list))
  dispatch(setCity(city))
  dispatch(setIsLoading(true))
};

export const { addWeather, setIsLoading, setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
