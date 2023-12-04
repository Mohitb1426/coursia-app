import {
  View, FlatList, RefreshControl,
} from 'react-native';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { ComponentHeader, Loader, EmptyListComponent } from '../../components';
import { Card } from './components';
import {
  setCourseDetails,
  setCourseDetailsById,
} from '../ChooseCoursesScreen/actionChooseCourses';
import {
  getAllCourses,
  pageCountAllCourses,
} from './actionViewAllChooseCourse';
import useBackButton from '../../hooks/useBackButton';
import useThemedStyles from '../../hooks/useThemedStyles';

function ViewAllChooseCourseScreen({ navigation, route }) {
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const courseState = useSelector((state) => state.reducerChooseCourses);
  const allCoursesDataState = useSelector((state) => state.reducerViewAllChooseCourses);
  const { isLoading } = courseState;
  const { allCoursesData, isCourseLoading, pageNo } = allCoursesDataState;
  const { screenName, courseID } = route.params;
  const navigateBack = () => {
    navigation.goBack();
    dispatch(pageCountAllCourses(0));
    return true;
  };

  useEffect(() => {
    dispatch(getAllCourses(courseID));
  }, [pageNo]);

  const onRefresh = React.useCallback(() => {
    dispatch(getAllCourses(courseID));
    dispatch(pageCountAllCourses(0));
  }, []);

  useBackButton(() => {
    navigateBack();
    dispatch(pageCountAllCourses(0));
    return true;
  });

  const onEndReach = () => {
    if (allCoursesData.length > 7) dispatch(pageCountAllCourses(pageNo));
  };

  const renderItems = ({ item }) => {
    return (
      <View>
        <Card
          title={item?.display_title}
          image={item?.image_url}
          rating={item?.rating}
          createdAt={item?.created}
          videoCount={item?.video_count}
          moduleCount={item?.module_count}
          courseLanguage={item?.course_language}
          courseStatus={item?.course_type_clp}
          onCourseModuleDetail={() => dispatch(setCourseDetails({ item, navigation }))}
          courseDetail={() => dispatch(setCourseDetailsById({ item, navigation }))}
        />
      </View>
    );
  };

  return (
    <View style={Styles.mainContainer}>
      <ComponentHeader
        goBack={navigateBack}
        headerText={screenName}
      />
      <View style={Styles.innerContainer}>
        <FlatList
          data={allCoursesData}
          keyExtractor={(item) => item.id}
          renderItem={renderItems}
          contentContainerStyle={Styles.flatListContainer}
          onEndReached={onEndReach}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={<EmptyListComponent />}
          refreshControl={
            <RefreshControl refreshing={isCourseLoading} onRefresh={onRefresh} />
        }
        />
      </View>
      <Loader show={isLoading} />
    </View>
  );
}

ViewAllChooseCourseScreen.propTypes = {
  navigation: PropTypes.any,
  route: PropTypes.any,
};

export default ViewAllChooseCourseScreen;
