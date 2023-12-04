import React, {
  useState, useContext, useEffect, useMemo,
} from 'react';
import {
  View, TouchableOpacity, Image, TextInput,
  Text,
  ScrollView,
  Keyboard,
} from 'react-native';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import SearchableDropDown from 'react-native-searchable-dropdown';
import styles from './styles';
import { CustomModal } from '../../../../components';
import CustomButton from '../../../../components/CustomButton';
import { ColorTheme, FontTheme } from '../../../../common/AppStyles';
import Images from '../../../../common/Images';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import {
  changeBottomSheetStatus,
  changeQuestionText,
  changeSubjectText,
  clearDataOnBackButtonPress,
  fromAskDoubtScreen,
  openImagePermissionModal,
  removeSelectedImages,
  setActiveSubmitButton,
  setBottomSheetSearchData,
  setSelectedTagList,
  uploadUserComment,
} from '../../actionAskDoubt';
import { Routes } from '../../../../routes/Routes';
import { ZoomImage } from '../ZoomImage';
import { vh } from '../../../../common/Dimensions';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { ThemeContext } from '../../../../common/ThemeProvider';

export function BottomSheet({
  isActive, navigation,
}) {
  const { darkMode, appTheme } = useContext(ThemeContext);
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const askDoubtState = useSelector((state) => state.reducerAskDoubt);
  const updateProfileScreen = useSelector((state) => state.reducerUpdateProfile);
  const { customerData } = updateProfileScreen;
  const {
    selectedImages,
    subject,
    userQuestion,
    dropDownItemData,
    // disableSubmitButton,
    selectedTagList,
    data,
  } = askDoubtState;
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [validation, setValidation] = useState({
    isTagValidStatus: false,
    isSubjectValidStatus: false,
    isQuestionValidStatus: false,
  });
  // eslint-disable-next-line no-unused-vars
  const [searchText, setSearchText] = useState('');
  // const [data, setData] = useState([]);
  // const [isDisabled, setIsDisabled] = useState(false);
  const { translations } = useContext(LocalizationContext);
  const commonTextColor = darkMode
    ? ColorTheme.TEXT_COLOR_CONTENT_01 : ColorTheme.BACKGROUND_QUATERNARY_EMPHASIS;
  const changeSubject = (text) => {
    dispatch(changeSubjectText(text));
  };

  const changeQuestion = (text) => {
    dispatch(changeQuestionText(text));
  };

  const handleClosePress = () => {
    if (customerData?.firstName === '' || customerData?.lastName === '' || customerData?.email === '') {
      dispatch(changeBottomSheetStatus(false));
      dispatch(fromAskDoubtScreen(true));
      navigation.navigate(Routes.SCREEN_UPDATE_PROFILE);
    } else {
      dispatch(uploadUserComment());
    }
  };

  const checkValidation = () => {
    const isTagValid = selectedTagList.length > 0;
    const isSubjectValid = subject.length > 0;
    const isQuestionValid = userQuestion.length > 0;
    setValidation({
      isTagValidStatus: !isTagValid,
      isSubjectValidStatus: !isSubjectValid,
      isQuestionValidStatus: !isQuestionValid,
    });
    if (isTagValid && isSubjectValid && isQuestionValid) {
      handleClosePress();
    }
  };

  // console.log('validation', validation);
  const isDisable = useMemo(() => {
    if (data.length >= 3) {
      setOpen(false);
      return true;
    }
    return false;
  }, [data.length]);

  // Setting Tag List Data
  useEffect(() => {
    setItems(dropDownItemData);
  }, [dropDownItemData]);

  // Submit Button Functionality
  useEffect(() => {
    if (selectedTagList.length > 0 && subject.length > 0 && userQuestion.length > 0) {
      dispatch(setActiveSubmitButton(true));
    } else {
      dispatch(setActiveSubmitButton(false));
    }
  }, [selectedTagList, subject, userQuestion]);

  const unSelectTags = (id) => {
    if (data.length > 1) {
      const element = data.filter((item) => item.id !== id);
      dispatch(setBottomSheetSearchData(element));
      const selectedId = selectedTagList.filter((item) => item !== id);
      dispatch(setSelectedTagList(selectedId));
    }
  };

  const removeSelectedImage = (imageData) => {
    const element = selectedImages.filter((item) => item.name !== imageData.name);
    dispatch(removeSelectedImages(element));
  };

  const goBack = () => {
    setValidation({
      isTagValidStatus: false,
      isSubjectValidStatus: false,
      isQuestionValidStatus: false,
    });
    dispatch(setBottomSheetSearchData([]));
    dispatch(clearDataOnBackButtonPress());
    dispatch(changeBottomSheetStatus(false));
  };

  return isActive && (
    <CustomModal
      borderTopLeftRadius={25}
      borderTopRightRadius={25}
      visible={isActive}
      modalHeight={data.length > 0 ? vh(350) : vh(300)}
      onBackdropPress={goBack}
      onModalHide={goBack}
    >
      <View style={Styles.container}>
        <View style={Styles.firstContainerStyle}>
          <View
            style={[
              Styles.dropDownContainer,
              validation.isTagValidStatus ? Styles.dropDownValidationStyle : null,
            ]}
            pointerEvents={isDisable ? 'none' : 'auto'}
          >
            {/* DropDown */}
            <SearchableDropDown
              onTextChange={(text) => setSearchText(text)}
              items={items}
              selectedItem={data}
              style={Styles.dropDownStyle}
              multi
              onItemSelect={(item) => {
                if (data.length < 3 && !selectedTagList.includes(item?.id)) {
                  const id = selectedTagList;
                  id.push(item?.id);
                  dispatch(setSelectedTagList(id));
                  const selectedData = data;
                  selectedData.push(item);
                  dispatch(setBottomSheetSearchData(selectedData));
                }
                setSearchText(item.name);
                Keyboard.dismiss();
                setTimeout(() => {
                  setSearchText('');
                }, 1000);
              }}
              itemTextStyle={{ color: commonTextColor }}
              placeholder={translations.ADD_TAGS}
              placeholderTextColor={commonTextColor}
              itemsContainerStyle={{ maxHeight: vh(100) }}
              itemStyle={Styles.searchDropDownItemStyle}
              textInputStyle={Styles.searchDropDownTextInputStyle}
            />
          </View>
          <View style={Styles.imageContainer}>
            <TouchableOpacity
              onPress={selectedImages.length < 3
                ? () => dispatch(openImagePermissionModal(true)) : null}
              disabled={!(selectedImages.length < 3)}
            >
              <Image source={Images.CAMERA_ICON} style={Styles.imageStyle} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity style={Styles.touchableStyle} activeOpacity={1}>
            {data.length > 0
              ? (
                <View style={Styles.mainContainer}>
                  {data.map((item) => (
                    <View
                      style={Styles.labelContainer}
                    >
                      <Text style={Styles.labelText}>{item.name}</Text>
                      <TouchableOpacity onPress={() => unSelectTags(item?.id)}>
                        <Image source={Images.CLOSE_ICON_ALL_DOUBT} style={Styles.closeIconStyle} />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              ) : null}
            <View>
              <View style={Styles.selectedImageContainer}>
                {selectedImages.map((imageData) => (
                  <View style={Styles.selectedImageSubContainer}>
                    <ZoomImage
                      uri={{ uri: imageData.uri }}
                    />
                    <TouchableOpacity onPress={() => removeSelectedImage(imageData)}>
                      <Image source={Images.CLOSE_IMAGE_ICON} style={Styles.removeImageStyle} />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              <View style={open ? Styles.setOpacityZero : Styles.setOpacityOne}>
                <TextInput
                  style={[
                    Styles.textInputStyle,
                    subject.length > 0 ? { color: appTheme.TEXT_COLOR_HEADING } : null,
                    validation.isSubjectValidStatus ? Styles.validationStyle : null,
                  ]}
                  placeholder={translations.ENTER_YOUR_SUBJECT}
                  onChangeText={(text) => changeSubject(text)}
                  placeholderTextColor={commonTextColor}
                  value={subject}
                />
                <TextInput
                  style={[
                    Styles.secondTextInputStyle,
                    userQuestion.length > 0 ? { color: appTheme.TEXT_COLOR_HEADING } : null,
                    validation.isQuestionValidStatus ? Styles.validationStyle : null,
                  ]}
                  multiline
                  placeholder={translations.TYPE_YOUR_DOUBT_HERE}
                  onChangeText={(text) => changeQuestion(text)}
                  placeholderTextColor={commonTextColor}
                  value={userQuestion}
                  maxLength={800}
                />

                <CustomButton
                  // isDisabled={!disableSubmitButton}
                  onButtonPress={checkValidation}
                  buttonText={translations.SUBMIT}
                  customStyle={Styles.customStyle}
                  buttonColor={ColorTheme.GREEN_BG}
                  textColor={ColorTheme.WHITE}
                  fontFamily={FontTheme.INTER_BOLD}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </CustomModal>
  );
}

BottomSheet.propTypes = {
  isActive: propTypes.bool,
  navigation: propTypes.any,
};
