import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';

const styles = StyleSheet.create({
  TermsSectionButton: {
    height: vh(30),
    justifyContent: 'center',
  },

  TermsSectionImage: {
    backgroundColor: ColorTheme.VERY_LIGHT_GREY,
    position: 'absolute',
    right: vw(10),
  },

  TermsSectionMainContainer: {
    flex: 1,
  },

  TermsSectionWebView: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
