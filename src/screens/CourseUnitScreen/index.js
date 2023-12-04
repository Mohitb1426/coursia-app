/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
import React, {
  useCallback, useState, useContext, useEffect,
} from 'react';
import {
  View, TouchableOpacity, Text, FlatList, ScrollView, Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { Card } from './components';
import styles from './style';
import { ColorTheme } from '../../common/AppStyles';
import { ComponentHeader } from '../../components';
import { LocalizationContext } from '../../common/LocalizationProvider';
import Fonts from '../../common/Fonts';
import CustomButton from '../../components/CustomButton';
import Loader from '../../components/Loader';
import {
  setTableData,
  setShowCourse,
  setShowIndex,
  setLastIndex,
  setCourseUnitData,
  getPdfData,
  navigateToViewPdf,
} from '../MyCourseUnitScreen/actionCourseUnit';
import { constants } from './constantsCourseUnit';
import { Routes } from '../../routes/Routes';
import { navigatedSuccessfully } from '../MediaPlayerScreen/actionMediaPlayer';
import useBackButton from '../../hooks/useBackButton';
import SvgIcon from '../../common/SvgIcon';
import { getUserProfile } from '../BuyCourseScreen/actionBuyCourseScreen';
import useThemedStyles from '../../hooks/useThemedStyles';
import { checkRecordedClassPass } from '../EnrollCourseScreen/actionEnrollCourse';

export function CourseUnitScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const { translations, appLanguage } = useContext(LocalizationContext);
  const chooseCoursesState = useSelector((state) => state.reducerChooseCourses);
  const courseUnitState = useSelector((state) => state.reducerCourseUnit);
  const {
    courseModuleData, isLoading, assessmentName,
  } = chooseCoursesState;
  const mediaPlayerState = useSelector((state) => state.reducerMediaPlayer);
  const { gotUrl } = mediaPlayerState;
  const {
    tableData, showCourse, showIndex, lastIndex, showUnit, courseUnitViewedArray, openPdf,
    myCourseUnitViewedArray,
  } = courseUnitState;
  const buyCourseData = useSelector((state) => state.reducerBuyCourse);
  const {
    enrollCourseLoader,
  } = buyCourseData;
  const chooseCourseData = useSelector((state) => state.reducerChooseCourses);
  const { recordedClassToggle } = chooseCourseData;
  const enrollCourseData = useSelector((state) => state.reducerEnrollCourse);
  const { passActivated } = enrollCourseData;

  const [ref, setRef] = useState(null);
  // eslint-disable-next-line no-nested-ternary
  const containerStyle = showIndex
    ? Styles.leftStyle
    : lastIndex
      ? Styles.rightStyle
      : Styles.centerStyle;
  const TAG = 'CourseUnitScreen';

  function renderItem({ item, index }) {
    return (
      <View style={Styles.renderItemView}>
        <Card
          currentIndex={index}
          checkItemActive={!(index === 0 || index === 1)}
          title={item.title}
        />
      </View>
    );
  }

  const onViewRef = useCallback(({ viewableItems }) => {
    const activeIndex = viewableItems[0]?.index;
    if (activeIndex === 0) {
      dispatch(setShowIndex(true));
      dispatch(setLastIndex(false));
      // eslint-disable-next-line no-unsafe-optional-chaining
    } else if (courseModuleData?.length - 1 === activeIndex) {
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
    dispatch(setTableData(viewableItems[0]?.item?.module));
  }, []);

  const viewConfigRef = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const { width } = Dimensions.get('window');
  useEffect(() => {
    if (gotUrl) navigation.navigate(Routes.SCREEN_MEDIA_PLAYER, { previousScreen: TAG });
    return () => dispatch(navigatedSuccessfully());
  }, [gotUrl]);

  const openMedia = (item) => {
    const {
      module_type_name, id, unit_id, batch_id, title,
    } = item;
    const isVideo = module_type_name === constants.VIDEO;
    const isPdf = module_type_name === constants.PPT
      || module_type_name === constants.ASSIGNMENT
      || module_type_name === constants.FILE;
    if (isVideo) {
      return dispatch(
        setCourseUnitData({
          unit_id,
          batch_id,
          id,
          navigation,
        }),
      );
    }
    if (isPdf) {
      const isTamil = appLanguage === 'tn' ? 0 : 1;
      return dispatch(
        getPdfData({
          unit_id,
          batch_id,
          title,
          id,
          navigation,
          isTamil,
        }),
      );
    }
    return null;
  };

  const subscriptionBuy = () => {
    navigation.navigate(Routes.SCREEN_SUBSCRIPTION);
    return null;
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  useBackButton(() => {
    navigation.navigate(Routes.SCREEN_COURSE);
    return true;
  });

  useEffect(() => {
    if (openPdf) {
      dispatch(navigateToViewPdf(false));
      navigation.navigate(Routes.SCREEN_VIEW_PDF);
    }
  }, [openPdf]);

  const courseBuy = () => {
    navigation.navigate(Routes.SCREEN_BUY_COURSE);
  };

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(checkRecordedClassPass());
  }, []);

  const checkLockScreen = () => {
    if (recordedClassToggle) {
      return passActivated && !showCourse;
    }
    return !showCourse;
  };

  const subscriptionButton = (value) => {
    return (
      <>
        {value ? (
          <View style={Styles.buttonSubContainer}>
            <CustomButton
              fontFamily={Fonts.INTER_BOLD}
              customStyle={Styles.customButtonCustomStyle}
              onButtonPress={subscriptionBuy}
              buttonText={translations.BUY_SUBSCRIPTION_PASS}
              isDisabled={false}
              buttonColor={ColorTheme.GREEN_BG}
              textColor={ColorTheme.WHITE}
            />
          </View>
        ) : null}
      </>
    );
  };

  return (
    <View style={Styles.mainContainer}>
      <ComponentHeader goBack={navigateBack} headerText={assessmentName} />
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
          data={courseModuleData}
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
        <View style={Styles.module_mainContainer}>
          <View style={Styles.unitContainer}>
            <View style={[Styles.unitSubContainer, checkLockScreen() ? Styles.containerBgColor : null]}>
              <View style={[Styles.listContainer, checkLockScreen() ? Styles.containerBgColor : null]}>
                {Array.isArray(tableData) && (
                  <ScrollView style={checkLockScreen() ? Styles.scrollViewStyle : null}>
                    {tableData.map((item) => {
                      return (
                        <TouchableOpacity
                          disabled={checkLockScreen()}
                          onPress={() => openMedia(item)}
                          style={Styles.row}
                        >
                          <View style={Styles.colFirst}>
                            {item.module_type_name === 'VIDEO' ? (
                              <SvgIcon.PlayIcon1 />
                            ) : (
                              <SvgIcon.PdfFile />
                            )}
                            <Text numberOfLines={1} style={Styles.titleStyle}>
                              {item.title}
                            </Text>
                          </View>
                          <View style={Styles.colSecond}>
                            {item.video_sec_watch === 0 ? (
                              <View>
                                {courseUnitViewedArray.includes(item.id) || myCourseUnitViewedArray.includes(item.id) ? (
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
                {(checkLockScreen()) && (
                  <View style={Styles.lockContainer}>
                    <View style={Styles.lockSubContainer}>
                      <SvgIcon.Lock />
                    </View>
                  </View>
                )}
              </View>
            </View>
          </View>
          <View style={Styles.buttonContainer}>
            {recordedClassToggle ? subscriptionButton(passActivated)
              : (
                <View style={[Styles.buttonSubContainer, Styles.btnPadding]}>
                  <CustomButton
                    fontFamily={Fonts.INTER_BOLD}
                    customStyle={Styles.customButtonCustomStyle}
                    onButtonPress={courseBuy}
                    buttonText={translations.BUY_THE_FULL_COURSE}
                    isDisabled={false}
                    buttonColor={ColorTheme.GREEN_BG}
                    textColor={ColorTheme.WHITE}
                  />
                </View>
              )}
          </View>
        </View>
      )}
      <Loader show={isLoading || enrollCourseLoader} />
    </View>
  );
}

CourseUnitScreen.propTypes = {
  navigation: propTypes.any,
};
