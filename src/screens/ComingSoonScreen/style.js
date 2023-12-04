import { StyleSheet } from 'react-native';
import { vh } from '../../common/Dimensions';
import { ScreenDimensions } from '../../common/AppStyles';

const styles = (AppTheme) => StyleSheet.create({
  comingSoonButtonStyle: {
    alignSelf: 'center',
    borderRadius: 6,
    marginBottom: vh(40),
    width: ScreenDimensions.width - 40,
  },
  comingSoonContainerStyle: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  comingSoonSvgContainerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
