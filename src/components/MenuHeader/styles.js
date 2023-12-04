import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  appIconContainer: { alignItems: 'center', justifyContent: 'center', marginLeft: 5 },
  imageStyle: {
    height: vh(36),
    marginLeft: vh(10),
    width: vw(136),
  },
  leftContainer: { flex: 1, flexDirection: 'row' },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    elevation: 5,
    flexDirection: 'row',
    height: vh(62),
    shadowColor: AppTheme.SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,

    shadowRadius: 3.84,
    width: '100%',
  },
  menuContainer: {
    alignItems: 'center',
    height: 39,
    justifyContent: 'center',
    marginLeft: 10,
    width: 43,
  },
  notificationCount: {
    color: ColorTheme.WHITE,
    fontSize: 7,
    textAlign: 'center',
  },
  notificationCountContainer: {
    backgroundColor: ColorTheme.ERROR_RED,
    borderRadius: 200,
    height: 8,
    justifyContent: 'center',
    position: 'absolute',
    right: 12,
    top: 10,
    width: 8,
  },
  notificatoinIcon: {
    height: vh(32),
    width: vw(32),
  },
  rightContainer: { flexDirection: 'row' },
  rightIconContainer: {
    alignItems: 'center',
    height: 39,
    justifyContent: 'center',
    marginRight: 9,
    width: 43,
  },
});

export default styles;
