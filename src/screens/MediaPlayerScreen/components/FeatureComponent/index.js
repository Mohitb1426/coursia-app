import React, { useEffect, useState, useContext } from 'react';
import {
  View, TouchableWithoutFeedback, Image, Text,
} from 'react-native';
import {
  useRingerMode,
  RINGER_MODE,
  checkDndAccess,
  requestDndAccess,
} from 'react-native-ringer-mode';
import { useAppState } from '@react-native-community/hooks';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ReactNativeBlobUtil from 'react-native-blob-util';
import styles from './styles';
import { ImageContainer } from '../ImageController';
import Images from '../../../../common/Images';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { onProgressDownloading, setDownloadedCheck } from '../../actionMediaPlayer';
import { debugLog } from '../../../../common/Logger';
import { Blink } from '../Blink';
import { getOfflineDownloadData } from '../../../DownloadCourseScreen/actionDownloadCourse';
import { ColorTheme } from '../../../../common/AppStyles';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function FeatureComponent({ onCaptureBookMark, onTakingNotes }) {
  const Styles = useThemedStyles(styles);
  const { mode, setMode } = useRingerMode();
  const dispatch = useDispatch();
  const currentAppState = useAppState();
  const [dndStatus, setDndStatus] = useState(false);
  const { translations, appLanguage } = useContext(LocalizationContext);
  const mediaPlayerState = useSelector((state) => state.reducerMediaPlayer);
  const chooseCourseState = useSelector((state) => state.reducerChooseCourses);
  const { activeCourseId } = chooseCourseState;
  const downloadCourseState = useSelector((state) => state.reducerDownloadCourseUnit);
  const { offlineVideosData } = downloadCourseState;
  const {
    activeVideoData, modalState, isDownloadingData, takeNotes, downloadedCheck,
  } = mediaPlayerState;
  const {
    titleName, unitName, moduleId, courseName, unitId,
  } = activeVideoData;

  useEffect(() => {
    if (currentAppState !== 'active') {
      setMode(RINGER_MODE.normal);
    }
    if (currentAppState === 'active' && dndStatus) {
      setMode(RINGER_MODE.silent);
    }
  }, [currentAppState]);

  const changeMode = async () => {
    const hasDndAccess = await checkDndAccess();
    if (hasDndAccess === false) {
      requestDndAccess();
      return;
    }
    if (!mode) {
      setMode(RINGER_MODE.normal);
      setDndStatus(false);
    } else {
      setMode(RINGER_MODE.silent);
      setDndStatus(true);
    }
  };
  const startVideoDownloading = () => {
    const isTamil = appLanguage === 'tn' ? 0 : 1;
    const { dirs } = ReactNativeBlobUtil.fs;
    const storagePath = `${dirs.DownloadDir}/.Veranda/${isTamil}/${courseName?.replace(/ /g, '_')}+${activeCourseId}/${unitName?.replace(/ /g, '_')}+${unitId}/${titleName?.replace(/ /g, '_')}+${moduleId}.not1mp4`;
    ReactNativeBlobUtil.config({
      path: storagePath,
      fileCache: false,
      overwrite: true,
    })
      .fetch(
        'GET',
        activeVideoData?.url,
        // 'https://media.geeksforgeeks.org/wp-content/uploads/20201217192146/Screenrecorder-2020-12-17-19-17-36-828.mp4?_=1',
        {
          'Cache-Control': 'no-store',
        },
      )
      .progress({ interval: 10000 }, (received, total) => {
        debugLog('video', (received / total) * 100);
        const filteredData = isDownloadingData.filter((item) => item.moduleId !== moduleId);
        dispatch(onProgressDownloading(filteredData));
        const data = {
          moduleId,
          process: ((received / total) * 100),
        };
        const tempItem = isDownloadingData;
        tempItem.push(data);
        dispatch(onProgressDownloading(tempItem));
      })
      .then(() => {
        debugLog('video done');
        const filteredData = isDownloadingData.filter((item) => item.moduleId !== moduleId);
        dispatch(onProgressDownloading(filteredData));
        dispatch(getOfflineDownloadData({ isTamil }));
        dispatch(setDownloadedCheck(true));
        return true;
      })
      .catch((errorMessage, statusCode) => {
        debugLog('error with downloading file', errorMessage);
        debugLog('statusCode', statusCode);
        return true;
      });
  };
  const isDownloadingProcess = isDownloadingData.find(
    (o) => o.moduleId === moduleId,
  );
  const isDownloaded = offlineVideosData.some(
    (o) => o.title === `${titleName}+${moduleId}`,
  );

  useEffect(() => {
    if (isDownloaded) {
      dispatch(setDownloadedCheck(true));
    } else {
      dispatch(setDownloadedCheck(false));
    }
  }, [isDownloaded]);

  const checkDownLoading = () => {
    if (!isDownloadingProcess) {
      return (
        <View>
          {isDownloaded || downloadedCheck ? (
            <View style={Styles.textViewStyle}>
              <Image
                source={Images.DOWNLOAD}
                style={Styles.imageStyle}
                resizeMode="contain"
              />
              <Text style={[Styles.textStyle, { color: ColorTheme.GREEN_BG }]}>
                {translations.DOWNLOADED}
              </Text>
            </View>
          ) : (
            <View style={Styles.textViewStyle}>
              <Image
                source={Images.DOWNLOAD_ICON_BLACK}
                style={Styles.imageStyle}
                resizeMode="contain"
              />
              <Text style={Styles.textStyle}>
                {translations.DOWNLOAD}
              </Text>
            </View>
          )}
        </View>
      );
    }
    return (
      <View style={Styles.textViewStyle}>
        <Blink>
          <Image
            source={Images.DOWNLOAD}
            style={Styles.imageStyle}
            resizeMode="contain"
          />
        </Blink>
        <Text style={[Styles.textStyle, { color: ColorTheme.GREEN_BG }]}>
          {translations.DOWNLOADING}
        </Text>
      </View>

    );
  };
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.subContainer}>
        <ImageContainer
          image={!mode ? Images.ACTIVE_DND : Images.DND}
          title={translations.DND}
          customStyle
          onPress={changeMode}
        />
        <ImageContainer
          image={
            modalState?.modalBookmark
              ? Images.ACTIVE_BOOKMARK
              : Images.BOOKMARK
          }
          title={translations.ADD_BOOKMARK}
          customStyle
          onPress={onCaptureBookMark}
        />
        <ImageContainer
          image={takeNotes ? Images.ACTIVE_NOTE : Images.NOTE}
          title={translations.TAKE_NOTES}
          customStyle
          onPress={onTakingNotes}
        />

        <View style={Styles.downloadButtonContainer}>
          <TouchableWithoutFeedback
            disabled={isDownloadingProcess || isDownloaded}
            onPress={startVideoDownloading}
          >
            <View style={Styles.downloadButtonSubContainer}>
              {checkDownLoading()}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

FeatureComponent.propTypes = {
  onCaptureBookMark: propTypes.func,
  onTakingNotes: propTypes.func,
};
