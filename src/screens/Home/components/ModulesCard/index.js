import {
  View, Text, TouchableOpacity, Image, Dimensions, FlatList,
} from 'react-native';
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './styles';
import { Routes } from '../../../../routes/Routes';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';

// import {getCoursesCategoriesList} from '../../../ChooseCoursesScreen/actionChooseCourses';
// appLanguage

const ScreenWidth = Dimensions.get('window').width - 80;
export function ModulesCard({ navigation }) {
  const { appLanguage } = useContext(LocalizationContext);
  const Styles = useThemedStyles(styles);
  const homeState = useSelector((store) => store.reducerHome);
  const { modulesData } = homeState;
  const navigationTo = (id) => {
    switch (id) {
      case '23':
        navigation.navigate(Routes.SCREEN_COURSE);
        break;
      case '26':
        navigation.navigate(Routes.SCREEN_MY_COURSES);
        break;
      case '24':
        navigation.navigate(Routes.SCREEN_ASK_DOUBT);
        break;
      case '28':
        navigation.navigate(Routes.SCREEN_STUDENT_DASHBOARD);
        break;
      // case '29':
      //   navigation.navigate(Routes.SCREEN_BLACK_BOX_DASHBOARD);
      //   break;
      default:
        navigation.navigate(Routes.SCREEN_COMING_SOON);
        break;
    }
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.subContainer}>
        {/* {modulesData.map((item) => (
          <View key={item.id} style={Styles.moduleMenuContainer}>
            <TouchableOpacity
              style={Styles.moduleContainer(ScreenWidth, appLanguage)}
              key={item.id}
              onPress={() => {
                navigationTo(item.menu_item_group_id);
              }}
            >
              <Image
                style={Styles.imageStyle}
                source={{
                  uri: item.icon,
                }}
              />
            </TouchableOpacity>
            <Text
              numberOfLines={2}
              style={Styles.moduleTextContainer(ScreenWidth, appLanguage)}
            >
              {item.title}
            </Text>
          </View>
        ))} */}
        <FlatList
          data={modulesData}
          renderItem={({ item }) => (
            <View key={item.id} style={Styles.moduleMenuContainer}>
              <TouchableOpacity
                style={Styles.moduleContainer(ScreenWidth, appLanguage)}
                key={item.id}
                onPress={() => {
                  navigationTo(item.menu_item_group_id);
                }}
              >
                <Image
                  style={Styles.imageStyle}
                  source={{
                    uri: item.icon,
                  }}
                />
              </TouchableOpacity>
              <Text
                numberOfLines={2}
                style={Styles.moduleTextContainer(ScreenWidth, appLanguage)}
              >
                {item.title}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={4}
          columnWrapperStyle={Styles.subContainer}
        />
      </View>
    </View>
  );
}

ModulesCard.propTypes = {
  navigation: propTypes.any,
};
