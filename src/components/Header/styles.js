import { StyleSheet, Platform } from 'react-native';
import { ColorTheme, FontTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';

const styles = StyleSheet.create({
  arrowContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.accent,
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: vw(6),
    paddingVertical: vh(6),
  },
  backArrow: {
    borderRadius: Platform.OS === 'android' ? vw(10) : 0,
    left: 0,
    overflow: Platform.OS === 'android' ? 'hidden' : null,
    position: 'absolute',
    top: 3,
    zIndex: 2,

  // marginBottom: Platform.OS === 'ios' ? 0 : -35,
  },
  backIconRedesign: {
    height: vh(22),
    width: vw(22),
  },
  backImage: {
    height: 24,
    width: 24,
  },
  centerText: {
    alignItems: 'center',
    alignSelf: 'center',
    color: ColorTheme.APPLE_BLACK,
    fontFamily: 'bold',
    fontSize: vh(20),
    justifyContent: 'center',
    lineHeight: 28,
  },
  container: {
    height: vh(54),
    marginTop: vh(2),
    paddingHorizontal: vw(20),
    paddingTop: vh(12),
  },
  containerView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  rightContent: {
    alignSelf: 'flex-end',
    height: 44,
    marginRight: 20,
    marginTop: Platform.OS === 'ios' ? 0 : -35,
  },
  rightText: {
    color: ColorTheme.blue,
    fontFamily: FontTheme.REGULAR,
    fontSize: 18,
    lineHeight: 24,
    marginHorizontal: 3,
    marginVertical: 3,
  },
  rightView: {
    borderRadius: Platform.OS === 'android' ? vw(12) : 0,
    overflow: Platform.OS === 'android' ? 'hidden' : null,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
  // marginBottom: Platform.OS === 'ios' ? 0 : -35,
  },
  subContainer: {
    justifyContent: 'center',
  },
});

export default styles;
