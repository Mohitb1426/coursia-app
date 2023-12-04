import { StyleSheet } from 'react-native';
import { FontTheme, ScreenDimensions } from '../../AppStyles';
import { vh, vw } from '../../Dimensions';

const screenWidth = ScreenDimensions.width;

const styles = (AppTheme) => StyleSheet.create({
  activityIndicator: {
    alignSelf: 'center',
    height: vh(40),
    marginTop: vh(22),
  },
  buttonBackground: {
    backgroundColor: FontTheme.solidOnLightRed,
    borderRadius: 20,
    height: vh(40),
    justifyContent: 'center',
    marginTop: vh(22),
    width: screenWidth - vw(70),
  },
  containerStyle: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderTopLeftRadius: vw(24),
    borderTopRightRadius: vw(24),
    elevation: 10,
    width: screenWidth,
  },
  customButtonCustomStyle: {
    borderRadius: 6,
    height: vh(50),
    marginVertical: vh(20),
    width: '90%',
  },
  logoImage: {
    height: vh(40),
    marginTop: 10,
    width: vw(166),
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderTopLeftRadius: vw(24),
    borderTopRightRadius: vw(24),
    height: '62%',
  },
  offlineMyLibraryText: {
    color: AppTheme.MY_LIBRARY_TEXT_COLOR,
    fontSize: vw(14),
    fontWeight: '600',
  },
  offlineText: {
    color: AppTheme.TEXT_COLOR_CONTENT_02,
    fontSize: vw(14),
    fontWeight: '400',
  },
  offlineTextWrapper: {
    marginVertical: 10,
  },
  secondImage: {
    height: vh(124),
    marginTop: vh(14),
    width: vw(123),
  },
  text: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vw(14),
    fontWeight: '400',
    marginTop: vw(3),
    textAlign: 'center',
  },
  textOops: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vw(25),
    fontWeight: '600',
    marginBottom: vh(5),
    marginTop: vw(20),
    textAlign: 'center',
  },
});

export default styles;
