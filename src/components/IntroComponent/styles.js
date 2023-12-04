import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import Fonts from '../../common/Fonts';

const styles = StyleSheet.create({
  answerIntroDetailTextStyle: {
    color: ColorTheme.light01,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    fontWeight: '400',
    paddingTop: 20,
  },
  backgroundImageContainer: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  bookMarkContainer: {
    alignItems: 'flex-end',
    paddingRight: 36,
    paddingTop: 98,
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: ColorTheme.light01,
    borderRadius: 27,
    borderStyle: 'solid',
    borderWidth: 2,
    height: 40,
    justifyContent: 'center',
    marginTop: 32,
    minWidth: 86,
    paddingHorizontal: 5,
  },
  buttonTextStyle: {
    color: ColorTheme.light01,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 16,
    fontWeight: '400',
  },
  curvedArrowContainer: {
    paddingLeft: 150,
  },
  curvedArrowImageStyle: {
    height: 153,
    resizeMode: 'contain',
    width: 162,
  },
  detailTextStyle: {
    color: ColorTheme.light01,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 20,
  },
  innerContainer: {
    alignItems: 'flex-end',
    paddingRight: 12,
    paddingTop: 5,
    width: '100%',
  },
  mainContainer: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: 99,
  },
  roundArrowImageStyle: {
    height: 126,
    resizeMode: 'contain',
    width: 133,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
});

export default styles;
