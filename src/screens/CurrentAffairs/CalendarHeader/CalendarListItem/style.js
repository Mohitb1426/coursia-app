import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  backgroundGreen06: {
    backgroundColor: AppTheme.PRIMARY_COLOR,
  },
  backgroundGreenColor: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_06,
  },
  colorGreenCOlor: {
    color: AppTheme.PRIMARY_COLOR,
  },
  colorWhiteColor: {
    color: AppTheme.TEXT_COLOR_HEADING_04,
  },
  dateStyle: {
    alignSelf: 'center',
    color: AppTheme.white,
    fontSize: vh(17),
    fontWeight: '600',
  },
  innerDateCard: {
    backgroundColor: AppTheme.PRIMARY_COLOR,
    borderRadius: vh(5),
    flexDirection: 'column',
    paddingHorizontal: vh(13),
    paddingVertical: vh(10),
  },
  monthStyle: {
    color: AppTheme.white,
    fontSize: vh(13),
    fontWeight: '400',
  },
  spacer: {
    height: vh(20),
    width: vw(20),
  },
  topVerticalContainer: {
    alignItems: 'center',
    marginEnd: vw(16),
  },
  triangleStyle: {
    marginTop: -2,
    width: 20,
  },
});

export default styles;
