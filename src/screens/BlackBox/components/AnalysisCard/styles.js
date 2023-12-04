import { StyleSheet } from 'react-native';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  cardTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  cardTitleStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontFamily: Fonts.ROBOTO,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
  },
  container: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: 8,
    elevation: 4,
    flex: 1,
    paddingBottom: 17,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    shadowColor: AppTheme.SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  detailContainer: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.ASK_DOUBT_BORDER_COLOR_03,
    borderRadius: 15,
    height: 29,
    justifyContent: 'center',
    width: 29,
  },
  pieChartContainer: {
    alignItems: 'center', flex: 1, justifyContent: 'center', paddingTop: 5,
  },
  scoreDetailContainer: { flex: 1, justifyContent: 'center', paddingTop: 5 },
});

export default styles;
