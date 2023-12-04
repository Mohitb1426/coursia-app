import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vw } from '../../../../common/Dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: ColorTheme.BORDER_GREY,
    borderRadius: 6,
    borderWidth: 1,
    height: vw(107),
    justifyContent: 'center',
    margin: '1%',
    width: vw(99),
  },
  imageContainer: {
    borderRadius: 3,
    height: '96%',
    width: '96%',
  },
});
export default styles;
