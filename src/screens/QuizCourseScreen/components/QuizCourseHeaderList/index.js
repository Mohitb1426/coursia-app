import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ErrorHandler from '../../../../common/ErrorHandler';
import Items from '../BottomSheet/Items';
import styles from './styles';
import { removeArray } from '../../../../utilities/commonFunction/checkArrayElement';

export function QuizCourseHeaderList({
  selectedSubjectData, selectedStandardData,
  setUpdateSubjectData, updateSubject,
  setUpdateStandardData, updateStandard, getListData,
  subjectList,
  standardList,
}) {
  const dispatch = useDispatch();
  const renderListData = ({ item }) => {
    return (
      <ErrorHandler>
        <Items
          isSelected
          title={item?.title}
          onSelect={() => onRemoveFilter(item)}
          isSubject={item?.isSubject}
        />
      </ErrorHandler>
    );
  };
  const onRemoveFilter = (item) => {
    if (item.isSubject) {
      const updatedArray = removeArray(selectedSubjectData, item?.id);
      dispatch(setUpdateSubjectData(updatedArray));
      dispatch(updateSubject(updatedArray));
      getListData();
    } else {
      const updatedArray = removeArray(selectedStandardData, item?.id);
      dispatch(setUpdateStandardData(updatedArray));
      dispatch(updateStandard(updatedArray));
      getListData();
    }
  };

  const listData = useMemo(() => {
    const filteredSelectedSubjectData = subjectList.filter(
      (item) => selectedSubjectData.includes(item.id),
    );
    const filteredSelectedStandardData = standardList.filter(
      (item) => selectedStandardData.includes(item.id),
    );
    const filteredListData = [...filteredSelectedStandardData, ...filteredSelectedSubjectData];
    return filteredListData;
  }, [selectedSubjectData, selectedStandardData]);

  return (
    <View style={styles.flatListStyle}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderListData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

QuizCourseHeaderList.propTypes = {
  selectedSubjectData: PropTypes.array,
  selectedStandardData: PropTypes.array,
  setUpdateSubjectData: PropTypes.func,
  updateSubject: PropTypes.func,
  setUpdateStandardData: PropTypes.func,
  updateStandard: PropTypes.func,
  getListData: PropTypes.func,
  subjectList: PropTypes.func,
  standardList: PropTypes.func,
};
