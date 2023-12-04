import React, {
  useCallback, useState, useContext, useEffect,
} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { useBackHandler } from '@react-native-community/hooks';
import { Card } from './components';
import styles from './style';
import Images from '../../common/Images';
import { ComponentHeader, SearchComponent } from '../../components';
import { LocalizationContext } from '../../common/LocalizationProvider';
import Loader from '../../components/Loader';
import {
  setTableData, setShowCourse, setShowIndex,
  setLastIndex, setShowUnit, getPaidPdfData, getPaidVideoData, navigateToViewPdf,
} from './actionCourseUnit';
import { constants } from './constantsCourseUnit';
import { Routes } from '../../routes/Routes';
import { navigatedSuccessfully } from '../MediaPlayerScreen/actionMediaPlayer';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';

export function MyCourseUnitScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const { appTheme, darkMode } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { translations, appLanguage } = useContext(LocalizationContext);
  const chooseCoursesState = useSelector((state) => state.reducerChooseCourses);
  const { assessmentName } = chooseCoursesState;
  const courseMyUnitState = useSelector((state) => state.reducerMyCourses);
  const courseUnitState = useSelector((state) => state.reducerCourseUnit);
  const { myCourseUnitData } = courseMyUnitState;
  const {
    tableData, showIndex, lastIndex, showUnit, myCourseUnitViewedArray, openPdf,
  } = courseUnitState;
  const [ref, setRef] = useState(null);
  const [isLoading] = useState(false);
  // eslint-disable-next-line no-nested-ternary
  const containerStyle = showIndex ? Styles.leftStyle
    : lastIndex
      ? Styles.rightStyle
      : Styles.centerStyle;
  const mediaPlayerState = useSelector((state) => state.reducerMediaPlayer);
  const {
    gotUrl,
  } = mediaPlayerState;
  const TAG = 'MyCoursesScreen';

  function renderItem({ item, index }) {
    return (
      <View style={Styles.renderItemView}>
        <Card
          currentIndex={index}
          checkItemActive={false}
          title={item?.Unit?.title}
        />
      </View>
    );
  }

  useEffect(() => {
    if (openPdf) {
      dispatch(navigateToViewPdf(false));
      navigation.navigate(Routes.SCREEN_VIEW_PDF);
    }
  }, [openPdf]);

  const onViewRef = useCallback(({ viewableItems }) => {
    const activeIndex = viewableItems[0]?.index;
    if (activeIndex === 0) {
      dispatch(setShowIndex(true));
      dispatch(setLastIndex(false));
      // eslint-disable-next-line no-unsafe-optional-chaining
    } else if (myCourseUnitData?.tabWiseData?.length - 1 === activeIndex) {
      dispatch(setLastIndex(true));
      dispatch(setShowIndex(false));
    } else {
      dispatch(setLastIndex(false));
      dispatch(setShowIndex(false));
    }
    if (activeIndex >= 1) {
      dispatch(setShowCourse(false));
    } else {
      dispatch(setShowCourse(true));
    }
    dispatch(setTableData(viewableItems[0]?.item?.TabData));
  }, []);

  const viewConfigRef = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const { width } = Dimensions.get('window');
  const changeTheActiveScroll = (index) => {
    setTimeout(() => {
      ref.scrollToIndex({
        animated: true,
        index,
        viewPosition: 0.5,
      });
    }, 1500);
  };

  const openMedia = (item) => {
    const {
      module_type_name, id, unit_id, batch_id, title,
    } = item;
    const isVideo = module_type_name === constants.VIDEO;
    const isPdf = (module_type_name === constants.PPT
      || module_type_name === constants.ASSIGNMENT
      || module_type_name === constants.FILE
      || module_type_name === constants.QUIZ);
    if (isVideo) {
      return dispatch(getPaidVideoData({
        unit_id, batch_id, id, navigation,
      }));
    }
    if (isPdf) {
      const isTamil = appLanguage === 'tn' ? 0 : 1;
      return dispatch(getPaidPdfData({
        unit_id, batch_id, title, id, navigation, isTamil,
      }));
    }
    return null;
  };

  useEffect(() => {
    if (gotUrl) navigation.navigate(Routes.SCREEN_MEDIA_PLAYER, { previousScreen: TAG });
    return (() => dispatch(navigatedSuccessfully()));
  }, [gotUrl]);

  const navigateBack = () => {
    navigation.goBack();
  };

  const backActionHandler = () => {
    dispatch(navigatedSuccessfully());
    navigateBack();
    return true;
  };

  useBackHandler(backActionHandler);

  return (
    <View style={Styles.mainContainer}>
      <StatusBar animated backgroundColor={appTheme.PRIMARY_BACKGROUND_10} barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <ComponentHeader goBack={navigateBack} headerText={assessmentName} />

      <SearchComponent
        data={myCourseUnitData?.tabWiseData || []}
        showUnit={changeTheActiveScroll}
        checkUnit
        checkSearchStatus={() => dispatch(setShowUnit(!showUnit))}
      />

      <View style={Styles.flatListContainer}>
        <FlatList
          ref={(reference) => {
            setRef(reference);
          }}
          onScrollToIndexFailed={(info) => {
            const wait = new Promise((resolve) => {
              setTimeout(resolve, 100);
            });
            wait.then(() => {
              ref.current?.scrollToIndex({
                index: info.index,
                animated: true,
                viewPosition: 0.5,
              });
            });
          }}
          initialNumToRender={150}
          data={myCourseUnitData?.tabWiseData || []}
          contentContainerStyle={containerStyle}
          renderItem={showUnit ? renderItem : null}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          snapToAlignment="center"
          snapToInterval={width * 0.8}
          viewabilityConfig={viewConfigRef}
          onViewableItemsChanged={onViewRef}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {showUnit && (
        <View style={Styles.unitContainer}>
          <View
            style={Styles.unitSubContainer}
          >
            <View
              style={Styles.listContainer}
            >
              {Array.isArray(tableData) && (
                <ScrollView>
                  {tableData.map((item) => {
                    return (
                      <TouchableOpacity
                        key={item.id}
                        onPress={() => openMedia(item)}
                        style={Styles.row}
                      >
                        <View style={Styles.colFirst}>
                          <Image
                            source={
                              item.module_type_name === 'VIDEO'
                                ? Images.VER_VIDEO_ICON
                                : Images.VER_PDF_ICON
                            }
                          />
                          <Text style={Styles.titleStyle}>{item.title}</Text>
                        </View>
                        <View style={Styles.colSecond}>
                          {item.text_to_show === constants.NOT_VIEWED ? (
                            <View>
                              {myCourseUnitViewedArray.includes(item.id) ? (
                                <Text style={Styles.viewStyle}>{translations.VIEWED}</Text>
                              ) : (
                                <Text style={Styles.notViewStyle}>{translations.NOT_VIEWED}</Text>
                              )}
                            </View>
                          ) : (
                            <Text style={Styles.viewStyle}>{translations.VIEWED}</Text>
                          )}
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              )}

            </View>
          </View>
        </View>
      )}
      <Loader show={isLoading} />
    </View>
  );
}

MyCourseUnitScreen.propTypes = {
  navigation: propTypes.any,
};
