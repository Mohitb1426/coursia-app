import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  avatarContainer: {
    marginRight: 10,
  },
  detailContainer: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_03,
    borderBottomColor: AppTheme.BORDER_COLOR,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 148,
    paddingHorizontal: 20,
    width: '100%',
  },
  nameTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 16,
    fontWeight: '700',
  },
  userDetailTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: '400',
  },
});

export default styles;
