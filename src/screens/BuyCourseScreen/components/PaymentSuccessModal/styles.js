import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import Fonts from '../../../../common/Fonts';
import { vh } from '../../../../common/Dimensions';

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(20),
  },
  cardText: {
    color: ColorTheme.LIGHT_BLUE_GREY_COMBO,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(13),
  },
  imageCloseContainer: {
    height: vh(12),
    position: 'absolute',
    right: 10,
    width: vh(12),
  },
  imageSuccessContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  mainImageContainer: { flex: 1 },
  modalCustomStyle: { flex: 1, justifyContent: 'center' },
  subContainer: { flex: 0.075, justifyContent: 'center' },
  successTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vh(20),
  },
  successTextStyle: {
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: vh(18),
  },
});

export default styles;
