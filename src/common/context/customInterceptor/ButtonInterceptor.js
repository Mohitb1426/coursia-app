import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import propTypes from 'prop-types';
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
import { ColorTheme, FontTheme } from '../../AppStyles';
import Config from '../../Config';
import { screenHeightDefault } from '../../Dimensions';

function ButtonInterceptor({ show }) {
  if (!show) return null;
  const navigation = useNavigation();
  const color = Config.isStaging ? '#FF1744' : '#F4511E';
  const buttonText = Config.isStaging ? 'S' : 'P';
  const containerStyle = { backgroundColor: color };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('ScreenNetworkLogger');
      }}
      style={styles.buttonStyle}
    >
      <View style={{ ...containerStyle, ...styles.containerStyle }}>
        <Text style={styles.versionTextStyle}>{`${DeviceInfo.getVersion()}` || '-'}</Text>
        <Text style={styles.textInputStyle}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const btnDimensions = 44;
const styles = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    right: 10,
    top: screenHeightDefault / 2,
    zIndex: 99,
  },
  containerStyle: {
    alignItems: 'center',
    borderRadius: btnDimensions / 2,
    height: btnDimensions,
    justifyContent: 'center',
    width: btnDimensions,
  },
  textInputStyle: {
    color: ColorTheme.white,
    fontFamily: FontTheme.BOLD,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  versionTextStyle: {
    color: ColorTheme.white,
    fontFamily: FontTheme.BOLD,
    fontSize: 10,
    textAlign: 'center',
  },

});

ButtonInterceptor.propTypes = {
  show: propTypes.bool,
};

export default ButtonInterceptor;
