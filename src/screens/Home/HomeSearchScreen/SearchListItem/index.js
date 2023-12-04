import React, { useContext } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import propTypes from 'prop-types';
import HighlightText from '@sanar/react-native-highlight-text';
import { useSelector } from 'react-redux';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import styles from './style';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function SearchListItem({ onPress, item }) {
  const homeState = useSelector((state) => state.reducerHome);
  const Styles = useThemedStyles(styles);
  const { searchTerm } = homeState;
  const { translations } = useContext(LocalizationContext);
  const type = item?.type.toLowerCase === 'goals' ? translations.SEARCH_GOAL : translations.SEARCH_COURSE;

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
    >
      <View style={Styles.container}>
        <Image
          source={{
            uri: item.image_url,
          }}
          // borderRadius will help to make Round Shape
          style={Styles.imageStyle}
        />
        <View style={Styles.textContainer}>
          <HighlightText
            style={Styles.textMainHeadingStyle}
            highlightStyle={Styles.textMainHeadingStyleHighlighted}
            searchWords={[searchTerm]}
            textToHighlight={item.display_title}
            autoEscape
          />
          <Text style={Styles.subTextStle}>
            {type}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

SearchListItem.propTypes = {
  item: propTypes.object,
  onPress: propTypes.any,
};
export default SearchListItem;
