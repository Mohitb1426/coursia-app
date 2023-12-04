import { StyleSheet } from 'react-native';
import { useContext, useMemo } from 'react';
import { ThemeContext } from '../../common/ThemeProvider';
import { FontTheme, ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';

export const StyleComponentBottomTabs = () => {
  const theme = useContext(ThemeContext);
  const isDarkMode = theme.darkMode;

  return useMemo(() => {
    return StyleSheet.create({
      activeTabContainer: {
        borderTopColor: ColorTheme.green06,
        borderTopWidth: 2,
      },
      buttonContainer: {
        alignItems: 'center',
        height: vh(70),
        justifyContent: 'center',
      },
      freeIconStyle: {
        left: 32,
        position: 'absolute',
        top: 6,
      },
      iconStyle: {
        height: vh(28),
        resizeMode: 'contain',
        width: vw(28),
      },
      image: {
        alignSelf: 'center',
      },
      imageContainer: {
        alignItems: 'center',
        flexDirection: 'column',
      },
      tabButtonContainer: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        width: 40,
      },
      textLabel: {
        fontFamily: FontTheme.REGULAR,
        fontSize: vh(10),
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: vh(15),
        marginBottom: vh(10),
      },
    });
  }, [isDarkMode]);
};

// const StyleComponentBottomTabs = StyleSheet.create({
//   iconStyle: {
//     height: vh(24),
//     resizeMode: 'contain',
//     width: vw(24),
//   },
// });

// export default StyleComponentBottomTabs;
