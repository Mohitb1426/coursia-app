import { StyleSheet } from 'react-native';
// import { AppTheme } from '../../common/AppStyles';
import Fonts from '../../common/Fonts';
import { getRandomHexColor } from '../../utilities/commonFunction/randomColor';

const styles = (AppTheme) => StyleSheet.create({
  avatarNameContainer: (size, multiColor) => {
    return {
      flex: 1,
      borderRadius: size / 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: multiColor ? getRandomHexColor(6) : AppTheme.PRIMARY_COLOR,
    };
  },
  avatarNameStyle: (size) => {
    return {
      color: AppTheme.TEXT_COLOR_HEADING_03,
      fontFamily: Fonts.ROBOTO,
      fontSize: size,
      fontWeight: 'bold',
      paddingBottom: 3,

    };
  },
  container: (size) => {
    return {
      height: size + 4,
      width: size + 4,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  editButtonContainer: {
    bottom: -5,
    position: 'absolute',
    right: -5,
    zIndex: 999,
  },
  imageContainer: (size) => {
    return {
      height: '100%',
      width: '100%',
      borderRadius: size / 2,
      resizeMode: 'cover',
    };
  },
  mainContainer: (size) => {
    return {
      height: size,
      width: size,
      borderRadius: size / 2,
      borderWidth: 1,
      borderColor: AppTheme.TEXT_COLOR_HEADING_03,
    };
  },
});

export default styles;
