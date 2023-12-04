import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../common/Dimensions';

const styles = (AppTheme) => StyleSheet.create({
  backButtonDesign: {
    marginStart: vh(10),
    padding: vh(5),
  },

  closeButton: {
    marginEnd: vh(10),
    padding: vh(5),
  },
  container: {
    alignItems: 'flex-start',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flexDirection: 'column',
    flex: 1,
  },
  listStyle: {
    marginTop: vh(20),
  },
  loadingContainer: {
    justifyContent: 'center',
    position: 'absolute',
    top: 300,
    width: '100%',
  },
  noDataContainer: {
    justifyContent: 'center',
    position: 'absolute',
    top: 180,
    width: '100%',
  },
  outerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  searchContainer: {
    alignItems: 'center',
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    borderColor: AppTheme.SEARCH_BACKGROUND_COLOR,
    borderRadius: vh(10),
    borderWidth: vw(1),
    flexDirection: 'row',
    flex: 1,
    height: vh(45),
    marginEnd: vw(20),
    marginStart: vw(10),
  },
  textInputStyle: {
    color: AppTheme.TEXT_COLOR_CONTENT_02,
    flex: 1,
    fontSize: vh(14),
    fontWeight: '500',
    paddingHorizontal: vw(16),
  },
});

export default styles;
