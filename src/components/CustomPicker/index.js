import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import propTypes from 'prop-types';
import { CustomModal } from '../CustomModal';
import { vh } from '../../common/Dimensions';
import { getRandomID } from '../../utilities';
import ErrorHandler from '../../common/ErrorHandler';
import styles from './style';
import { LocalizationContext } from '../../common/LocalizationProvider';
import SvgIcon from '../../common/SvgIcon';
import useThemedStyles from '../../hooks/useThemedStyles';
import { ColorTheme } from '../../common/AppStyles';

function CustomPicker({
  isActive = false,
  data = [],
  onItemPress = {},
  onClose,
  title = ' ',
  isShowingCityList,
}) {
  const Styles = useThemedStyles(styles);
  const TAG = 'CustomPicker';
  const isStateSelected = isShowingCityList && data.length === 0;
  const [list, setList] = useState(data);
  const { translations } = useContext(LocalizationContext);

  const renderData = ({ item }) => {
    return (
      <ErrorHandler componentName={`${TAG} : ListItem`}>
        <TouchableOpacity
          onPress={() => {
            onItemPress(item.label);
          }}
        >
          <Text style={Styles.listItemStyle}>{item.label}</Text>
        </TouchableOpacity>
      </ErrorHandler>
    );
  };

  const performSearch = (item) => {
    const newData = data.filter((listItem) => {
      const res = listItem.label.toLowerCase().includes(item.toLowerCase());
      return res;
    });
    setList(newData);
  };

  const renderSaperator = () => {
    return (
      <ErrorHandler componentName={`${TAG} : listItemSaperator`}>
        <View style={Styles.seperatorLine} />
      </ErrorHandler>
    );
  };

  const renderListData = () => {
    if (isStateSelected) {
      return (
        <Text style={Styles.infoTextStyle}>
          {translations.PLEASE_SELECT_STATE_FIRST}
        </Text>
      );
    }
    return (
      <FlatList
        data={list}
        keyExtractor={() => getRandomID()}
        renderItem={renderData}
        ListEmptyComponent={<Text style={Styles.infoTextStyle}>{translations.NO_DATA_FOUND}</Text>}
        ItemSeparatorComponent={renderSaperator}
      />
    );
  };

  return (
    <ErrorHandler componentName={`${TAG}`}>
      <CustomModal
        borderTopLeftRadius={5}
        borderTopRightRadius={5}
        borderBottomRightRadius={5}
        borderBottomLeftRadius={5}
        visible={isActive}
        modalHeight={vh(450)}
        alignBottom={false}
        onModalHide={() => {
          onClose();
        }}
        onBackdropPress={() => {
          onClose();
        }}
      >
        <View style={Styles.headerStyle}>
          <Text style={Styles.headingStyle}>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              onClose();
            }}
          >
            <SvgIcon.CloseIcon />
          </TouchableOpacity>
        </View>
        <TextInput
          style={Styles.textStyle}
          placeholderTextColor={ColorTheme.placeholderColor}
          placeholder={translations.UP_TEXT_SEARCH}
          onChangeText={(text) => performSearch(text)}
        />
        {renderListData()}
      </CustomModal>
    </ErrorHandler>
  );
}

CustomPicker.propTypes = {
  isActive: propTypes.bool,
  isShowingCityList: propTypes.bool,
  data: propTypes.any,
  onItemPress: propTypes.func,
  onClose: propTypes.func,
  title: propTypes.string,
};

export default CustomPicker;
