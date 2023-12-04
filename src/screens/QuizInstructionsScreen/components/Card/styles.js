import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh } from '../../../../common/Dimensions';

const styles = StyleSheet.create({
  cardStyles: {
    borderRadius: 8,
    elevation: 5,
    // minHeight: vh(170),
  },
  firstContainer: {
    borderBottomWidth: 1,
    borderColor: ColorTheme.WHITE,
    justifyContent: 'center',
    paddingVertical: vh(10),
  },
  imageStyle: {
    height: vh(13),
    marginRight: vh(5),
    tintColor: ColorTheme.WHITE,
    width: vh(13),
  },
  mainContainer: {
    paddingHorizontal: vh(10),
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: vh(10),
  },
  subContainerOne: {
    alignItems: 'flex-start',
  },
  subContainerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  subContainerRowSecond: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  subContainerRowThird: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  subContainerSecond: {
    alignItems: 'flex-start',
  },
  textStyle: {
    color: ColorTheme.WHITE,
  },
  thirdContainer: {
    // alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingVertical: vh(10),
  },
  titleStyle: {
    color: ColorTheme.WHITE,
    fontSize: vh(21),
  },
});

export default styles;
