import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';
import { vh, vw } from '../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_04,
    borderRadius: 4,
    height: vw(24),
    justifyContent: 'center',
    marginRight: vw(10),
    minWidth: vw(118),
    paddingHorizontal: vw(5),
  },
  buttonTextStyle: {
    color: AppTheme.COLOR_02,
    fontFamily: Fonts.ROBOTO,
    fontSize: 13,
    fontWeight: '600',
  },
  mainContainer: {
    margin: vw(20),
    marginRight: 0,
  },
  selectedTagContainerStyle: {
    backgroundColor: AppTheme.ASK_DOUBT_SECONDARY_SUB_COLOR_04,
    borderColor: AppTheme.TEXT_COLOR_HEADING,
  },
  selectedTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_04,
  },
  textStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: vh(10),
  },
});

export default styles;
