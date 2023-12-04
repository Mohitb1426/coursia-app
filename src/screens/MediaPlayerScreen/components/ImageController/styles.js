import { StyleSheet } from 'react-native';
import { vh } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  containerImage: { alignItems: 'center', flex: 0.8, justifyContent: 'space-around' },
  containerStyle: {
    height: '100%',
  },
  customImageStyle: { height: vh(20), width: vh(20) },
  imageContainer: { height: vh(40), width: vh(40) },
  textStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_04,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(12),
    marginTop: vh(5),
  },
});

export default styles;
