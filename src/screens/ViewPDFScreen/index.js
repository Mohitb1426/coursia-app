import React, { useState, useEffect, useContext } from 'react';
import {
  Text, View, TouchableOpacity, Image, BackHandler,
} from 'react-native';
import PDFView from 'react-native-view-pdf';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import ReactNativeBlobUtil from 'react-native-blob-util';
import styles from './style';
import Loader from '../../components/Loader';
import Images from '../../common/Images';
import { Blink } from '../MediaPlayerScreen/components/Blink';
import { onProgressDownloading } from '../MediaPlayerScreen/actionMediaPlayer';
import { debugLog } from '../../common/Logger';
import { getOfflineDownloadData } from '../DownloadCourseScreen/actionDownloadCourse';
import { ComponentHeader } from '../../components';
import useThemedStyles from '../../hooks/useThemedStyles';
import SvgIcon from '../../common/SvgIcon';
import { ThemeContext } from '../../common/ThemeProvider';
import { LocalizationContext } from '../../common/LocalizationProvider';

export function ViewPDFScreen({
  navigation, route,
}) {
  const Styles = useThemedStyles(styles);
  const { appLanguage } = useContext(LocalizationContext);
  const { appTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const mediaPlayerState = useSelector((state) => state.reducerMediaPlayer);
  const downloadCourseState = useSelector((state) => state.reducerDownloadCourseUnit);
  const chooseCourseState = useSelector((state) => state.reducerChooseCourses);
  const { activeCourseId } = chooseCourseState;
  const { offlineVideosData } = downloadCourseState;
  const {
    activeVideoData, isDownloadingData, file,
  } = mediaPlayerState;
  const {
    url, titleName, moduleId, courseName, unitName, unitId,
  } = activeVideoData;

  const pdf_url = route?.params?.pdf_url;
  const module_title = route?.params?.module_title;

  const [showLoader, setShowLoader] = useState(true);
  const [pdfDownloadedIcon, setPdfDownloadedIcon] = useState(false);
  const newTitle = file ? titleName : `${titleName}+${moduleId}`;
  const checkDownLoading = () => {
    const isDownloadingProcess = isDownloadingData.find(
      // eslint-disable-next-line eqeqeq
      (o) => o.moduleId == moduleId,
    );
    const isDownloaded = offlineVideosData.some(
      (o) => o.title === newTitle,
    );

    if (!isDownloadingProcess) {
      return (
        <View>
          {isDownloaded ? (
            <View>
              <Image
                source={Images.DOWNLOAD}
                style={Styles.header_backButton}
                resizeMode="contain"
              />
            </View>
          ) : (
            <View>
              <Image
                source={Images.DOWNLOAD_ICON_BLACK}
                style={[Styles.header_backButton, Styles.bgTransparent]}
                resizeMode="contain"
              />
            </View>
          )}
        </View>
      );
    }
    return (
      <Blink>
        <Image
          source={Images.DOWNLOAD}
          style={Styles.header_backButton}
          resizeMode="contain"
        />
      </Blink>
    );
  };

  const startPdfDownloading = () => {
    const isDownloaded = offlineVideosData.some(
      (o) => o.title === newTitle,
    );
    if (!isDownloaded) {
      const isTamil = appLanguage === 'tn' ? 0 : 1;
      const { dirs } = ReactNativeBlobUtil.fs;
      const storagePath = `${dirs.DownloadDir}/.Veranda/${isTamil}/${courseName?.replace(/ /g, '_')}+${activeCourseId}/${unitName?.replace(/ /g, '_')}+${unitId}/${titleName?.replace(/ /g, '_')}+${moduleId}.pdf`;
      ReactNativeBlobUtil.config({
        path: storagePath,
        fileCache: false,
        overwrite: true,
      })
        .fetch(
          'GET',
          activeVideoData?.url,
          {
            'Cache-Control': 'no-store',
          },
        )
        .progress({ interval: 10000 }, (received, total) => {
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
          const filteredData = isDownloadingData.filter((item) => item.moduleId !== moduleId);
          dispatch(onProgressDownloading(filteredData));
          dispatch(getOfflineDownloadData({ isTamil }));
          setPdfDownloadedIcon(true);
          return true;
        })
        .catch((errorMessage, statusCode) => {
          debugLog('error with downloading Pdf', errorMessage);
          debugLog('statusCode', statusCode);
          return true;
        });
    } else {
      setPdfDownloadedIcon(true);
    }
  };

  const showDownloadedIcon = () => {
    const isDownloaded = offlineVideosData.some(
      (o) => {
        return o.title === newTitle;
      },
    );
    if (isDownloaded) {
      setPdfDownloadedIcon(true);
    } else {
      setPdfDownloadedIcon(false);
    }
  };

  useEffect(() => {
    showDownloadedIcon();
  }, []);

  const navigateBack = () => {
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    setShowLoader(true);
    BackHandler.addEventListener('hardwareBackPress', navigateBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', navigateBack);
    };
  }, []);

  if (pdf_url) {
    return (
      <View style={Styles.container}>
        <ComponentHeader
          goBack={() => {
            navigation.goBack();
          }}
          headerText={module_title}
        />
        <PDFView
          fadeInDuration={150.0}
          style={Styles.pdfStyle}
          resource={pdf_url}
          resourceType="url"
          onLoad={() => setShowLoader(false)}
          onError={() => {
            setShowLoader(false);
          }}
        />
        <Loader show={showLoader} />
      </View>
    );
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.headerView}>
        <TouchableOpacity
          activeOpacity={1}
          style={Styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <SvgIcon.BackIcon color={appTheme.PRIMARY_BACKGROUND} />
        </TouchableOpacity>
        <View style={Styles.titleNameContainer}>
          <Text numberOfLines={1} style={Styles.headerText}>
            {titleName?.split('+')[0]}

          </Text>
        </View>
        {!pdfDownloadedIcon ? (
          <View>
            <TouchableOpacity
              style={Styles.buttonStyle}
              onPress={() => startPdfDownloading()}
              disabled={pdfDownloadedIcon}
            >
              {checkDownLoading()}
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View style={Styles.buttonStyle}>
              <Image
                source={Images.DOWNLOAD}
                style={Styles.header_backButton}
                resizeMode="contain"
              />
            </View>
          </View>
        )}
      </View>
      {url ? (
        <PDFView
          fadeInDuration={150.0}
          style={Styles.pdfStyle}
          resource={url}
          resourceType={file ? 'file' : 'url'}
          onLoad={() => setShowLoader(false)}
          onError={() => {
            setShowLoader(false);
          }}
        />
      ) : null}

      <Loader show={showLoader} />
    </View>
  );
}

ViewPDFScreen.propTypes = {
  navigation: propTypes.any,
  route: propTypes.any,
};
