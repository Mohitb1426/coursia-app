import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: (fullWidth, height) => {
    return {
      borderRadius: 14,
      // borderWidth: 1,
      height: height === null || undefined || '' ? 197 : height,
      marginTop: 16,
      overflow: 'hidden',
      width: fullWidth === 1 ? '100%' : '48%',
    };
  },
  cardImageStyle: {
    borderRadius: 14,
    height: '100%',
    resizeMode: 'stretch',
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});

export default styles;
