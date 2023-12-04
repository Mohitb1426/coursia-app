import { StyleSheet } from 'react-native';
import { vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagsButtonStyle: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_07,
    borderRadius: 16,
    height: vw(20),
    justifyContent: 'center',
    marginBottom: vw(10),
    marginRight: vw(10),
    minWidth: vw(118),
    paddingHorizontal: vw(10),
  },
  tagsButtonTextStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_04,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default styles;
