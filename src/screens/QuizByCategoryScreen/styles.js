import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh } from '../../common/Dimensions';

const styles = StyleSheet.create({
  flatList: {
    marginBottom: 10,
  },
  greenArrowImageContainer: {
    bottom: 0,
    position: 'absolute',
    right: 10,
    zIndex: 999,
  },
  greenArrowStyle: {
    height: vh(60),
    width: vh(60),
  },
  listContainerStyle: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: ColorTheme.white,
    flex: 1,
    zIndex: 1,
  },
  sectionContainer: {
    flex: 0.5,
  },
  selectedContainerStyle: {
    borderColor: ColorTheme.GREY_80,
    borderRadius: 6,
    borderWidth: 2,
    margin: vh(8),
  },
  unSelectedContainerStyle: {
    margin: vh(8),
  },
});

export default styles;
