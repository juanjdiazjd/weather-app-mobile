import {createAction} from '../types/actionType';
import {WeatherData} from '../types/Home/weather';
import {HomeActionTypes} from './actionTypes';

export type Status = {key: string; value: boolean};

export const HomeActions = {
  getCurrentWeather: () =>
    createAction({type: HomeActionTypes.GetCurrentWeather}),
  setCurrentWeather: (response: WeatherData) =>
    createAction({type: HomeActionTypes.SetCurrentWeather, payload: response}),
  IsFetchingCurrentMethod: (fetching: boolean) =>
    createAction({
      type: HomeActionTypes.IsFetchingCurrentMethod,
      payload: fetching,
    }),
  getForecastWeather: () =>
    createAction({type: HomeActionTypes.GetForecastWeather}),
  setForecastWeather: (response: WeatherData) =>
    createAction({type: HomeActionTypes.SetForecastWeather, payload: response}),
  IsFetchingForecastMethod: (fetching: boolean) =>
    createAction({
      type: HomeActionTypes.IsFetchingForecastMethod,
      payload: fetching,
    }),
};
