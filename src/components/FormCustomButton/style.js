/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { ColorThemeLight } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: vw(8),
    height: vh(65),
    justifyContent: 'center',
    marginVertical: vh(50),
    padding: vw(10),
    width: '100%',
  },

  container_PRIMARY: {
    backgroundColor: ColorThemeLight.PRIMARY_COLOR,
  },

  text: {
    fontSize: vw(16),
    fontWeight: '600',
  },
});
