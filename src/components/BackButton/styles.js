import { StyleSheet } from 'react-native';
import { vh, vw } from '../../common/Dimensions';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    borderRadius: 45 / 2,
    height: vh(45),
    justifyContent: 'center',
    width: vw(45),
  },
});

export default styles;
