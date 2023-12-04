/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import {
  View, Text, Image,
} from 'react-native';
import propTypes from 'prop-types';
import moment from 'moment-timezone';
import { LocalizationContext } from '../../../../../../common/LocalizationProvider';
import styles from './styleComponentUserDetails.js';
import useThemedStyles from '../../../../../../hooks/useThemedStyles';

function ComponentUserDetails({
  imageUrl,
  nameLogo,
  name,
  time,
  status,

}) {
  const { translations } = useContext(LocalizationContext);
  const Styles = useThemedStyles(styles);

  const calculateTime = () => {
    let formattedDate = '';
    if (time !== '') {
      const d = moment(time);
      formattedDate = d.fromNow(true);
    }
    return formattedDate;
  };
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.subContainerOne}>
        {
          !imageUrl ? (
            <View style={Styles.nameLogoStyle}>
              <Text style={Styles.nameLogoTextStyle}>{nameLogo}</Text>
            </View>
          ) : (
            <View>
              <Image
                source={{ uri: imageUrl }}
                style={Styles.userImageStyle}
              />
            </View>
          )
        }
      </View>
      <View style={Styles.subContainerTwo}>
        <Text style={Styles.textStyle}>{name}</Text>
        <View style={Styles.questionStatus}>
          <View style={Styles.smallCircleStyle} />
          <Text style={Styles.subHeadingTextStyle}>{calculateTime()}</Text>
          <View style={Styles.smallCircleStyle} />
          <Text style={[Styles.subHeadingTextStyle,
            Number(status) === 1 ? Styles.resolvedTextColor : Styles.unResolvedTextColor]}
          >
            {Number(status) === 1 ? translations.RESOLVED : translations.UNRESOLVED}
          </Text>
        </View>
      </View>
    </View>
  );
}

ComponentUserDetails.propTypes = {
  imageUrl: propTypes.any,
  nameLogo: propTypes.any,
  name: propTypes.string,
  time: propTypes.string,
  status: propTypes.string,
};

export default ComponentUserDetails;
