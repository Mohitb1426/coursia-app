import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  contentTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vw(14),
    paddingHorizontal: 10,
    paddingTop: 4,
  },

  questionContainerStyle: {
    flexDirection: 'column',
  },

  subjectTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vw(14),
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingTop: 4,
  },

  viewMoreText: {
    alignSelf: 'flex-end',
    color: ColorTheme.textGreen,
    fontSize: vw(10),
    fontWeight: 'bold',
    marginBottom: vh(10),
    marginEnd: vw(20),
  },
});

export default styles;
