import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import ComponentProgressBar from './Components/ComponentProgressbar/ComponentProgressBar';
import styles from './StyleComponentCourseListItem';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function ComponentCourseListItem({ name, coursePercentage, getMyCoursesData }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.subContainer}>
        <View style={Styles.headingContainer}>
          <Text style={Styles.headingText}>{name}</Text>
        </View>
        <View style={Styles.progressAndButtonContainer}>
          <View style={Styles.progressBar}>
            <ComponentProgressBar percentage={coursePercentage} />
            <Text style={Styles.progressText}>{`${coursePercentage}%`}</Text>
          </View>
          <View style={Styles.buttonContainer}>
            <TouchableOpacity
              onPress={getMyCoursesData}
              style={Styles.goToCourseButton}
            >
              <Text style={Styles.goToButtonText}>{translations.GO_TO_COURSE}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

ComponentCourseListItem.propTypes = {
  name: propTypes.string,
  coursePercentage: propTypes.number,
  getMyCoursesData: propTypes.any,
};

export default ComponentCourseListItem;
