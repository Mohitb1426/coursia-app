import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ErrorHandler from '../../../../common/ErrorHandler';
import SvgIcon from '../../../../common/SvgIcon';
import styles from './style';
import { getFieldsInDate } from '../../../../utilities';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function CalendarListItem({ date, isSelected, setDate }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  const day = getFieldsInDate(date, 'date', translations);
  const month = getFieldsInDate(date, 'month', translations);

  return (
    <ErrorHandler componentName="CalendarListItem">
      <TouchableOpacity
        onPress={() => {
          setDate(date, 0);
        }}
      >
        <View style={Styles.topVerticalContainer}>
          <View
            style={[
              Styles.innerDateCard,
              isSelected ? Styles.backgroundGreen06 : Styles.backgroundGreenColor,
            ]}
          >
            <Text
              style={[
                Styles.dateStyle,
                isSelected ? Styles.colorWhiteColor : Styles.colorGreenCOlor,
              ]}
            >
              {day}
            </Text>
            <Text
              style={[
                Styles.monthStyle,
                isSelected ? Styles.colorWhiteColor : Styles.colorGreenCOlor,
              ]}
            >
              {month}
            </Text>
          </View>
          {isSelected ? (
            <View style={Styles.triangleStyle}>
              <SvgIcon.Triangle />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </ErrorHandler>
  );
}

CalendarListItem.propTypes = {
  date: PropTypes.string,
  isSelected: PropTypes.bool,
  setDate: PropTypes.func,
};

export default CalendarListItem;
