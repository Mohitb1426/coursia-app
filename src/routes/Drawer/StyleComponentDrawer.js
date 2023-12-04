import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import Fonts from '../../common/Fonts';

const StyleComponentDrawer = (theme) => StyleSheet.create({
  avatarContainer: {
    marginRight: 10,
  }, //
  bottomContainer: {
    // flex: 1,
    // justifyContent: 'flex-end',
    borderTopColor: theme.BORDER_COLOR,
    borderTopWidth: 1,
    marginBottom: 30,
    paddingLeft: 28,
    paddingRight: 16,
    paddingTop: 30,
  },
  copyRightTextStyle: {
    color: ColorTheme.green06,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
  },
  detailContainer: {
    flex: 1,
  },
  dividerStyle: {
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR,
  },
  editButtonTextStyle: {
    color: ColorTheme.blue02,
    fontSize: 9,
    fontWeight: '500',
    lineHeight: 12,
    paddingTop: 9,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_BACKGROUND_03,
    borderBottomColor: theme.BORDER_COLOR,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 148,
    paddingHorizontal: 20,
    width: '100%',
  }, //
  lbIconStyle: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
  },
  lbLangTextStyle: {
    color: ColorTheme.black,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  lbLeftContainer: {
    height: 25,
    width: 25,
  },
  lbRightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    width: 220,
  },
  lbRightLangContainer: {
    // flexWrap: 'wrap',
    flex: 1,
    paddingLeft: 15,
  },
  lbTextStyle: (priority) => {
    return {
      color: theme.TEXT_COLOR_HEADING,
      fontSize: priority === 1 ? 16 : 16,
      fontWeight: '500',
      lineHeight: 18,
      paddingVertical: 2,
      paddingRight: 6,
    };
  },
  leftContainer: { alignItems: 'center', flexDirection: 'row', flex: 1 },
  listButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 12,
    paddingVertical: 12,
  },
  listContainer: {
    flex: 1,
    paddingTop: 50,
  },
  listTitleContainer: { flex: 1 },
  logoContainer: {
    height: 79,
    width: 79,
  },
  logoImageStyle: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
  },
  mainContainer: {
    backgroundColor: theme.PRIMARY_BACKGROUND,
    flex: 1,
    justifyContent: 'space-between',
  },
  nameTextStyle: {
    color: theme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 16,
    fontWeight: '700',
  },
  passTextStyle: {
    color: theme.TEXT_COLOR_HEADING,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
  },
  profileImageContainer: {
    borderRadius: 76 / 2,
    height: 76,
    width: 76,
  },
  profileImageStyle: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
  },
  toggleContainer: { },
  userDetailContainer: {
    flex: 1,
    paddingLeft: 9,
  },
  userDetailTextStyle: {
    color: theme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: '400',
  },
  userMailContainer: {
    paddingTop: 9,
  },
  versionTextStyle: {
    color: theme.TEXT_COLOR_HEADING,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    paddingTop: 20,
  },
});

export default StyleComponentDrawer;
