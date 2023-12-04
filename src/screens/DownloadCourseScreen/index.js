/* eslint-disable no-plusplus */
import {
  View, Text, SectionList, StatusBar,
} from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactNativeBlobUtil from 'react-native-blob-util';
import propTypes from 'prop-types';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import { LocalizationContext } from '../../common/LocalizationProvider';
import { Cards } from './components';
import { getOfflineDownloadData, setOfflinePdfData, setOfflineVideoData } from './actionDownloadCourse';
import { Routes } from '../../routes/Routes';
import { ComponentHeader } from '../../components';
import { setCourseId } from '../ChooseCoursesScreen/actionChooseCourses';
import { setDownloadedCheck } from '../MediaPlayerScreen/actionMediaPlayer';
import useThemedStyles from '../../hooks/useThemedStyles';
import CustomButton from '../../components/CustomButton';
import { ColorTheme } from '../../common/AppStyles';
import Fonts from '../../common/Fonts';
import NoCourseFound from '../../components/NoCourseFound';
import { removeCurrentAffairBookmark } from '../CurrentAffairs/actionCurrentAffairs';
import NetworkStatusContext from '../../common/context/networkStatus/NetworkStatusContext';
import useBackButton from '../../hooks/useBackButton';
import { ThemeContext } from '../../common/ThemeProvider';

function MyLibraryScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const { appTheme, darkMode } = useContext(ThemeContext);
  const { isNetworkConnected } = useContext(NetworkStatusContext);
  const { translations, appLanguage } = useContext(LocalizationContext);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const downloadCourseState = useSelector((state) => state.reducerDownloadCourseUnit);
  const { offlineVideosData } = downloadCourseState;
  const TAG = 'MyLibraryScreen';

  const removeDownloadedFile = async (path) => {
    const isTamil = appLanguage === 'tn' ? 0 : 1;
    const isCurrentAffairRemove = path.includes('Daily Current Affairs') || path.includes('தினசரி நடப்பு நிகழ்வுகள்');
    if (isCurrentAffairRemove) {
      const regex = /\+(.*?)\.png/; // create a regular expression to match the desired pattern
      const match = path.match(regex);
      const result = match[1];
      dispatch(removeCurrentAffairBookmark({ currentAffairId: result }));
    }

    ReactNativeBlobUtil.fs.unlink(path)
      .then(() => {
        dispatch(getOfflineDownloadData({ isTamil }));
        dispatch(setDownloadedCheck(false));
      })
      .catch(() => {

      });
  };

  useFocusEffect(
    React.useCallback(() => {
      const isTamil = appLanguage === 'tn' ? 0 : 1;
      dispatch(getOfflineDownloadData({ isTamil }));
    }, []),
  );
  useEffect(() => {
    setData([]);
    const matchArray = [];
    const newArray = [];

    offlineVideosData.forEach((item) => {
      if (!matchArray.includes(item.courseName)) {
        matchArray.push(item.courseName);
        newArray.push({ courseName: item.courseName, data: [] });
      }
    });
    for (let i = 0; i < offlineVideosData.length; i++) {
      const item = offlineVideosData[i];
      for (let j = 0; j < newArray.length; j++) {
        if (item.courseName === newArray[j].courseName) {
          newArray[j].data.push(item);
          break;
        }
      }
    }
    setData(newArray);
  }, [offlineVideosData]);

  const navigateData = (url, currentItem) => {
    if (url.includes('not1mp4')) {
      const res = {
        url: currentItem?.url,
        title: currentItem?.title?.split('+')[0],
        unit: currentItem?.unit,
        courseName: currentItem?.courseName,
        moduleId: currentItem?.title?.split('+')[1],
        unitId: currentItem?.unitId,
        courseId: currentItem?.courseId,
      };
      dispatch(setCourseId(currentItem?.courseId));
      navigation.navigate(Routes.SCREEN_MEDIA_PLAYER, { previousScreen: TAG });
      dispatch(setOfflineVideoData(res));
    } else if (url.includes('png')) {
      navigation.navigate(Routes.SCREEN_VIEW_SAVED_QUIZ, {
        imageData: url,
      });
    } else {
      const res = {
        url: currentItem?.url,
        title: currentItem?.title,
      };
      dispatch(setOfflinePdfData(res));
      navigation.navigate(Routes.SCREEN_VIEW_PDF);
    }
  };
  const navigateBack = () => {
    if (isNetworkConnected) {
      navigation.goBack();
    }
  };

  useBackButton(() => {
    navigateBack();
    return true;
  });

  return (
    <View style={Styles.mainContainer}>
      <StatusBar animated backgroundColor={appTheme.PRIMARY_BACKGROUND_13} barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <ComponentHeader
        goBack={navigateBack}
        headerText={translations.MY_LIBRARY}
      />
      <View style={Styles.dividerHeader} />
      {!offlineVideosData.length ? (
        <>
          <View style={Styles.noDownloadContainer}>
            <View>
              {/* {darkMode ? <SvgIcon.NoCourse />
                : <SvgIcon.NoCourse />} */}
              <NoCourseFound />
            </View>
            <Text style={Styles.storage}>{translations.NO_COURSE_TEXT}</Text>
          </View>
          <CustomButton
            customStyle={Styles.customButtonCustomStyle}
            onButtonPress={() => navigation.navigate(Routes.SCREEN_COURSE)}
            buttonText={translations.ADD_COURSE}
            isDisabled={false}
            textColor={ColorTheme.WHITE}
            buttonColor={ColorTheme.GREEN_BG}
            fontFamily={Fonts.INTER_BOLD}
          />
        </>

      ) : (
        <View style={Styles.flatListContainer}>
          {data && (
            <SectionList
              sections={data}
              renderItem={({ item }) => (
                <Cards
                  onRemove={() => removeDownloadedFile(item?.url)}
                  onPlayVideo={(url, currentItem) => navigateData(url, currentItem)}
                  item={item}
                />
              )}
              renderSectionHeader={({ section }) => {
                return section?.courseName === '' ? null : (
                  <Text style={Styles.flatListTitle}>
                    {section?.courseName}
                  </Text>
                );
              }}
              style={Styles.sectionListStyle}
            />
          )}
        </View>
      )}
    </View>
  );
}

MyLibraryScreen.propTypes = {
  navigation: propTypes.any,
};

export default MyLibraryScreen;
