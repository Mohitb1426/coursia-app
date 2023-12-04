import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  displayDataContainer: { flexDirection: 'row', flexWrap: 'nowrap' },
  labelStyle: {
    color: ColorTheme.NATIVE_LIGHT_GREY,
    flexWrap: 'wrap',
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: vh(14),
    fontWeight: '500',
    width: '85%',
  },
  listItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  pieChartContainer: {
    flex: 2,
    paddingHorizontal: 16,
    paddingTop: vh(24),
  },
  pieChartStyle: {
    height: vh(230),
  },
  subContainer: {
    alignItems: 'flex-start',
    flex: 1.4,
    justifyContent: 'center',
    // backgroundColor:'green'
  },
  textContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewStyle: {
    alignItems: 'center',
    borderRadius: vh(25),
    height: vh(24),
    justifyContent: 'center',
    marginBottom: vh(6),
    marginHorizontal: vh(3),
    width: vh(24),
    // marginVertical: vh(6),
  },
});

export default styles;
