import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../common/AppStyles';
import { vh, vw } from '../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  confirmationImageStyle: {
    alignSelf: 'center',
    height: vh(90),
    marginTop: vh(20),
    width: vw(90),
  },
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: vw(10),
    paddingTop: vh(20),
  },
  textStyle1: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vh(18),
    fontWeight: '800',
    marginTop: vh(10),
  },
  textStyle2: {
    color: ColorTheme.green06,
    fontSize: vh(22),
    fontWeight: '500',
    marginTop: vh(10),
  },
  textStyle3: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vh(18),
    fontWeight: '500',
    marginTop: vh(40),
    paddingHorizontal: vw(30),
    textAlign: 'center',
  },
});

export default styles;
