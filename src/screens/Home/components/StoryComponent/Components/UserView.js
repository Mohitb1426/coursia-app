import React, { memo } from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import PropTypes from 'prop-types';
import SvgIcon from '../../../../../common/SvgIcon';
import Fonts from '../../../../../common/Fonts';
import { ColorThemeLight } from '../../../../../common/AppStyles';

function UserView({ onClosePress, profile, name }) {
  return (
    <View style={styles.userView}>
      {profile.includes('.svg')
        ? (
          <View style={styles.svgImageContainer}>
            <SvgUri
              height={40}
              width={40}
              uri={profile}
            />
          </View>
        )
        : <Image source={{ uri: profile }} style={styles.image} />}
      <View style={styles.nameContainer}>
        <View style={styles.barUsername}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.crossButtonContainer} onPress={onClosePress}>
        <SvgIcon.CloseIcon />
      </TouchableOpacity>
    </View>
  );
}

export default memo(UserView);

UserView.propTypes = {
  onClosePress: PropTypes.func,
  profile: PropTypes.string,
  name: PropTypes.string,

};

const styles = StyleSheet.create({
  barUsername: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  crossButtonContainer: {
    alignItems: 'center', height: 40, justifyContent: 'center', marginRight: 10, width: 40,
  },
  image: {
    borderRadius: 25,
    height: 40,
    marginLeft: 8,
    width: 40,
  },
  name: {
    color: ColorThemeLight.PRIMARY_BACKGROUND,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 10,
    textAlign: 'center',
  },
  nameContainer: { flex: 1 },
  svgImageContainer: {
    backgroundColor: ColorThemeLight.PRIMARY_BACKGROUND,
    borderRadius: 100,
    height: 40,
    overflow: 'hidden',
    width: 40,
  },
  userView: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 55,
    width: '98%',
  },
});
