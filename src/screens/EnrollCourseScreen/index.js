/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext, useEffect } from 'react';
import {
  View, Text, Image, ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SvgCssUri } from 'react-native-svg';
import propTypes from 'prop-types';
import styles from './style';
import CustomButton from '../../components/CustomButton';
import Fonts from '../../common/Fonts';
import { ColorTheme } from '../../common/AppStyles';
import Images from '../../common/Images';
import { LocalizationContext } from '../../common/LocalizationProvider';
import { FREE } from '../../common/ScreensConstants';
import { Routes } from '../../routes/Routes';
import useBackButton from '../../hooks/useBackButton';
import { isImage } from '../../utilities/commonFunction/checkImage';
import { ComponentHeader, Loader } from '../../components';
import SvgIcon from '../../common/SvgIcon';
import { getUserProfile, setDefaultPaymentLink } from '../BuyCourseScreen/actionBuyCourseScreen';
import useThemedStyles from '../../hooks/useThemedStyles';
import { checkRecordedClassPass } from './actionEnrollCourse';

export function EnrollCourseScreen({ navigation }) {
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const chooseCourseData = useSelector((state) => state.reducerChooseCourses);
  const buyCourseData = useSelector((state) => state.reducerBuyCourse);
  const enrollCourseData = useSelector((state) => state.reducerEnrollCourse);
  const { passActivated } = enrollCourseData;
  const {
    enrollCourseLoader,
  } = buyCourseData;
  const { courseUnitData, courseSummary, recordedClassToggle } = chooseCourseData;
  const { translations } = useContext(LocalizationContext);
  const isFreeCourse = FREE.includes(courseUnitData[0]?.course_type_clp);

  const courseBuy = () => {
    dispatch(setDefaultPaymentLink());
    navigation.navigate(Routes.SCREEN_BUY_COURSE);
  };
  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(checkRecordedClassPass());
  }, []);

  const subscriptionPassBuy = () => {
    navigation.navigate(Routes.SCREEN_SUBSCRIPTION);
    return null;
  };

  const navigateBack = () => {
    navigation.goBack();
    return true;
  };

  useBackButton(() => {
    navigateBack();
    return true;
  });

  const subscriptionButton = (value) => {
    return (
      <>
        {value ? (
          <CustomButton
            customStyle={Styles.customButtonCustomStyle}
            onButtonPress={subscriptionPassBuy}
            buttonText={translations.BUY_SUBSCRIPTION_PASS}
            isDisabled={false}
            textColor={ColorTheme.WHITE}
            buttonColor={ColorTheme.GREEN_BG}
            fontFamily={Fonts.INTER_BOLD}
          />
        ) : null}
      </>
    );
  };

  return (
    <View style={Styles.subContainer}>
      <ComponentHeader goBack={navigateBack} headerText={translations.ADD_COURSE} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.mainContainer}>
          <View
            style={
              isImage(courseUnitData[0]?.image_url)
                ? Styles.container
                : [Styles.container, { backgroundColor: ColorTheme.BASE_BLUE }]
            }
          >
            <View style={Styles.firstImage_Container}>
              {isImage(courseUnitData[0]?.image_url) ? (
                <Image
                  style={Styles.firstImage}
                  source={{ uri: courseUnitData[0]?.image_url || '' }}
                />
              ) : (
                <SvgCssUri
                  preserveAspectRatio="none"
                  width="100%"
                  height="100%"
                  uri={courseUnitData[0]?.image_url || ''}
                />
              )}
            </View>
          </View>

          <View style={Styles.container2}>
            <View>
              <View style={Styles.text_Container}>
                <Text style={Styles.course_Heading}>{courseUnitData[0]?.display_title}</Text>
              </View>
              <View style={Styles.mainPrice_Container}>
                <Text style={Styles.priceContainer}>
                  {'\u20B9'}
                  {' '}
                  {isFreeCourse ? translations.FREE : courseUnitData[0]?.course_price}
                </Text>
                {!isFreeCourse && (
                  <Text style={Styles.underline_PriceContainer}>
                    {'\u20B9'}
                    {' '}
                    {Number(courseUnitData[0]?.course_price) * 1.5}
                  </Text>
                )}
                <View style={Styles.dotStyle} />
                <Text style={Styles.taxStyle}>{translations.INCLUDING_TAXES}</Text>
              </View>

              <View style={Styles.image_UserContainer}>
                <Image source={Images.USER} style={Styles.image_UserStyle} />
                <Text style={Styles.learnersText}>
                  {courseUnitData[0]?.learners_count}
                  {' '}
                  {translations.LEARNERS}
                </Text>
              </View>
            </View>

            <View style={Styles.container4}>
              <View style={Styles.subHeading}>
                <Text style={Styles.course_Container_Heading}>{translations.ABOUT_COURSE}</Text>
              </View>
              <View style={Styles.scrollView_Style}>
                <Text style={Styles.third_Container_Text}>
                  {courseUnitData[0]?.description_text}
                </Text>
              </View>
            </View>
            <View style={Styles.noOfItemsContainer}>
              <View style={Styles.numberContainer}>
                <View style={Styles.greenCircle}>
                  <SvgIcon.CameraIcon />
                </View>
                <Text style={Styles.itemContainer}>
                  {courseSummary?.videos}
                  {' '}
                  {translations.VIDEOS}
                </Text>
              </View>
              <View style={Styles.numberContainer}>
                <View style={Styles.greenCircle}>
                  <SvgIcon.UnitIcon />
                </View>
                <Text style={Styles.itemContainer}>
                  {courseSummary?.units}
                  {' '}
                  {translations.UNITS}
                </Text>
              </View>

              <View style={Styles.numberContainer}>
                <View style={Styles.greenCircle}>
                  <SvgIcon.FilesIcons />
                </View>
                <Text style={Styles.itemContainer}>
                  {courseSummary?.pdf}
                  {' '}
                  {translations.FILES}
                </Text>
              </View>

              <View style={Styles.numberContainer}>
                <View style={Styles.greenCircle}>
                  <SvgIcon.QuizIcon />
                </View>
                <Text style={Styles.itemContainer}>
                  {courseSummary?.assignment}
                  {' '}
                  {translations.QUIZ_MODULES}
                </Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
      <View style={Styles.buttonContainer}>
        <View style={Styles.mainButton_Container}>
          {recordedClassToggle
            ? subscriptionButton(passActivated)
            : (
              <CustomButton
                customStyle={Styles.customButtonCustomStyle}
                onButtonPress={courseBuy}
                buttonText={isFreeCourse ? translations.ADD_LIBRARY : translations.BUY_NOW}
                isDisabled={false}
                textColor={ColorTheme.WHITE}
                buttonColor={ColorTheme.GREEN_BG}
                fontFamily={Fonts.INTER_BOLD}
              />
            )}
        </View>
      </View>
      <Loader show={enrollCourseLoader} />
    </View>
  );
}
EnrollCourseScreen.propTypes = {
  navigation: propTypes.any,
};
