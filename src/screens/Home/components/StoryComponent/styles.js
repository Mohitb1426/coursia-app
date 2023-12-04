import { StyleSheet } from 'react-native';
import { ColorTheme, FontTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  listContainer: { alignItems: 'center', paddingTop: 10, width: 80 },
  listTextStyle: {
    color: ColorTheme.black,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: 'bold',
    // lineHeight: 11,
    textAlign: 'center',
  },
  mainContainer: {
    backgroundColor: ColorTheme.white,
    flex: 1,
  },
  storyCircleContainer: {
    alignItems: 'center',
    borderRadius: 65 / 2,
    height: 65,
    justifyContent: 'center',
    width: 65,
  },
  storyContainer: { marginTop: 10 },
  storyImageStyle: {
    borderRadius: 60 / 2,
    height: 60,
    resizeMode: 'cover',
    width: 60,
  },
  titleText: {
    fontFamily: FontTheme.SEMI_BOLD,
    fontSize: 12,
    paddingTop: 10,
    textAlign: 'center',
  },
});

export default styles;
