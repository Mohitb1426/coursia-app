import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../../common/AppStyles';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = StyleSheet.create({
  activateText: {
    color: ColorTheme.BLACK_1,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(20),
    fontWeight: '700',
    marginTop: vh(10),
    textAlign: 'center',
  },
  btnText: {
    color: ColorTheme.WHITE,
    fontFamily: Fonts.ROBOTO,
    fontSize: vw(16),
    fontWeight: '700',
    marginVertical: vh(4),
  },
  button: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREEN_BG,
    borderColor: ColorTheme.GREEN_BG,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: vh(35),
    minWidth: vw(107),
    paddingVertical: vw(12),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  centeredView: {
    backgroundColor: ColorTheme.DARK_SHADOW,
    flex: 1,
    justifyContent: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: ColorTheme.light01,
    borderRadius: 12,
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
  noTextButtonStyle: {
    backgroundColor: ColorTheme.WHITE,
    borderColor: ColorTheme.GREEN_BG,
  },
  noTextStyle: {
    color: ColorTheme.GREEN_BG,
  },
  pleaseImage: {
    marginTop: vh(20),

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
