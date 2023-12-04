import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  buttonContainer: { flexDirection: 'row', paddingTop: 24 },
  buttonDivider: { width: 11 },
  detailTextStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_01,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },
  headerContainer: { paddingBottom: 7 },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: 6,
    paddingHorizontal: 26,
    paddingVertical: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  // colorPoint: (color) => {
  //   return {
  //     backgroundColor: color,
  //     borderRadius: 6,
  //     height: 12,
  //     width: 12,
  //   };
  // },
  // container: {
  //   alignItems: 'center',
  //   flexDirection: 'row',
  // },
  // scoreTextStyle: {
  //   color: AppTheme.TEXT_COLOR_CONTENT_02,
  //   fontFamily: Fonts.ROBOTO,
  //   fontSize: 12,
  //   fontWeight: '400',
  //   paddingLeft: 8,
  // },
  // textContainer: {
  //   flex: 1, flexDirection: 'row', marginBottom: 8, paddingLeft: 7,
  // },
  // titleTextStyle: {
  //   color: AppTheme.TEXT_COLOR_HEADING,
  //   fontFamily: Fonts.ROBOTO,
  //   fontSize: 12,
  //   fontWeight: 'bold',
  // },
});

export default styles;
