import { StyleSheet } from 'react-native';
import { vh } from '../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  mainContainerResolved: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    borderColor: AppTheme.ASK_DOUBT_CARD_BORDER_COLOR_01,
    borderRadius: 4,
    borderWidth: 1,
    margin: vh(10),
    paddingBottom: vh(10),
  },
});

export default styles;
