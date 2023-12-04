import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    margin: '1%',
    overflow: 'hidden',
    padding: vh(5),
  },
  notesData: {
    color: AppTheme.TEXT_COLOR_CONTENT_04,
    flexShrink: 1,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 14,
    fontWeight: '400',
  },
  time: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: 13,
  },
  timestampData: {
    alignItems: 'center',
    backgroundColor: ColorTheme.RACE_PINK,
    borderRadius: 3,
    height: vh(25),
    justifyContent: 'center',
    marginRight: 10,
    width: vw(47.78),
  },
});

export default styles;
