import { StyleSheet } from 'react-native';
import { vh } from '../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  closeIconStyle: {
    marginLeft: 4,
    marginTop: 2,
  },
  container: {
    flex: 1,
    padding: vh(20),
  },

  customStyle: {
    borderRadius: 5,
    bottom: 0,
    minHeight: vh(50),
    width: '100%',

  },

  dropDownContainer: {
    borderColor: AppTheme.CARD_BORDER_COLOR,
    borderRadius: 6,
    borderWidth: 1,
    flex: 0.8,
    zIndex: 1000,
  },

  dropDownStyle: {
    borderColor: AppTheme.WHITE,
    height: vh(50),

  },

  dropDownValidationStyle: {
    borderColor: AppTheme.PRIMARY_RED_COLOR,
    borderWidth: 1,
  },

  dropdownContainerStyle: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderRadius: 0,
    borderWidth: 0,
    elevation: 1,
    // backgroundColor: 'red'
  },

  firstContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imageContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.ASK_DOUBT_PRIMARY_BACKGROUND_07,
    borderRadius: 6,
    flex: 0.15,
    height: vh(52),
    justifyContent: 'center',
    marginLeft: '2%',
  },

  imageStyle: {
    height: vh(22),
    width: vh(24),
  },

  labelContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_07,
    borderRadius: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: vh(35),
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
  },
  labelText: {
    color: AppTheme.ASK_DOUBT_TEXT_COLOR_CONTENT_04,
  },

  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // alignItems: 'center',
  },

  removeImageStyle: {
    elevation: 5,
    height: vh(18),
    right: 18,
    width: vh(18),
  },

  searchDropDownItemStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    padding: 9,
  },

  searchDropDownTextInputStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    height: vh(50),
    marginLeft: 5,
  },

  secondTextInputStyle: {
    backgroundColor: AppTheme.white,
    borderColor: AppTheme.CARD_BORDER_COLOR,
    borderRadius: 6,
    borderWidth: 1,
    color: AppTheme.CHARLESTON_GREEN,
    height: vh(50),
    marginBottom: '3%',
    paddingLeft: vh(10),
    width: '100%',
  },

  selectedImageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  selectedImageSubContainer: {
    flexDirection: 'row',
    marginVertical: '3%',
  },

  setOpacityOne: {
    opacity: 1,
  },
  setOpacityZero: {
    opacity: 0,
  },
  textInputStyle: {
    backgroundColor: AppTheme.WHITE,
    borderColor: AppTheme.CARD_BORDER_COLOR,
    borderRadius: 6,
    borderWidth: 1,
    color: AppTheme.TEXT_COLOR_HEADING_05,
    height: vh(50),
    marginVertical: '3%',
    paddingLeft: vh(10),
    width: '100%',

  },

  touchableStyle: {
    flex: 1,
  },

  validationStyle: {
    borderColor: AppTheme.ERROR_RED,
    borderWidth: 1,
  },

});

export default styles;
