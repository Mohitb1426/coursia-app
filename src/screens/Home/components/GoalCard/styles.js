import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: ColorTheme.green08,
    borderRadius: 10,
    marginTop: 5,
    paddingVertical: 4,
    width: 123,
  },
  buttonTextStyle: {
    color: ColorTheme.light01,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14.06,
    textAlign: 'center',
  },
  detailDarkTextStyle: {
    fontWeight: '800',
  },
  detailTextStyle: {
    color: ColorTheme.dark08,
    fontFamily: Fonts.ROBOTO,
    fontSize: 8,
    fontWeight: '400',
    lineHeight: 9.38,
  },
  leftContainer: { flex: 1.5, justifyContent: 'center', paddingLeft: 22 },
  mainContainer: {
    backgroundColor: ColorTheme.green07,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    height: 89,
    marginHorizontal: 12,
    paddingTop: 10,
  },
  rightContainer: {
    alignItems: 'flex-end', flex: 1, flexDirection: 'row', justifyContent: 'flex-end',
  },
  targetStyle: { bottom: 0, position: 'absolute', right: 0 },
  titleTextStyle: {
    color: ColorTheme.dark07,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14.06,
  },
  trophyStyle: { bottom: 0, position: 'absolute', right: 40 },
});

export default styles;
