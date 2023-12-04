import { StyleSheet } from 'react-native';
import { ColorTheme, FontTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  bookmarksIcon: {
    height: vh(120),
    width: vw(104),
  },
  closeIcon: {
    height: vw(15),
    width: vw(15),
  },
  crossContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',

  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    borderRadius: 10,
    height: vh(230),

    width: vw(300),
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: ColorTheme.BACKGROUND_DIM,
    flex: 1,
    justifyContent: 'center',
  },
  titleImage: {
    height: vh(104),
    width: vh(104),
  },
  titleStyle: {
    fontFamily: FontTheme.INTER_REGULAR,
    fontSize: 19,
    letterSpacing: 0.5,
    lineHeight: 22,
    marginTop: 15,
  },

});

export default styles;
