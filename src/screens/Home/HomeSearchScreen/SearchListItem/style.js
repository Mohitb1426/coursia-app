import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
    flexDirection: 'row',
    paddingVertical: vh(10),
  },

  imageStyle: {
    backgroundColor: ColorTheme.GREY_BACKGROUND,
    borderRadius: vh(24),
    height: vh(36),
    marginStart: vw(19),
    width: vw(36),
  },
  subTextStle: {
    color: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
  },
  textContainer: {
    marginEnd: vw(20),
    marginStart: vw(20),
    textContainer: 'column',
  },
  textMainHeadingStyle: {
    color: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    fontSize: vw(14),
    fontWeight: '700',
    width: vw(300),
  },
  textMainHeadingStyleHighlighted: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontSize: vw(14),
    fontWeight: '700',
  },
});

export default styles;
