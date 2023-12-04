import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    elevation: 2,
    padding: 10,
  },
  buttonContainer: {
    marginTop: vh(15),
  },
  buttonStyle: {
    height: vh(50),
    width: vh(143),
  },
  centeredView: {
    backgroundColor: ColorTheme.DARK_SHADOW,
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {

  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: ColorTheme.light01,
    borderRadius: 25,
    elevation: 5,
    margin: 20,
    padding: 35,
    shadowColor: ColorTheme.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '90%',
  },
  pleaseImage: {
    marginTop: vh(20),

  },
  pleaseText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(24),
    fontWeight: '700',
    marginVertical: vh(4),
  },
  selectText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(15),
    fontWeight: '700',
    marginVertical: vh(4),
  },
  subText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(14),
    fontWeight: '500',
    marginVertical: vh(4),

  },
});

export default styles;
