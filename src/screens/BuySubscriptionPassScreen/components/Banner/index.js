import {
  View, Text, ImageBackground,
} from 'react-native';
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import styles from './style';
import { LocalizationContext } from '../../../../common/LocalizationProvider';

function Banner({
  data,
}) {
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={{ uri: data?.full_image }}
        resizeMode="stretch"
        style={styles.image}
      >
        <View style={styles.container}>
          {/* <Text style={styles.passTitle}>
            {data?.plan_name}
          </Text> */}
          <View style={styles.validityContainer}>
            <Text style={styles.validText}>{translations.VALID_FOR}</Text>
            <Text style={styles.daysText}>
              {data?.expiry_days}
              {' '}
              {translations.LOWERCASE_DAYS}
            </Text>
          </View>
          <Text style={styles.originalPriceText}>
            {'\u20B9'}
            {data?.strike_amount}
          </Text>
          <Text style={styles.currentPriceText}>
            {'\u20B9'}
            {data?.actual_amount}
          </Text>
          <Text style={styles.gstText}>{translations.INCLUDING_GST}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

Banner.propTypes = {
  data: propTypes.any,
};

export default Banner;
