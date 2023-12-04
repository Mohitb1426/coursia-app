import { StyleSheet } from 'react-native';
import { vh } from '../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  headerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingEnd: 20,
    paddingStart: 0,
    paddingVertical: 10,
  },
  headingStyle: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    flex: 1,
    fontSize: vh(16),
    fontWeight: '600',
    padding: vh(10),
  },
  infoTextStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vh(14),
    fontWeight: '700',
    padding: vh(10),
    textAlign: 'center',
  },
  listItemStyle: {
    color: AppTheme.TEXT_COLOR_HEADING,
    flex: 1,
    fontSize: vh(14),
    fontWeight: '400',
    padding: vh(10),
  },
  seperatorLine: {
    backgroundColor: AppTheme.BORDER_COLOR_01,
    flex: 1,
    height: vh(2),
    marginHorizontal: vh(8),
  },
  textStyle: {
    borderColor: AppTheme.BORDER_COLOR_01,
    borderRadius: vh(6),
    borderWidth: 2,
    color: AppTheme.TEXT_COLOR_HEADING,
    margin: vh(8),
    padding: vh(8),
  },
});

export default styles;
