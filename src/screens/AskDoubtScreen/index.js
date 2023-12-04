import React, { useCallback, useEffect, useContext } from 'react';
import {
  View,
  TouchableOpacity,
  Platform,
  FlatList,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import ImagePicker from 'react-native-image-crop-picker';
import { useFocusEffect } from '@react-navigation/native';
import { ComponentHeader, CustomLockScreen } from '../../components';
import {
  getTagList,
  changeBottomSheetStatus,
  setActiveToggleButton,
  setMultiImages,
  getAllDoubts,
  getMyDoubts,
  clearTagData,
  setFilterTagList,
  setDropDownItemData,
  numberOfMyDoubtPages,
  numberOfAllDoubtPages,
  openAskDoubtSuccessModal,
  deleteTicket,
  openConfirmModal,
  openUnlockScreenModal,
  setSearchDoubtsText,
  getSearchMyDoubts,
  getSearchAllDoubts,
  reloadAllDoubts,
  reloadMyDoubts,
  closeImagePermissionModal,
  gotSearchData,
  checkActiveFeature,
  setBottomSheetSearchData,
  setDefault,
} from './actionAskDoubt';
import {
  AskDoubtSuccessModal,
  BottomSheet,
  DoubtsToggleButton,
  FilterDoubts,
  QuestionAnswerCard,
  ImagePermissionModal,
} from './components';
import styles from './style';
import { debugLog } from '../../common/Logger';
import AskDoubtConfirmModal from './components/AskDoubtConfirmModal';
import { LocalizationContext } from '../../common/LocalizationProvider';
import { Routes } from '../../routes/Routes';
import Loader from '../../components/Loader';
import BottomNav from './components/BottomNavButton';
import NoDataFound from './components/NoDataFound';
import ErrorHandler from '../../common/ErrorHandler';
import { ASK_DOUBT_CONSTANTS } from './constantsScreenAskDoubt';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ThemeContext } from '../../common/ThemeProvider';
import SvgIcon from '../../common/SvgIcon';

export function AskDoubtScreen({ navigation }) {
  const TAG = 'AskDoubtScreen';
  const { translations } = useContext(LocalizationContext);
  const { appTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const askDoubtState = useSelector((state) => state.reducerAskDoubt);
  const {
    isActiveToggleButton,
    bottomSheetStatus,
    tagList,
    myDoubtsList,
    allDoubtsList,
    filterTagList,
    showAskDoubtSuccessModal,
    openModal,
    unlockScreenModal,
    isLoading,
    noDataFoundMyDoubts,
    noDataFoundAllDoubts,
    searchDoubtText,
    loader,
    imagePermission,
    isSearchDone,
    passActivate,
  } = askDoubtState;
  const check = isActiveToggleButton ? noDataFoundAllDoubts : noDataFoundMyDoubts;
  const data = !isActiveToggleButton ? myDoubtsList : allDoubtsList;
  const Styles = useThemedStyles(styles);

  const navigateBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (showAskDoubtSuccessModal) {
      setTimeout(() => {
        dispatch(openAskDoubtSuccessModal(false));
      }, 2000);
    }
  }, [showAskDoubtSuccessModal]);

  const captureData = (image) => {
    const parts = image.path.split('/');
    const uri = Platform.OS === 'ios' ? `file:///${image.path}` : image.path;
    const name = parts[parts.length - 1];
    const type = image.mime;
    const file = {
      uri,
      name,
      type,
    };
    dispatch(setMultiImages(file));
    dispatch(closeImagePermissionModal(false));
  };
  const captureImage = useCallback(() => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: false,
      mediaType: 'photo',
    })
      .then((image) => {
        captureData(image);
      })
      .catch((e) => {
        debugLog('e', e);
      });
  });

  const captureUpload = useCallback(() => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: false,
      mediaType: 'photo',
    })
      .then((image) => {
        captureData(image);
      })
      .catch((e) => {
        debugLog('e', e);
      });
  });

  useFocusEffect(
    useCallback(() => {
      dispatch(checkActiveFeature());
    }, []),
  );

  useEffect(() => {
    dispatch(getTagList());
    dispatch(getMyDoubts());
    dispatch(getAllDoubts());
    return () => {
      dispatch(clearTagData());
      dispatch(setSearchDoubtsText(''));
    };
  }, []);

  useEffect(() => {
    if (searchDoubtText.length === 0) {
      getSearchResult();
    }
  }, [searchDoubtText]);

  useEffect(() => {
    itemsData();
  }, [tagList]);

  useEffect(() => {
    return (() => {
      dispatch(setDefault());
    });
  }, []);
  const toggleButton = () => {
    dispatch(setActiveToggleButton(!isActiveToggleButton));
    dispatch(setFilterTagList([]));
    if (!isActiveToggleButton) {
      dispatch(reloadAllDoubts());
    } else {
      dispatch(reloadMyDoubts());
    }
  };

  const loadData = () => {
    if (isActiveToggleButton) {
      dispatch(numberOfAllDoubtPages());
      dispatch(getAllDoubts());
    } else {
      dispatch(numberOfMyDoubtPages());
      dispatch(getMyDoubts());
    }
  };

  const itemsData = () => {
    if (tagList.length > 0) {
      const newData = [];
      // eslint-disable-next-line array-callback-return
      tagList.map((item) => {
        const newObj = {
          id: item?.tag_group_id,
          name: item?.tag,
          // label: item?.tag,
          // groupId: item?.tag_group_id,
        };
        newData.push(newObj);
      });
      dispatch(setDropDownItemData(newData));
    }
    return null;
  };

  const navigateTo = (id) => {
    const screenName = isActiveToggleButton ? translations.ALL_DOUBTS : translations.MY_DOUBTS;
    navigation.navigate(Routes.SCREEN_DOUBT_DETAILS, { data: id, screenName });
  };

  const renderData = ({ item }) => {
    return (
      <ErrorHandler componentName={`${TAG} : QuestionAnswerCard`}>
        <QuestionAnswerCard
          data={item}
          navigate={() => navigateTo(item?.id)}
        />
      </ErrorHandler>
    );
  };

  const renderFooter = (checkIndicator) => {
    return loader ? null : (
      <View style={Styles.activityIndicator}>
        <ActivityIndicator size="large" animating={!checkIndicator} />
      </View>
    );
  };

  const openBottomSheet = () => {
    if (myDoubtsList.length >= ASK_DOUBT_CONSTANTS.MY_DOUBT_LIMIT && !passActivate) {
      dispatch(openUnlockScreenModal(true));
    } else {
      dispatch(setBottomSheetSearchData([]));
      dispatch(changeBottomSheetStatus(true));
    }
  };

  const renderEmptyComponent = (isCheck) => {
    return isCheck && (<NoDataFound />);
  };

  const getSearchResult = () => {
    if (!isActiveToggleButton) {
      dispatch(getSearchMyDoubts());
    } else {
      dispatch(getSearchAllDoubts());
    }
  };

  const onEndReachedData = () => {
    // eslint-disable-next-line no-unused-expressions
    isSearchDone ? dispatch(gotSearchData(false)) : loadData();
  };

  return (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.mainContainer}>
        <ErrorHandler componentName={`${TAG} : ComponentHeader`}>
          <ComponentHeader goBack={navigateBack} />
        </ErrorHandler>
        <ErrorHandler componentName={`${TAG} : DoubtsToggleButton`}>
          <DoubtsToggleButton
            isActive={isActiveToggleButton}
            toggleState={toggleButton}
          />
        </ErrorHandler>

        <ErrorHandler componentName={`${TAG} : FilterDoubts`}>
          <FilterDoubts
            tagsList={tagList}
            selectedTags={filterTagList}
            isActiveToggleButton={isActiveToggleButton}
          />
        </ErrorHandler>

        {!bottomSheetStatus && (
          <View style={Styles.subContainer}>
            <View style={Styles.textInputMainContainer}>
              <View style={Styles.textInputContainer}>
                <View
                  style={Styles.textInputStyle}
                >
                  <View style={Styles.searchContainer}>
                    <TextInput
                      style={Styles.textStyle}
                      placeholder={translations.SEARCH_DOUBTS}
                      onChangeText={(text) => dispatch(setSearchDoubtsText(text))}
                      defaultValue={searchDoubtText}
                      placeholderTextColor={appTheme.COLOR_03}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={getSearchResult}
                    style={Styles.imageContainer}
                  >
                    {/* <Image
                    source={Images.SEARCH_ICON_IMAGE}
                    style={Styles.imageStyle}
                    resizeMode="contain"
                  /> */}
                    <SvgIcon.AskDoubtSearchIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={Styles.answerCardContainer}>
              {data.length
                ? (
                  <FlatList
                    data={data}
                    keyExtractor={(item) => item?.id.toString()}
                    renderItem={renderData}
                    onEndReached={onEndReachedData}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent ={renderFooter(check)}
                    ListEmptyComponent={renderEmptyComponent(check)}
                  />
                )
                : <NoDataFound />}

            </View>
          </View>
        )}

        <ErrorHandler componentName={`${TAG} : BottomSheet`}>
          <BottomSheet
            onPressCapture={captureImage}
            onPressUpload={captureUpload}
            isActive={bottomSheetStatus}
            navigation={navigation}
          />
        </ErrorHandler>
        <ErrorHandler componentName={`${TAG} : AskDoubtSuccessModal`}>
          <AskDoubtSuccessModal isVisible={showAskDoubtSuccessModal} />
        </ErrorHandler>
        <ErrorHandler componentName={`${TAG} : AskDoubtConfirmModal`}>
          <AskDoubtConfirmModal
            isVisible={openModal}
            deleteTicket={() => dispatch(deleteTicket())}
            closeModal={() => dispatch(openConfirmModal(false))}
          />
        </ErrorHandler>
        <ErrorHandler componentName={`${TAG} : CustomLockScreen`}>
          <CustomLockScreen
            isVisible={unlockScreenModal}
            firstText={translations.UNLOCK_WITH_PASS_NOW}
            secondText={translations.SUB_TEXT}
            buttonText={translations.UNLOCK_SCREEN_TEXT}
            onButtonPress={() => {
              dispatch(openUnlockScreenModal(false));
              navigation.navigate(Routes.SCREEN_SUBSCRIPTION);
            }}
            onClose={() => {
              dispatch(openUnlockScreenModal(false));
            }}
          />
        </ErrorHandler>
        <ErrorHandler componentName={`${TAG} : ImagePermissionScreen`}>
          <ImagePermissionModal
            isVisible={imagePermission}
            onClose={() => dispatch(closeImagePermissionModal(false))}
            onPressUpload={captureUpload}
            onPressCapture={captureImage}
          />
        </ErrorHandler>
        <Loader show={isLoading} />
        <ErrorHandler componentName={`${TAG} : BottomNav`}>
          <BottomNav isVisible={bottomSheetStatus} onPress={openBottomSheet} />
        </ErrorHandler>
      </View>
    </ErrorHandler>
  );
}

AskDoubtScreen.propTypes = {
  navigation: propTypes.any,
};
