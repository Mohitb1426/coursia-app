import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../../../common/AppStyles';
import { vh, vw } from '../../../../../../common/Dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ColorTheme.GREY_BG,
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    height: vh(5),
    width: vw(150),
  },
  progressView: {
    backgroundColor: ColorTheme.GREEN_BG,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    height: vh(5),
  },
});
export default styles;
