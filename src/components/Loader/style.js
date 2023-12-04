import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';

const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    width: 100,
  },
  // eslint-disable-next-line react-native/no-color-literals
  modalBackground: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
