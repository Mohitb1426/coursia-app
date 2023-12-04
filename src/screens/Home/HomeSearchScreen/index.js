import React, { useContext, useEffect } from 'react';
import {
  View, TouchableOpacity, FlatList, ActivityIndicator,
} from 'react-native';
// import propTypes from 'prop-types';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import SvgIcon from '../../../common/SvgIcon';
import SearchListItem from './SearchListItem';
import {
  getSearch, setNoData, setSearch, setSearchTerm,
} from '../actionHome';
import { setCourseDetailsById } from '../../ChooseCoursesScreen/actionChooseCourses';
import { LocalizationContext } from '../../../common/LocalizationProvider';
import { ColorTheme } from '../../../common/AppStyles';
import NoDataFound from '../../../components/NoDataFound';
import useThemedStyles from '../../../hooks/useThemedStyles';
import { ThemeContext } from '../../../common/ThemeProvider';

function HomeSearchScreen() {
  const { darkMode } = useContext(ThemeContext);
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const homeState = useSelector((state) => state.reducerHome);
  const navigation = useNavigation();
  const { translations } = useContext(LocalizationContext);

  const {
    searchData, searchTerm, showNoData, searchLoading,
  } = homeState;

  const handleChangeText = (value) => {
    dispatch(setSearchTerm(value));
    if (value && value.length > 1) {
      dispatch(getSearch());
    } else {
      dispatch(setSearch({ data: [] }));
    }
  };

  useEffect(() => {
    clearSearch();
  }, []);

  useEffect(() => {
    dispatch(setNoData(searchData.length <= 0 && searchTerm.length > 1 && !searchLoading));
  }, [searchData]);

  const renderItem = ({ item }) => {
    return (
      <SearchListItem
        item={item}
        onPress={() => {
          onPress(item);
        }}
      />
    );
  };

  const clearSearch = () => {
    dispatch(setSearchTerm(''));
    dispatch(setSearch({ data: [] }));
  };

  const onPress = (item) => {
    if (item?.type.toLowerCase !== 'goals') {
      dispatch(setCourseDetailsById({ item, navigation }));
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.outerContainer}>
        <TouchableOpacity
          style={Styles.backButtonDesign}
          onPress={() => {
            goBack();
          }}
        >
          <SvgIcon.BackIcon color={darkMode ? ColorTheme.light01 : ColorTheme.black} />
        </TouchableOpacity>
        <View style={Styles.searchContainer}>
          <TextInput
            value={searchTerm}
            placeholderTextColor={ColorTheme.placeholderColor}
            placeholder={translations.SEARCH_PLACEHOLDER}
            autoFocus
            onChangeText={handleChangeText}
            style={Styles.textInputStyle}
          />
          {searchTerm !== '' ? (
            <TouchableOpacity
              style={Styles.closeButton}
              onPress={() => {
                clearSearch();
              }}
            >
              {!darkMode ? <SvgIcon.CloseButton /> : <SvgIcon.DarkCloseButton />}
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      {searchTerm.length > 0 ? (
        <FlatList
          style={Styles.listStyle}
          data={searchData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      ) : null}

      {showNoData ? (
        <View style={Styles.noDataContainer}>
          <NoDataFound />
        </View>
      ) : null}

      {searchLoading ? (
        <View style={Styles.loadingContainer}>
          <ActivityIndicator size="large" color={darkMode ? ColorTheme.white : ColorTheme.black} />
        </View>
      ) : null}
    </View>
  );
}

// HomeSearchScreen.propTypes = {
//  navigation: propTypes.any,
// };
export default HomeSearchScreen;
