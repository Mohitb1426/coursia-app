import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
//   bodyContainer: {
//     flex: 1,
//     // backgroundColor:'red'
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     backgroundColor: AppTheme.PRIMARY_COLOR,
//     borderRadius: 6,
//     flex: 1,
//     justifyContent: 'center',
//     paddingVertical: 14,
//   },
//   buttonTextStyle: {
//     color: AppTheme.TEXT_COLOR_HEADING_03,
//     fontFamily: Fonts.ROBOTO,
//     fontSize: 16,
//     fontWeight: 'bold',
//     lineHeight: 21,
//   },
  buttonContainer: { flex: 0.1, paddingHorizontal: 16, paddingVertical: 20 },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  itemAnsContainer: { paddingTop: 30 },
  itemContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  pagerContainer: { flex: 1 },
  quesTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
  },
//   instTextStyle: {
//     color: AppTheme.TEXT_COLOR_HEADING,
//     fontFamily: Fonts.ROBOTO,
//     fontSize: 16,
//     fontWeight: 'bold',
//     lineHeight: 24,
//   },
//   instructionHeaderContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingBottom: 14,
//     paddingHorizontal: 16,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 16,
//   },
//   langContainer: {
//     flexDirection: 'row',
//   },
//   langTextStyle: (item) => {
//     return {
//       color: item === 'Value' ? AppTheme.PRIMARY_COLOR : AppTheme.TEXT_COLOR_HEADING,
//       fontFamily: Fonts.ROBOTO,
//       fontSize: 12,
//       fontWeight: 'bold',
//       lineHeight: 24,
//     };
//   },
//   listFooterStyle: { paddingHorizontal: 16, paddingTop: 50 },
//   pointsTextStyle: {
//     color: AppTheme.TEXT_COLOR_CONTENT_01,
//     fontFamily: Fonts.ROBOTO,
//     fontSize: 14,
//     fontWeight: '400',
//     lineHeight: 24,
//     textAlign: 'left',
//   },
});

export default styles;
