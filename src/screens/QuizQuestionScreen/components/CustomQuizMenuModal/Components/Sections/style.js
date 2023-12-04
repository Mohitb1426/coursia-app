import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../../../common/AppStyles';
import { vh, vw } from '../../../../../../common/Dimensions';
import Fonts from '../../../../../../common/Fonts';

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: vh(25),
  },
  mainViewStyle: {
    opacity: 0.3,
  },
  subContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vh(10),
    width: vw(100),
  },
  textStyle: {
    alignSelf: 'center',
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(12),
    fontWeight: '500',
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.BLUE_60,
    borderRadius: vh(25),
    height: vh(24),
    justifyContent: 'center',
    marginHorizontal: vh(6),
    marginVertical: vh(6),
    width: vh(24),
  },
});

export default styles;
