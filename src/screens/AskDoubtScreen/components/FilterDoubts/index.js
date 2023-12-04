import React, { useContext } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './style';
import { filterAllDoubts, filterMyDoubts, setFilterTagList } from '../../actionAskDoubt';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function FilterDoubts({ tagsList, selectedTags, isActiveToggleButton }) {
  const dispatch = useDispatch((state) => state.reducerAskDoubt);
  const { translations } = useContext(LocalizationContext);
  const Styles = useThemedStyles(styles);

  const selectedTagsList = (id) => {
    if (selectedTags.includes(id)) {
      const tagElement = selectedTags.filter((item) => item !== id);
      dispatch(setFilterTagList(tagElement));
    } else {
      const element = selectedTags;
      element.push(id);
      dispatch(setFilterTagList(element));
    }
    if (isActiveToggleButton) {
      dispatch(filterAllDoubts());
    } else {
      dispatch(filterMyDoubts());
    }
  };

  const filteredArray = tagsList.filter((item) => selectedTags.includes(item.id));
  filteredArray.sort((a, b) => selectedTags.indexOf(a.id) - selectedTags.indexOf(b.id));
  const remainingArray = tagsList.filter((item) => !selectedTags.includes(item.id));
  const resultArray = [...filteredArray, ...remainingArray];

  const renderData = ({ item }) => {
    return (
      <TouchableOpacity
        style={[Styles.buttonStyle,
          selectedTags.includes(item?.tag_group_id) ? Styles.selectedTagContainerStyle : {}]}
        onPress={() => selectedTagsList(item?.tag_group_id)}
      >
        <Text style={[Styles.buttonTextStyle,
          selectedTags.includes(item?.tag_group_id) ? Styles.selectedTextStyle : {}]}
        >
          {item.tag}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.textStyle}>{translations.FILTER_BY_TOPICS}</Text>
      <View style={Styles.flatListContainer}>
        <FlatList
          data={resultArray}
          renderItem={renderData}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

FilterDoubts.propTypes = {
  tagsList: propTypes.array,
  selectedTags: propTypes.array,
  isActiveToggleButton: propTypes.bool,
};
