import * as React from 'react';
import {
  ScrollView,
  StatusBar,
} from 'react-native';
import Header from '../../components/Header';
import theme from '../../theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {WrapperView} from '../../components/Wrappers/SafeAreaWrapper';
import {ContentView} from '../../components/Wrappers/ContentView';
import {useCallback} from 'react';
import {useShallowEqualSelector} from '../../utils/reduxUtils';
import {useActions} from '../../hooks';
import {HomeActions} from '../../actions/homeActions';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ForecastData, WeatherData} from '../../types/Home/weather';
import {CarouselCustom} from '../../components/Weather/Carousel';
import {OptionsState} from '../../types/responseType';
import {strings} from './strings';
import { icons, RootStackParamList } from '../Home/utils';

const SearchScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'Search'>) => {
  const { getForecastWeather} = useActions({
    getForecastWeather: HomeActions.getForecastWeather,
  });
  const {
    isFetchingCurrentMethod: isFetchingCurrentMethod,
    isFetchingForecastMethod: isFetchingForecastMethod,
    forecast: forecast,
  }: WeatherData<OptionsState> & ForecastData = useShallowEqualSelector(
    state => state.weatherCurrentReducer,
  );

  useFocusEffect(
    useCallback(() => {
      getForecastWeather();
    }, []),
  );

  return (
    <WrapperView>
      <ContentView fullWidth={true}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <StatusBar barStyle="light-content" />
          <Header
            title={strings.search.infoTitle}
            subtitle={strings.search.infoSubtitle}
            withoutBackButton={false}
            secondaryComponent={() => (
              <Icon
                name={icons[route.name]}
                color={theme.colors.primary}
                size={50}
              />
            )}
          />
          <CarouselCustom layout='default' forecast={forecast} />
        </ScrollView>
      </ContentView>
    </WrapperView>
  );
};

export default SearchScreen;
