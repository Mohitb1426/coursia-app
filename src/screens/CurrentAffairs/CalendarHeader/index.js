import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ErrorHandler from '../../../common/ErrorHandler';
import SvgIcon from '../../../common/SvgIcon';
import { getRandomID } from '../../../utilities';
import CalendarListItem from './CalendarListItem';
import styles from './style';
import { setOpenPicker } from '../actionCurrentAffairs';
import { FOUR } from '../ConstantCurrentAffairs';

function CalendarHeader({ items, setDate }) {
  const dispatch = useDispatch();
  const [dateData, setDateData] = useState([]);
  const currentAffairsState = useSelector((state) => state.reducerCurrentAffairs);
  const { currentDate, currentDateIndex } = currentAffairsState;
  const renderItem = ({ item }) => {
    return (
      <CalendarListItem date={item.date} isSelected={currentDate === item.date} setDate={setDate} />
    );
  };
  useEffect(() => {
    const dateCollection = items.length > FOUR
      ? items.slice(currentDateIndex, FOUR + currentDateIndex) : items;
    setDateData(dateCollection);
  }, []);
  return (
    <ErrorHandler componentName="CalendarHeader">
      <View style={styles.mainContainer}>
        <FlatList
          style={styles.flatListStyle}
          data={dateData}
          renderItem={renderItem}
          keyExtractor={() => getRandomID()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(setOpenPicker(true));
          }}
        >
          <SvgIcon.CalendarIcon />
        </TouchableOpacity>
      </View>
    </ErrorHandler>
  );
}

CalendarHeader.propTypes = {
  items: PropTypes.array,
  setDate: PropTypes.func,
};

export default CalendarHeader;
