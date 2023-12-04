import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../common/AppStyles';
import { vh, vw } from '../../../common/Dimensions';
import { SAFE_AREA_PADDING } from './constantsScreenCamera';

const styles = StyleSheet.create({
  banner: {
    bottom: 0,
    left: 0,
    opacity: 0.4,
    position: 'absolute',
  },
  bold: {
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: ColorTheme.white,
    flex: 1,
  },
  hyperlink: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  permissionText: {
    fontSize: 17,
  },
  permissionsContainer: {

  },
  imageStyle: {
    height: vh(44),
    width: vw(44),
  },
  welcome: {
    fontSize: 38,
    fontWeight: 'bold',
    maxWidth: '80%',
  },
  buttonContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  subContainer: {
    flex: 1, 
    justifyContent: 'flex-end',
  },
});

export default styles;
