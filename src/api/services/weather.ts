import Config from 'react-native-config';
import buildApi from '../api';
import {URLS} from './config';
const {weather} = URLS;

const createApi = () => {
  // @ts-ignore
  const {post} = buildApi({baseURL: Config.WEATHER_API_URL});
  return {
    currentWeather: (data: any, config = {}) =>
      post(weather.current, data, config),
    forecastWeather: (data: any, config = {}) =>
      post(weather.forecast, data, config),
  };
};

export default createApi;
