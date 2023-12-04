import { StyleSheet } from 'react-native';
import { vh } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  mainContainer: {
    // flex: 0.4,
    flex: 1,
    paddingRight: 50,
    // backgroundColor: '#000000'
  },
  topValueContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 70,
    marginRight: 20,
    paddingTop: 20,
  },
  topperCardContainer: { paddingHorizontal: 16, paddingTop: 12 },
  topperValueInnerContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  upperLabel: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(16),
    fontWeight: '400',
  },
});

export default styles;
