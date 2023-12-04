import { StyleSheet } from 'react-native';
import { ColorThemeLight } from '../../common/AppStyles';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ColorThemeLight.PRIMARY_BACKGROUND,
    flexDirection: 'column',
    flex: 1,
  },
  webStyle: { flex: 1 },
});

export default styles;
