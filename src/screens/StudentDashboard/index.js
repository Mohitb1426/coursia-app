import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  SafeAreaView, View, FlatList, RefreshControl,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getDashboardData, getLeaderBoardData } from './actionStudentDashboard';
import styles from './style';
import Loader from '../../components/Loader';
import MenuHeader from '../../components/MenuHeader';
import {
  LeaderBoardItem, ListHeaderDetailComponent, NoDataComponent,
} from './components';
import ErrorHandler from '../../common/ErrorHandler';
import useThemedStyles from '../../hooks/useThemedStyles';

const TAG = 'STUDENT_DASHBOARD';
function StudentDashboard({ navigation }) {
  const Styles = useThemedStyles(styles);
  const dashboardState = useSelector((state) => state.reducerStudentDashboard);
  const {
    isLoading, studentDashboardData, userName, studentLeaderBoardData,
  } = dashboardState;
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getDashboardData());
      dispatch(getLeaderBoardData());
    }, []),
  );

  const renderItems = ({ item }) => {
    return (
      <ErrorHandler componentName={`${TAG}_LEADER_BOARD_LIST_COMPONENT`}>
        <LeaderBoardItem key={item.user_id} item={item} />
      </ErrorHandler>
    );
  };

  const onRefresh = React.useCallback(() => {
    dispatch(getDashboardData());
    dispatch(getLeaderBoardData());
  }, []);

  return (
    <SafeAreaView style={Styles.mainContainer}>
      <MenuHeader />
      {isLoading ? (
        <Loader show={isLoading} />
      ) : (
        <View style={Styles.flatListContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={(
              <ErrorHandler componentName={`${TAG}_HEADER_LIST_COMPONENT`}>
                <ListHeaderDetailComponent
                  studentName={userName}
                  dashBoardData={[...studentDashboardData]}
                  navigation={navigation}
                  isLoader={isLoading}
                />
              </ErrorHandler>
            )}
            data={[...studentLeaderBoardData]}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
            ListEmptyComponent={<NoDataComponent />}
            renderItem={renderItems}
            keyExtractor={(index) => index.toString()}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

StudentDashboard.propTypes = {
  navigation: PropTypes.any,
};

export default StudentDashboard;
