import { StyleSheet } from 'react-native';
import { screenHeightDefault, vw } from '../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  activityIndicator: {
    marginTop: screenHeightDefault / 3,
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  contentStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_04,
    fontSize: vw(15),
    fontWeight: '400',
    marginHorizontal: 10,
    paddingBottom: 10,
    textAlign: 'justify',
  },
  mainContainer: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  scrollViewStyle: {
    flex: 1,
    paddingVertical: 10,
  },
  subContainer: {
    marginBottom: 10,
    marginTop: 40,
  },
  subjectStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vw(17),
    fontWeight: '700',
    marginHorizontal: 10,
    textAlign: 'justify',
  },
});

export default styles;
