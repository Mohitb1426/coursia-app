import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../../common/Dimensions';
import Fonts from '../../../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  flatListContainer: {
    marginLeft: 5,
  },
  imageContainer: {
    height: vw(20),
    marginTop: vh(4),
    width: vw(20),
  },
  imageMainContainer: { flexDirection: 'row', flex: 1 },
  imageSubContainer: { alignItems: 'flex-start', flex: 0.1 },
  itemContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderRadius: 5,
    flexDirection: 'row',
    height: vh(55),
    marginVertical: 5,
    padding: '2%',
    width: '100%',
  },
  timeContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    top: '1%',
    width: '100%',
  },
  titleContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
  videoChapter: {
    color: AppTheme.TEXT_COLOR_CONTENT_01,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(12),
    fontWeight: '300',
  },
  videoContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderColor: AppTheme.BORDER_COLOR,
    borderRadius: 5,
    borderWidth: 0.5,
    justifyContent: 'center',
    marginVertical: '1.5%',
  },
  videoName: {
    color: AppTheme.TEXT_COLOR_HEADING_05,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(14),
    fontWeight: '400',
  },
});

export default styles;
