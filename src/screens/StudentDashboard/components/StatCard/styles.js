import { StyleSheet } from 'react-native';
// import { AppTheme } from '../../../../common/AppStyles';

const styles = (AppTheme) => StyleSheet.create({
  cardShadow: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: 8,
    elevation: 3,
    marginTop: 16,
    margin: 2,
    shadowColor: AppTheme.SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    width: '47%',
  },
  ellipseStyle: {
    end: -10,
    position: 'absolute',
    top: -10,
  },
  startsCardHeadingStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: 15,
    fontWeight: '700',
  },
  startsCardStatsStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_01,
    fontSize: 24,
    fontWeight: '700',
    marginStart: 16,
    marginTop: 30,
  },
  startsCardTypeStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_02,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 20,
    marginStart: 16,
    marginTop: 1,
  },
  statCardHeaderInnerStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  statsCardHeaderOuterStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginEnd: 15,
    marginStart: 16,
    marginTop: 22,
  },
  statsCardHorizontalContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  statsCardStyle: {
    borderRadius: 6,
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  },
  statsCardUnderlineStyle: {
    backgroundColor: AppTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    height: 2,
    marginTop: 2,
    width: 22,
  },
});

export default styles;
