import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';
import Fonts from '../../common/Fonts';

const styles = (AppTheme) => StyleSheet.create({
  Card_Container: {
    flex: 1,
    height: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: vh(10),
    position: 'absolute',
    width: '90%',
  },
  CustomTextInput_container: {
    backgroundColor: ColorTheme.WHITE,
    borderBottomWidth: 0.5,
    height: vh(60),
    marginBottom: vh(5),
    marginTop: vh(5),
    width: vw(291),
  },
  PrivacySection_Button: {
    height: vh(30),
    justifyContent: 'center',
  },
  PrivacySection_Image: {
    backgroundColor: ColorTheme.VERY_LIGHT_GREY,
    height: vh(20),
    position: 'absolute',
    right: 10,
    // tintColor: 'green',
    tintColor: ColorTheme.GREEN,
    width: vw(20),
  },
  Second_Container: {
    alignItems: 'center',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: vh(1),
  },
  Second_Container_Text: {
    color: ColorTheme.APPLE_BLACK,
    fontWeight: 'bold',
    paddingHorizontal: vh(4),
  },
  Second_heading: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_REGULAR,
    fontSize: vh(18),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
  },
  TermsSection_Button: {
    height: vh(30),
    justifyContent: 'center',
  },
  TermsSection_Image: {
    backgroundColor: ColorTheme.VERY_LIGHT_GREY,
    height: vh(20),
    position: 'absolute',
    right: 10,
    width: vw(20),
  },
  TermsSection_WebView: {
    height: '100%',
    width: '100%',
  },
  TermsSection_mainContainer: {
    flex: 1,
  },
  Third_Container: {
    alignItems: 'center',
    flex: 0.5,
    justifyContent: 'center',
    marginHorizontal: vh(20),
    // backgroundColor: "red",
  },
  backButton: {
    alignItems: 'center',
    height: vw(24),
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    width: vw(24),
  },
  bgImageStyle: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 10,
    height: vh(6),
    justifyContent: 'center',
    width: vw(85),
  },
  buttonContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND_01,
    elevation: 1.5,
    paddingVertical: vh(15),
  },
  container: {
    height: vw(200),
    overflow: 'hidden',
    width: '100%',
  },
  container2: {
    flex: 1,
  },
  container3: {
    // flex: 0.1
    marginStart: vw(15),
  },
  container4: {
    flex: 1,
    paddingHorizontal: vw(16),
  },
  coursePrice: {
    color: ColorTheme.WHITE,
    fontSize: vh(3),
  },
  course_Container_Heading: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vh(20),
    fontWeight: '700',
  },
  course_Heading: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vh(20),
    fontWeight: '700',
    paddingHorizontal: vw(16),
  },
  customButtonCustomStyle: {
    borderRadius: 6,
    height: vh(54),
    marginTop: vh(10),
    width: '100%',
  },
  dotStyle: {
    alignSelf: 'center',
    backgroundColor: ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS,
    borderRadius: 5,
    height: 4,
    marginStart: vw(7),

    width: 4,
  },
  firstImage: {
    height: '100%',
    resizeMode: 'stretch',
    width: '100%',
  },
  firstImage_Container: {
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },
  greenCircle: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GREEN_BG,
    borderRadius: vh(40),
    height: vw(35),
    justifyContent: 'center',
    width: vw(35),
  },
  headerText: {
    color: ColorTheme.APPLE_BLACK,
    fontFamily: Fonts.INTER_MEDIUM,
    fontSize: vh(18),
    lineHeight: vh(41),
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: vh(60),
    justifyContent: 'center',
    width: '100%',
  },
  header_backButton: {
    height: vh(15),
    width: vw(20),
  },
  imageStyle: {
    borderRadius: 20,
  },
  image_UserContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: vw(16),
    paddingVertical: '1%',
  },
  image_UserStyle: {
    height: vh(14.25),
    width: vw(13.5),
  },
  itemContainer: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vh(15),
    fontWeight: '700',
    marginStart: vw(15),
  },
  learnersText: {
    color: AppTheme.TEXT_COLOR_CONTENT_05,
    fontSize: vh(16),
    fontWeight: '500',
    marginHorizontal: vw(4),
  },
  mainButton_Container: {
    justifyContent: 'center',
    marginHorizontal: vw(16),
  },
  mainContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  mainPrice_Container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: vh(4),
  },
  noOfItemsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: '2%',
    paddingHorizontal: vw(16),
  },
  numberContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: vh(15),
  },
  priceContainer: {
    color: AppTheme.TEXT_COLOR_HEADING,
    fontSize: vh(18),
    fontWeight: '700',
    marginBottom: vh(5),
    paddingStart: vw(16),
  },
  scrollView_Style: {
    flex: 1,
  },
  spacer: {
    height: 30,
  },
  subContainer: {
    backgroundColor: AppTheme.PRIMARY_BACKGROUND,
    flex: 1,
  },
  subHeading: {
    marginVertical: vh(20),
    // flex: 0.2
  },
  taxStyle: {
    color: AppTheme.PLACE_HOLDER_COLOR_01,
    fontSize: vh(15),
    fontWeight: '600',
    marginStart: vw(7),
    marginTop: vh(-6),
  },
  text_Container: {
    justifyContent: 'center',
    marginTop: vh(20),
  },
  third_Container_Text: {
    color: AppTheme.TEXT_COLOR_CONTENT_05,
    fontSize: vh(15),
    lineHeight: 22,
    textAlign: 'justify',
  },
  underline_PriceContainer: {
    color: ColorTheme.ERROR_RED,
    fontSize: vh(16),
    fontWeight: '700',
    marginBottom: vh(5),
    marginStart: vw(15),
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});
export default styles;
