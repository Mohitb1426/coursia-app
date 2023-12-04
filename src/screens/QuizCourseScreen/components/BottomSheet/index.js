import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { CustomModal } from '../../../../components';
import CustomButton from '../../../../components/CustomButton';
import { ColorTheme, FontTheme } from '../../../../common/AppStyles';
import { addArray, checkArray, removeArray } from '../../../../utilities/commonFunction/checkArrayElement';
import ErrorHandler from '../../../../common/ErrorHandler';
import Items from './Items';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import SvgIcon from '../../../../common/SvgIcon';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function BottomSheet({
  isActive,
  updateStandardData,
  updateSubjectData,
  setUpdateStandardData,
  setUpdateSubjectData,
  updateStandard, updateSubject,
  resetPageNumber,
  resetQuizData,
  isFooterLoading,
  getQuizCourses,
  closeQuizCourseBottomSheet,
  standardList,
  subjectList,
  selectedSubject,
  selectedStandard,
}) {
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const { translations } = useContext(LocalizationContext);

  const selectStandard = (value) => {
    const isStandardPresent = checkArray(updateStandardData, value);
    if (isStandardPresent) {
      const updatedArray = removeArray(updateStandardData, value);
      dispatch(setUpdateStandardData(updatedArray));
    } else {
      const updatedArray = addArray(updateStandardData, value);
      dispatch(setUpdateStandardData(updatedArray));
    }
  };

  const renderStandardData = ({ item }) => {
    return (
      <ErrorHandler>
        <Items
          isSelected={checkArray(updateStandardData, item?.id)}
          title={item?.title}
          onSelect={() => selectStandard(item?.id)}
        />
      </ErrorHandler>
    );
  };

  const selectSubject = (value) => {
    const isSubjectPresent = checkArray(updateSubjectData, value);
    if (isSubjectPresent) {
      const updatedArray = removeArray(updateSubjectData, value);
      dispatch(setUpdateSubjectData(updatedArray));
    } else {
      const updatedArray = addArray(updateSubjectData, value);
      dispatch(setUpdateSubjectData(updatedArray));
    }
  };
  const renderSubjectData = ({ item }) => {
    return (
      <ErrorHandler>
        <Items
          isSelected={checkArray(updateSubjectData, item?.id)}
          title={item?.title}
          onSelect={() => selectSubject(item?.id)}
        />
      </ErrorHandler>
    );
  };

  const onButtonPress = () => {
    dispatch(updateStandard(updateStandardData));
    dispatch(updateSubject(updateSubjectData));
    dispatch(resetPageNumber());
    dispatch(resetQuizData());
    dispatch(isFooterLoading(true));
    dispatch(getQuizCourses());
    dispatch(closeQuizCourseBottomSheet());
  };

  const resetFilters = () => {
    dispatch(setUpdateStandardData([]));
    dispatch(setUpdateSubjectData([]));
  };

  const closeBottomSheet = () => {
    dispatch(setUpdateStandardData(selectedStandard));
    dispatch(setUpdateSubjectData(selectedSubject));
    dispatch(closeQuizCourseBottomSheet());
  };

  return isActive && (
    <CustomModal
      borderTopLeftRadius={25}
      borderTopRightRadius={25}
      visible={isActive}
      modalHeight={440}
      backdropOpacity={0.6}
      onModalHide={() => {
        closeBottomSheet();
      }}
      onBackdropPress={() => {
        closeBottomSheet();
      }}
    >
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.bottomSheetHeaderImage}
          onPress={closeBottomSheet}
        >
          <SvgIcon.BottomSheetHeaderIcon />
        </TouchableOpacity>
        <View style={Styles.firstContainerStyle}>
          <Text style={Styles.headingText}>
            {translations.FILTER}
          </Text>
          <TouchableOpacity onPress={resetFilters}>
            <Text style={Styles.subHeadingText}>
              {translations.RESET}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.dividerStyle} />
        <View style={Styles.secondContainer}>
          <Text style={Styles.headingText}>
            {translations.STANDARD}
          </Text>
          <View style={Styles.flatListView}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={standardList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderStandardData}
            />
          </View>
        </View>
        <View style={Styles.dividerStyle} />
        <View style={Styles.thirdContainer}>
          <Text style={Styles.headingText}>
            {translations.SUBJECT}
          </Text>
          <View style={Styles.flatListView}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={subjectList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderSubjectData}
            />
          </View>
        </View>
        <View style={Styles.dividerStyle} />
        <View style={Styles.customButton}>
          <CustomButton
            onButtonPress={onButtonPress}
            buttonText={translations.APPLY}
            customStyle={Styles.buttonStyle}
            buttonColor={ColorTheme.GREEN_BG}
            textColor={ColorTheme.WHITE}
            fontFamily={FontTheme.INTER_BOLD}
          />
        </View>
      </View>
    </CustomModal>
  );
}

BottomSheet.propTypes = {
  isActive: PropTypes.bool,
  updateStandardData: PropTypes.array,
  updateSubjectData: PropTypes.array,
  setUpdateStandardData: PropTypes.func,
  setUpdateSubjectData: PropTypes.func,
  updateStandard: PropTypes.array,
  updateSubject: PropTypes.array,
  resetPageNumber: PropTypes.func,
  resetQuizData: PropTypes.func,
  isFooterLoading: PropTypes.func,
  getQuizCourses: PropTypes.func,
  closeQuizCourseBottomSheet: PropTypes.func,
  standardList: PropTypes.array,
  subjectList: PropTypes.array,
  selectedSubject: PropTypes.array,
  selectedStandard: PropTypes.array,
};
