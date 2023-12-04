import React, {
  useContext, useEffect, useState,
} from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';
import styles from './style';
import { LocalizationContext } from '../../common/LocalizationProvider';
import Loader from '../../components/Loader';
import { ComponentHeader, CustomModal, EmptyListComponent } from '../../components';
import ErrorHandler from '../../common/ErrorHandler';
import CalendarHeader from './CalendarHeader';
import {
  getCurrentAffairsData,
  setCurrentDate,
  setCurrentDateIndex,
  setInitialCurrentAffairData,
  setOpenPicker,
  setDefaultDate,
  getCurrentAffairsDownloadData,
  getAvailableDatesData,
  setSelectedDate,
  setAutoCurrentIndex,
  errorCurrentAffairsData,
  setCurrentAffairsData,
} from './actionCurrentAffairs';
import CurrentAffairsSwiperCard from './CurrentAffairsSwiperCard';
import useThemedStyles from '../../hooks/useThemedStyles';
import { Routes } from '../../routes/Routes';
import useBackButton from '../../hooks/useBackButton';
import { ThemeContext } from '../../common/ThemeProvider';

function CurrentAffairs({ route }) {
  const { appTheme } = useContext(ThemeContext);
  const Styles = useThemedStyles(styles);
  const navigation = useNavigation();
  const { initialIndex, initialID } = route.params;
  const currentAffairsState = useSelector((state) => state.reducerCurrentAffairs);
  const [isParam, setIsParam] = useState(false);
  const {
    isLoading,
    currentAffairsData,
    isPickerOpen,
    availableDates,
    selectedDate,
  } = currentAffairsState;
  const isData = currentAffairsData.length > 0;
  const { translations, appLanguage } = useContext(LocalizationContext);
  const dispatch = useDispatch();
  useEffect(() => {
    const isTamil = appLanguage === 'tn' ? 0 : 1;
    dispatch(getAvailableDatesData());
    dispatch(getCurrentAffairsDownloadData({ isTamil }));
    dispatch(errorCurrentAffairsData(''));
  }, [initialIndex, initialID]);

  const [filterDisabledDates, setFilterDisabledDate] = useState({});

  const filterOutDisabledDates = () => {
    const allDates = [];
    const endDate = moment(availableDates[0], 'DD-MM-YYYY').toDate();
    const startDate = moment(availableDates[availableDates.length - 1], 'DD-MM-YYYY').toDate();
    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      allDates.push(moment(d).format('DD-MM-YYYY'));
    }
    const result = allDates.filter((code) => !availableDates.includes(code));
    let objString = '';
    result.forEach((item) => {
      objString += `"${moment(item, 'DD-MM-YYYY').format(
        'YYYY-MM-DD',
      )}" : {"disabled": true, "disableTouchEvent": true ,"dotColor": "green"},`;
    });
    const obj = `{${objString.substring(0, objString.length - 1)}}`;
    setFilterDisabledDate(JSON.parse(obj));
  };

  const setDate = (date, index) => {
    dispatch(setSelectedDate(date));
    const dateIndex = availableDates.indexOf(date);
    dispatch(setCurrentDateIndex(dateIndex));
    dispatch(setAutoCurrentIndex(date));
    dispatch(setCurrentDate(date));
    dispatch(getCurrentAffairsData({ date, index }));
  };

  useEffect(() => {
    return () => {
      const currentDateAfterUnmount = availableDates[0];
      dispatch(setCurrentDate(currentDateAfterUnmount));
      dispatch(setDefaultDate());
      dispatch(setCurrentAffairsData([]));
    };
  }, []);

  useEffect(() => {
    const tempCurrentAffairsData = [];
    const currentDateValue = typeof (initialIndex) === 'string' ? initialIndex : '';
    availableDates.forEach((element) => {
      const isCurrent = tempCurrentAffairsData.length === 0;
      tempCurrentAffairsData.push({
        date: element,
        isSelected: isCurrent,
        data: [],
      });
    });
    filterOutDisabledDates();
    dispatch(setCurrentDate(availableDates[0]));
    dispatch(setSelectedDate(availableDates[0]));
    if (currentAffairsData[0]?.data?.length === 0 || currentAffairsData.length === 0) {
      dispatch(setInitialCurrentAffairData(tempCurrentAffairsData));
    }
    if (currentDateValue !== '') {
      dispatch(setInitialCurrentAffairData(tempCurrentAffairsData));
    }
    dispatch(setAutoCurrentIndex(initialIndex));
    setIsParam(!isParam);
  }, [availableDates]);

  const onDayClick = (day) => {
    const calenderSelectedDate = moment(day.dateString, 'YYYY-MM-DD').format('DD-MM-YYYY');
    dispatch(setSelectedDate(calenderSelectedDate));
    dispatch(getCurrentAffairsData({ date: calenderSelectedDate }));
    setDate(calenderSelectedDate, 0);
    dispatch(setOpenPicker(false));
  };
  const today = new Date().toISOString().slice(0, 10);
  const customStyles = {
    [today]: {
      color: '#1A73E8', startingDay: true, endingDay: true, textColor: '#fff',
    },
    [selectedDate]: {
      color: '#2AA87D', startingDay: true, endingDay: true, textColor: '#fff',
    },

  };
  const navigateBack = () => {
    navigation.navigate(Routes.SCREEN_DRAWER);
    return true;
  };
  useBackButton(() => {
    navigateBack();
    return true;
  });
  return (
    <ErrorHandler componentName="CurrentAffairs">
      <SafeAreaView style={Styles.mainContainer}>
        <ComponentHeader
          goBack={navigateBack}
          headerText={translations.TEXT_DAILY_CURRENT_AFFAIRS}
        />
        {isLoading ? (
          <Loader show={isLoading} />
        ) : (
          <View style={Styles.mainHeaderContainer}>
            {isData ? (
              <>
                <View style={Styles.headerSubContainer}>
                  <CalendarHeader items={currentAffairsData} setDate={setDate} />
                </View>
                <CurrentAffairsSwiperCard
                  index={0}
                  setDate={setDate}
                  initialIndex={initialIndex}
                  initialId={initialID}
                  isParam={isParam}
                />
              </>
            ) : <EmptyListComponent />}
            {isPickerOpen && (
              <CustomModal
                borderBottomLeftRadius={0}
                borderBottomRightRadius={0}
                visible={isPickerOpen}
                markingType="period"
                alignBottom={false}
                onBackdropPress={() => {
                  dispatch(setOpenPicker(false));
                }}
                onModalHide={() => {
                  dispatch(setOpenPicker(false));
                }}
              >
                <Calendar
                  theme={{
                    backgroundColor: appTheme.PRIMARY_BACKGROUND_01,
                    calendarBackground: appTheme.PRIMARY_BACKGROUND_01,
                    textSectionTitleColor: appTheme.TEXT_COLOR_HEADING,
                    arrowColor: appTheme.TEXT_COLOR_HEADING,
                    monthTextColor: appTheme.TEXT_COLOR_HEADING,
                    indicatorColor: appTheme.TEXT_COLOR_HEADING,
                    textDayStyle: appTheme.TEXT_COLOR_HEADING,
                    todayTextColor: '#fff',
                    dayTextColor: appTheme.DATE_PRIMARY_COLOR,
                    textDisabledColor: appTheme.CALENDER_DISABLED_TEXT_01,
                  }}
                  current={selectedDate}
                  style={Styles.calenderStyle}
                  markingType="period"
                  maxDate={moment(availableDates[0], 'DD-MM-YYYY').format('YYYY-MM-DD')}
                  minDate={moment(availableDates[availableDates.length - 1], 'DD-MM-YYYY').format(
                    'YYYY-MM-DD',
                  )}
                  markedDates={{
                    ...filterDisabledDates,
                    ...customStyles,
                  }}
                  onDayPress={(day) => onDayClick(day)}
                  disableAllTouchEventsForDisabledDay
                />
              </CustomModal>
            )}
          </View>
        )}
      </SafeAreaView>
    </ErrorHandler>
  );
}

CurrentAffairs.propTypes = {
  route: PropTypes.object,
};

export default CurrentAffairs;
