import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: ColorTheme.ERROR_RED,
    borderRadius: 5,
    paddingHorizontal: 1,
    paddingVertical: 7,
  },
  buttonTextStyle: {
    color: ColorTheme.light01,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'center',
  },
  detailBoldTextStyle: {
    color: ColorTheme.black,
    fontSize: 14,
    fontWeight: '600',
  },
  detailTextStyle: {
    color: ColorTheme.dark02,
    fontFamily: Fonts.ROBOTO,
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
  },
  imageContainer: { alignItems: 'center', paddingVertical: 10 },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.light01,
    borderColor: ColorTheme.DARK_SHADOW,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 2,
    marginVertical: 15,
    padding: 17,
  },
  textContainer: { flex: 1, paddingHorizontal: 15 },
  viewContainer: { flex: 1 },
});

export default styles;
