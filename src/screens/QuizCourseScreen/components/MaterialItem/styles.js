import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  arrowContainer: {
    alignContent: 'center',
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  imageContainer: {
    backgroundColor: ColorTheme.LIGHT_CULTURED_COLOR,
    borderRadius: 6,
    height: vh(57),
    padding: 5,
    width: vh(57),
  },
  imageStyle: {
    alignSelf: 'center',
    height: vh(48),
    width: vh(36),

  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderColor: AppTheme.BORDER_COLOR,
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  subTitleText: {
    color: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(12),
    fontWeight: '700',
  },
  textContainer: {
    flex: 5,
    marginHorizontal: 5,
  },
  titleText: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(14),
    fontWeight: '700',
  },
  totalFilesText: {
    color: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(12),
    fontWeight: '600',
    padding: 2,
  },
});

export default styles;
