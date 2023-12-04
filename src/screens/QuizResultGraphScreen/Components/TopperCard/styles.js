import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  aimImageStyle: {
    height: vh(106),
    position: 'absolute',
    resizeMode: 'contain',
    right: 0,
    top: vh(22),
    width: vw(106),
  },
  cardContainer: {
    borderRadius: 6,
    flexDirection: 'row',
    height: vh(166),
    width: '100%',
  },
  cardImageStyle: {
    borderRadius: 6,
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  cardLeftContainer: { flex: 1.1, paddingTop: vh(24) },
  cardRightContainer: { flex: 1 },
  cardRightInnerContainer: { flexDirection: 'row' },
  cardTextContainer: { alignItems: 'center', flex: 1, paddingTop: vh(23) },
  detailTextStyle: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(16),
    fontWeight: '500',
  },
  headingTextStyle: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_BOLD,
    fontSize: vh(20),
    fontWeight: '700',
  },
  madelImageStyle: { height: vh(101), resizeMode: 'contain', width: vw(56) },
  trophyImageStyle: {
    height: vh(156),
    marginTop: vh(9),
    resizeMode: 'contain',
    width: vw(83),
  },
  waveImageStyle: { height: vh(16), width: vw(55) },
});

export default styles;
