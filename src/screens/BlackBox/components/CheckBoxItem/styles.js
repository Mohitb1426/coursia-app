import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  checkBoxContainer: { alignItems: 'center', flexDirection: 'row' },
  checkBoxStyle: { marginLeft: 10, marginTop: 5 },
  container: {
    alignItems: 'center',
    borderBottomColor: AppTheme.BORDER_COLOR,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingBottom: 18,
    paddingTop: 16,
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  titleTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
  },
//   colorPoint: (color) => {
//     return {
//       backgroundColor: color,
//       borderRadius: 6,
//       height: 12,
//       width: 12,
//     };
//   },
//   container: {
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   scoreTextStyle: {
//     color: AppTheme.TEXT_COLOR_CONTENT_02,
//     fontFamily: Fonts.ROBOTO,
//     fontSize: 12,
//     fontWeight: '400',
//     paddingLeft: 8,
//   },
//   textContainer: {
//     flex: 1, flexDirection: 'row', marginBottom: 8, paddingLeft: 7,
//   },
//   titleTextStyle: {
//     color: AppTheme.TEXT_COLOR_HEADING,
//     fontFamily: Fonts.ROBOTO,
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
});

export default styles;
