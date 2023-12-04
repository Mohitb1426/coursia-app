import React, {
  useEffect, useRef, useState, useContext,
} from 'react';
import {
  View, Text, FlatList, ScrollView,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import CallDetectorManager from 'react-native-call-detection';
import Orientation from 'react-native-orientation-locker';
import { vh } from '../../common/Dimensions';
import { LocalizationContext } from '../../common/LocalizationProvider';
import { debugLog } from '../../common/Logger';
import { CustomModal } from '../../components';
import {
  bookmarkUpdated, changeFullNotePad,
  setBookmark,
  setTakeNotes, submitNotePad, successfullyFetchNotes,
  getAllNotes, getSaveBookmark, updateMediaData, setUpdatedNote, setIsUpdatingNotes,
  setUpdateNoteId,
  setUpdateNoteTime,
  setShowNotesUpdatedText,
  setWatchedVideo,
  setPauseVideo,
  navigatedSuccessfully,
  setIsFullScreen,
  updateFreemiumMediaData,
} from './actionMediaPlayer';
import {
  BookmarkCard,
  Cards,
  CustomSuccessModal, FeatureComponent, NotesContainer, TextSubmitData, TimeCounter,
} from './components';
import MediaContainer from './components/MediaContainer';
import { constants } from './constantsMediaPlayer';
import Loader from '../../components/Loader';
import styles from './styles';
import useBackButton from '../../hooks/useBackButton';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';
import SvgIcon from '../../common/SvgIcon';

function MediaPlayerScreen({ navigation, route }) {
  const [textValue, setTextValue] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const Styles = useThemedStyles(styles);
  const { darkMode } = useContext(ThemeContext);
  const { translations } = useContext(LocalizationContext);
  const viewRef = useRef();
  const dispatch = useDispatch();
  const childCompRef = useRef();
  const {
    activeVideoData, modalState, takeNotes, showFullPad, isFullScreen,
    isNotesUpdated, notesData, bookmarkVideosData, isLoading,
  } = useSelector((state) => state.reducerMediaPlayer);
  const { tableData } = useSelector((state) => state.reducerCourseUnit);
  const previousScreen = route?.params?.previousScreen;
  const {
    url, titleName, unitName, moduleId,
  } = activeVideoData;

  const [callState, setCallState] = useState({
    featureOn: false,
    incoming: false,
    number: null,
  });
  let callDetector;
  const constPlayNextVideo = async (
    module_id,
    unit_id,
    batch_id,
  ) => {
    if (previousScreen === 'CourseUnitScreen') {
      dispatch(updateFreemiumMediaData({ unit_id, batch_id, module_id }));
    } else {
      dispatch(updateMediaData({ unit_id, batch_id, module_id }));
    }
    dispatch(setPauseVideo(false));
  };

  const tookNotes = () => {
    childCompRef?.current?.pauseVideo();
    dispatch(setTakeNotes());
  };

  const updateNotes = (text, id, time) => {
    childCompRef?.current?.pauseVideo();
    setTextValue(text || '');
    dispatch(setTakeNotes());
    dispatch(setShowNotesUpdatedText(true));
    dispatch(setIsUpdatingNotes(true));
    dispatch(setUpdateNoteId(id));
    dispatch(setUpdateNoteTime(time));
  };

  const changeNotepad = () => {
    if (showFullPad) {
      dispatch(changeFullNotePad(false));
    } else {
      dispatch(changeFullNotePad(true));
    }
  };

  useEffect(() => {
    if (isNotesUpdated) {
      setTimeout(() => {
        dispatch(successfullyFetchNotes());
        dispatch(getAllNotes());
      }, 2000);
    } else {
      dispatch(successfullyFetchNotes());
    }
  }, [isNotesUpdated]);

  useEffect(() => {
    dispatch(getAllNotes());
    dispatch(getSaveBookmark());
    childCompRef?.current?.playVideo();
    return (() => dispatch(navigatedSuccessfully()));
  }, []);

  const capture = () => {
    // eslint-disable-next-line no-unused-expressions
    viewRef?.current.capture().then((uri) => {
      dispatch(setBookmark(uri));
      dispatch(bookmarkUpdated(true));
      setTimeout(() => {
        dispatch(bookmarkUpdated(false));
      }, 2000);
      // eslint-disable-next-line no-sequences
    }),
    (error) => debugLog('Oops, snapshot failed', error);
  };

  const activeNextVideo = tableData.filter((item) => {
    return item.module_type_name === constants.VIDEO && item.id !== moduleId && moduleId < item?.id;
  });

  useBackButton(() => {
    if (isFullScreen) {
      dispatch(setIsFullScreen(false));
      Orientation.lockToPortrait();
      return true;
    }
    childCompRef?.current?.pauseVideo();
    dispatch(setWatchedVideo());
    Orientation.lockToPortrait();
    navigation.goBack();
    return true;
  });

  const checkNotesExist = () => {
    // eslint-disable-next-line eqeqeq
    const notes = notesData.filter((e) => e?.parent?.module_id == moduleId);
    if (notes.length === 0) {
      setShowNotes(false);
    } else {
      setShowNotes(true);
    }
  };

  useEffect(() => {
    checkNotesExist();
  }, [notesData]);

  const checkIncomingCall = () => {
    setCallState({
      ...callState,
      featureOn: true,
    });
    callDetector = new CallDetectorManager(
      (event, number) => {
        // console.log('In CallDetector');
        // eslint-disable-next-line eqeqeq
        if (event == 'Incoming') {
          // console.log('Incoming');
          childCompRef?.current?.pauseVideo();
          setCallState({
            ...callState,
            incoming: true,
            number,
          });
          dispatch(setPauseVideo(true));
        // eslint-disable-next-line eqeqeq
        } else if (event == 'Offhook') {
          // console.log('Offhook');
          childCompRef?.current?.pauseVideo();
          setCallState({
            ...callState,
            incoming: true,
            number,
          });
          dispatch(setPauseVideo(true));
        // eslint-disable-next-line eqeqeq
        } else if (event == 'Missed') {
          // console.log('Missed');
          childCompRef?.current?.playVideo();
          setCallState({
            ...callState,
            incoming: false,
            number: null,
          });
          dispatch(setPauseVideo(false));
        } else {
          // console.log('else condition');
          dispatch(setPauseVideo(false));
        }
      },
      true,
      () => {
        debugLog('Permission Denied');
      },
    );
  };

  const stopCheckingIncomingCall = () => {
    setCallState({
      ...callState,
      featureOn: false,
    });
    if (callDetector) {
      callDetector.dispose();
    }
  };

  useEffect(() => {
    checkIncomingCall();
    return () => {
      stopCheckingIncomingCall();
    };
  }, []);

  return (
    <View style={Styles.mainContainer}>
      {/* ScreenShort Container */}
      <View>
        <ViewShot
          ref={viewRef}
          options={constants.VIEW_SHOT}
        >
          {/* Media Container */}

          <MediaContainer
            ref={childCompRef}
            url={url}
            navigation={navigation}
          />
          {/* Timer Counter */}
          <TimeCounter />
        </ViewShot>
        <View style={Styles.subContainer}>
          <View style={Styles.contentStyle}>
            <Text numberOfLines={1} style={Styles.moduleStyle}>
              {titleName?.split('+')[0]}
            </Text>
            <Text style={Styles.unitStyle}>
              {unitName}
            </Text>
          </View>
          <View style={Styles.featureComponentContainer}>
            <FeatureComponent
              onTakingNotes={tookNotes}
              onCaptureBookMark={capture}
            />
          </View>
        </View>
      </View>

      {/*  Other Feature */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Styles.showNoteMainContainer}
        nestedScrollEnabled

      >
        {/* ShowNote Container */}
        <View>
          {!showNotes ? null : (
            <View style={Styles.imageContainer}>
              <View style={Styles.takeNotesContainer}>
                <Text
                  style={Styles.videosHeadingStyle}
                >
                  {`${translations.NOTES}`}

                </Text>
                {darkMode ? <SvgIcon.DarkMediaPlayerUpArrow /> : <SvgIcon.MediaPlayerUpArrow />}

              </View>
              <View style={Styles.notesFlatListContainer}>
                <FlatList
                  nestedScrollEnabled
                  data={notesData}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <TextSubmitData
                      onPress={(text, id, time) => updateNotes(text, id, time)}
                      item={item}
                    />
                  )}
                  keyExtractor={(item, index) => item.id + index.toString()}
                />
              </View>
            </View>
          )}
        </View>

        {/* Bookmark Container */}
        {!bookmarkVideosData?.length ? null : (
          <View style={Styles.imageContainer}>
            <Text style={Styles.videosHeadingStyle}>{translations.BOOKMARK}</Text>
            <FlatList
              data={bookmarkVideosData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <BookmarkCard
                  onChangeVideoSeek={(time) => {
                    childCompRef?.current?.playAtBookMake(time);
                  }}
                  item={item}
                />
              )}
            />
          </View>
        )}

        {/* Next Container */}
        <View style={Styles.imageContainer}>
          <Text style={Styles.videosHeadingStyle}>
            {activeNextVideo.length ? translations.CAPITAL_NEXT : null}
          </Text>
          {tableData.map((item) => {
            return (
              <Cards
                playNextVideo={(
                  module_id,
                  unit_id,
                  batch_id,
                ) => constPlayNextVideo(module_id, unit_id, batch_id)}
                item={item}
                unit={unitName}
              />
            );
          })}
        </View>
      </ScrollView>

      {takeNotes
        && (
          <CustomModal
            borderTopLeftRadius={0}
            borderTopRightRadius={0}
            visible={takeNotes}
            modalHeight={showFullPad ? '100%' : vh(359)}
          >
            <NotesContainer
              fullNotePad={showFullPad}
              onChangeNotePadSize={changeNotepad}
              value={textValue}
              cancel={() => {
                dispatch(bookmarkUpdated(false));
                dispatch(changeFullNotePad(false));
                dispatch(setTakeNotes());
                childCompRef?.current?.playVideo();
              }}
              submitText={(text) => dispatch(submitNotePad(text))}
              updateNote={(text) => dispatch(setUpdatedNote(text))}
            />
          </CustomModal>
        )}

      <View>
        <CustomSuccessModal
          isVisible={modalState?.isAdded}
          isBookMark={modalState?.modalBookmark}
          onClose={() => {
            dispatch(bookmarkUpdated(false));
            dispatch(setShowNotesUpdatedText(false));
          }}
        />
      </View>
      <Loader show={isLoading} />
    </View>

  );
}

MediaPlayerScreen.propTypes = {
  navigation: propTypes.any,
  route: propTypes.object,

};
export default MediaPlayerScreen;
