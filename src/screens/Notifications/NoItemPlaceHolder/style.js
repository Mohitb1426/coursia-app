import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../common/AppStyles';
import { vh } from '../../../common/Dimensions';
import Fonts from '../../../common/Fonts';

const styles = StyleSheet.create({
  placeHolderContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: vh(140),
  },

  placeHolderText: {
    color: ColorTheme.GREEN_BG,
    fontFamily: Fonts.ROBOTO,
    fontSize: vh(21),
    fontWeight: 'bold',
    position: 'absolute',
  },
});

export default styles;
