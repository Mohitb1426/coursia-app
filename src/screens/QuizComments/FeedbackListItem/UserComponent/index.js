import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import moment from 'moment-timezone';
import ErrorHandler from '../../../../common/ErrorHandler';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import styles from './styles';
import { ASK_DOUBT_CONSTANTS } from '../../../AskDoubtScreen/constantsScreenAskDoubt';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function ComponentUserDetails({
  name = '',
  firstName = '', lastName = '', time, status = '0', courseName,
}) {
  const Styles = useThemedStyles(styles);
  const TAG = 'ComponentUserDetails';

  const acronym = `${firstName}${lastName}`;
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
          <View style={Styles.nameLogoStyle}>
            <Text style={Styles.nameLogoTextStyle}>{acronym}</Text>
          </View>
        </View>
        <View style={Styles.subContainerTwo}>
          <Text style={Styles.textStyle}>{name}</Text>
          <View style={Styles.questionStatus}>
            <View style={Styles.bulletContainer}>
              <Text style={Styles.courseNameStyle}>{courseName}</Text>
            </View>
            <View style={Styles.bulletContainer}>
              <View style={Styles.bulletDesign} />
              <Text style={Styles.dateStyle}>{formattedDate}</Text>
            </View>
            <View style={Styles.bulletContainer}>
              <View style={Styles.bulletDesign} />
              <Text
                style={
                  status === ASK_DOUBT_CONSTANTS.RESOLVED
                    ? Styles.subHeadingResolvedStyle
                    : Styles.subHeadingUnresolvedStyle
                }
              >
                {status === ASK_DOUBT_CONSTANTS.RESOLVED
                  ? translations.QUIZ_RESOLVED
                  : translations.QUIZ_UNRESOLVED}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ErrorHandler>
  );
}

ComponentUserDetails.propTypes = {
  name: PropTypes.any,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  time: PropTypes.string,
  status: PropTypes.bool,
  courseName: PropTypes.string,
};

export default ComponentUserDetails;
