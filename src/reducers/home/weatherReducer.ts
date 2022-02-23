import {HomeActionTypes} from '../../actions/actionTypes';
import {actionType} from '../../types/actionType';
import {Forecast, ForecastData, WeatherData} from '../../types/Home/weather';
import {CustomState, OptionsState} from '../../types/responseType';

const initialState: WeatherData<OptionsState> & ForecastData = {
  location: {},
  weather: {},
  forecast: {},
  isFetchingCurrentMethod: undefined,
  errorCurrentMethod: undefined,
  isFetchingForecastMethod: undefined,
  errorForecastMethod: undefined,
} as WeatherData<OptionsState> & ForecastData;

function homeReducer(state = initialState, action: actionType) {
  switch (action.type) {
    case HomeActionTypes.SetCurrentWeather:
      return {
        ...state,
        location: action.payload.location,
        weather: action.payload.weather,
      };
    case HomeActionTypes.IsFetchingCurrentMethod:
      return {
        ...state,
        isFetchingCurrentMethod: action.payload,
      };
    case HomeActionTypes.SetForecastWeather:
      return {
        ...state,
        forecast: action.payload.forecast,
      };
    case HomeActionTypes.IsFetchingForecastMethod:
      return {
        ...state,
        isFetchingForecastMethod: action.payload,
      };
    case HomeActionTypes.ClearCurrent:
      return initialState;
    default:
      return state;
  }
}

export default homeReducer;
