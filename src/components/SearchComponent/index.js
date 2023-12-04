import React, { useState } from 'react';
import {
  View, Image, Keyboard,
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import propTypes from 'prop-types';
import styles from './styles';
import Images from '../../common/Images';
import { ColorTheme } from '../../common/AppStyles';

export function SearchComponent({
  data, showUnit, checkUnit, checkSearchStatus,
}) {
  const [searchText, setSearchText] = useState('');

  let transformed;
  if (checkUnit) {
    transformed = data.map((item, index) => {
      return { id: index, name: item?.Unit?.title };
    });
  } else {
    transformed = data.map(({ title }, index) => ({ id: index, name: title }));
  }
  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.subContainerStyle}>
        <View
          style={styles.Image_Container}
        >
          <Image
            source={Images.SEARCH_ICON}
            style={styles.ImageStyle}
          />
        </View>

        <SearchableDropdown
          onTextChange={(text) => setSearchText(text)}
          onItemSelect={(item) => {
            showUnit(item?.id);
            setSearchText(item.name);
            Keyboard.dismiss();
            setTimeout(() => {
              setSearchText('');
            }, 1000);
          }}
          containerStyle={styles.inputTextContainer}
          textInputStyle={styles.textInputStyle}
          itemStyle={styles.itemStyle}
          itemTextStyle={styles.itemTextStyle}
          items={transformed}
          onBlur={checkSearchStatus}
          onFocus={checkSearchStatus}
          placeholderTextColor={ColorTheme.NATIVE_GREY}
          placeholder={searchText || 'Search'}
        // underlineColorAndroid={ColorTheme.GREEN_BG}
          value={searchText}
        />
      </View>
    </View>

  );
}

SearchComponent.propTypes = {
  data: propTypes.any,
  showUnit: propTypes.any,
  checkUnit: propTypes.any,
  checkSearchStatus: propTypes.any,
};
