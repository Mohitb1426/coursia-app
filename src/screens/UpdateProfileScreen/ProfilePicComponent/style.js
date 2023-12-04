import { StyleSheet } from 'react-native';
import { ColorTheme, ColorThemeLight } from '../../../common/AppStyles';
import { vh, vw } from '../../../common/Dimensions';

const styles = StyleSheet.create({
  cameraIcon: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: ColorTheme.white,
    borderColor: ColorThemeLight.PRIMARY_COLOR,
    borderRadius: vw(40),
    borderWidth: 1,
    height: vh(42),
    justifyContent: 'center',
    width: vh(42),
  },
  cameraIconContainer: {
    bottom: 20,
    end: 12,
    position: 'absolute',
  },

  circularProfilePic: {
    backgroundColor: ColorThemeLight.SECONDARY_BACKGROUND,
    borderRadius: vh(100),
    height: vh(110),
    width: vh(110),
  },
  profilePicContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    height: 130,
    width: 135,
  },
});

export default styles;
