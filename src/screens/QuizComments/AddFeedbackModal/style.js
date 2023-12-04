import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../common/AppStyles';
import Fonts from '../../../common/Fonts';
import { vh, vw } from '../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  containerStyle: {
    flexDirection: 'column',
  },
  submitButtonDisabledStyle: {
    color: ColorTheme.black,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(16),
    fontWeight: 'bold',
    paddingBottom: vh(15),
    paddingTop: vh(15),
  },
  submitButtonStyle: {
    color: ColorTheme.white,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(16),
    fontWeight: 'bold',
    paddingBottom: vh(15),
    paddingTop: vh(15),
  },
  submitContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.green06,
    borderRadius: vw(6),
    marginHorizontal: vw(16),
  },
  submitContainerDisabled: {
    alignItems: 'center',
    backgroundColor: ColorTheme.grey,
    borderRadius: vw(6),
    marginHorizontal: vw(16),
  },
  textInpoutSubjectStyle: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    borderColor: AppTheme.BORDER_COLOR_01,
    borderRadius: vw(6),
    borderWidth: vw(1),
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vw(14),
    fontWeight: '400',
    height: vh(50),
    marginHorizontal: vw(16),
    marginVertical: vh(14),
    padding: vw(10),
    textAlignVertical: 'top',
  },
  textInputStyle: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    borderColor: AppTheme.BORDER_COLOR_01,
    borderRadius: vw(6),
    borderWidth: vw(1),
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vw(14),
    fontWeight: '400',
    height: vh(250),
    marginBottom: vh(14),
    marginHorizontal: vw(16),
    padding: vw(10),
    textAlignVertical: 'top',
  },
});

export default styles;
