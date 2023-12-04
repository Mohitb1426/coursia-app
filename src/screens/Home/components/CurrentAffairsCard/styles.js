import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
// import {vh, vw} from '../../../../common/Dimensions';
// import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  bgImageContainer: {
    height: 59,
    justifyContent: 'center',
    width: '100%',
  },
  bgImageStyle: {
    height: '100%',
    resizeMode: 'stretch',
    width: '100%',
  },
  detailTextStyle: {
    color: ColorTheme.dark08,
    fontSize: 8,
    fontWeight: '400',
    lineHeight: 9.38,
    paddingTop: 5,
  },
  goalContainer: {
    flex: 1,
  },
  imageStyle: { height: 43, resizeMode: 'contain', width: 43 },
  mainContainer: { paddingHorizontal: 12, paddingTop: 10, width: '100%' },
  subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
  },
  titleTextStyle: {
    // fontFamily: Fonts.LATO_BOLD,
    color: ColorTheme.dark07,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
});

export default styles;
