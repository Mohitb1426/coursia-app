import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import moment from 'moment-timezone';
import ErrorHandler from '../../common/ErrorHandler';
import { LocalizationContext } from '../../common/LocalizationProvider';
import styles from './style';
import useThemedStyles from '../../hooks/useThemedStyles';

export function CustomUserDetails({
  name = '', time, status, courseName, userName, image,
}) {
  const Styles = useThemedStyles(styles);
  const TAG = 'CustomUserDetails';

  const { translations } = useContext(LocalizationContext);

  let formattedDate = '';
  if (time !== '') {
    const d = moment(time);
    formattedDate = d.fromNow(true);
  }

  return (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.mainContainer}>
        <View style={Styles.subContainerOne}>
          {
          !image ? (
            <View style={Styles.nameLogoStyle}>
              <Text style={Styles.nameLogoTextStyle}>{name}</Text>
            </View>
          ) : (
            <View>
              <Image
                source={{ uri: image }}
                style={Styles.userImageStyle}
              />
            </View>
          )
        }

        </View>
        <View style={Styles.subContainerTwo}>
          <Text style={Styles.textStyle}>{userName}</Text>
          <View style={Styles.questionStatus}>
            {courseName ? (
              <View style={Styles.bulletContainer}>
                <View style={Styles.bulletDesign} />
                <Text style={Styles.courseNameStyle}>{courseName}</Text>
              </View>
            ) : null}
            <View style={Styles.bulletContainer}>
              {/* <View style={Styles.bulletDesign} /> */}
              <Text style={Styles.dateStyle}>{formattedDate}</Text>
            </View>
            <View style={Styles.bulletContainer}>
              <View style={Styles.bulletDesign} />
              <Text
                style={Number(status) === 1
                  ? Styles.subHeadingResolvedStyle : Styles.subHeadingUnresolvedStyle}
              >
                {Number(status) === 1 ? translations.QUIZ_RESOLVED : translations.QUIZ_UNRESOLVED}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ErrorHandler>
  );
}

CustomUserDetails.propTypes = {
  name: PropTypes.any,
  time: PropTypes.string,
  status: PropTypes.any,
  courseName: PropTypes.string,
  userName: PropTypes.string,
  image: PropTypes.string,
};
