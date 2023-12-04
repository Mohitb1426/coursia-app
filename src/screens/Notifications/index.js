import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Linking, View } from 'react-native';
// import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import CustomHeader from '../../components/CustomHeader';
import { NotificationTab } from './NotificationTabs';
import {
  setNotificationTabIndex,
  getNotifications,
  deleteNotification,
  markAsReadNotification,
  setNotificationCount,
} from './actionNotification';
import { NotificationListItem } from './NotificationListItem';
// import { debugLog } from '../../common/Logger';
import NoItemPlaceholder from './NoItemPlaceHolder';
import ListLoader from '../../components/ListLoader';
import { LocalizationContext } from '../../common/LocalizationProvider';
import useThemedStyles from '../../hooks/useThemedStyles';

function NotificationScreen() {
  const Styles = useThemedStyles(styles);
  const notificationState = useSelector((state) => state.reducerNotification);
  const {
    notificationTabIndex, isLoading, mainNotificationList, unReadNotificationCount,
  } = notificationState;
  const [masterList, setSetMasterList] = useState(mainNotificationList);
  const [notificationList, setNotificationList] = useState([]);
  const { translations } = useContext(LocalizationContext);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  const filterData = () => {
    if (notificationTabIndex === 1) {
      const list = masterList.filter((item) => item.isRead === '1');
      setNotificationList(list);
    } else if (notificationTabIndex === 2) {
      const list = masterList.filter((item) => item.isRead === '0');
      setNotificationList(list);
    } else {
      setNotificationList(masterList);
    }
  };
  useEffect(() => {
    filterData();
  }, [notificationTabIndex, masterList]);

  useEffect(() => {
    setSetMasterList(mainNotificationList);
  }, [mainNotificationList]);

  const renderData = ({ item }) => {
    return (
      <NotificationListItem
        notificationItem={item}
        handleDelete={() => deleteItem(item.id)}
        handleMarkAsRead={() => {
          handleDeepLink(item.additionalData?.deepLink);
          if (item.isRead === '0') markAsReadItem(item.id);
        }}
      />
    );
  };

  const handleDeepLink = (link) => {
    if (link) {
      Linking.openURL(link);
    }
  };

  const renderPlaceHolder = () => {
    return <NoItemPlaceholder title={translations.TEXT_ALL_CLEARED} />;
  };

  const renderSaperator = () => {
    return <View style={Styles.seperatorLine} />;
  };

  const deleteItem = (id) => {
    const arr = [...notificationList];
    const arrMasterList = [...masterList];
    const index = arr.findIndex((obj) => obj.id === id);
    if (arr[index].isRead === '0') {
      dispatch(setNotificationCount(unReadNotificationCount - 1));
    }
    const indexInMasterList = arrMasterList.findIndex((obj) => obj.id === id);
    arr.splice(index, 1);
    arrMasterList.splice(indexInMasterList, 1);
    setNotificationList(arr);
    setSetMasterList(arrMasterList);
    dispatch(deleteNotification(id));
  };

  const markAsReadItem = (id) => {
    dispatch(setNotificationCount(unReadNotificationCount - 1));
    dispatch(
      markAsReadNotification({
        isAll: false,
        readId: id,
      }),
    );
    const arr = [...notificationList];
    const arrMasterList = [...masterList];
    const index = arr.findIndex((obj) => obj.id === id);
    const indexInMasterList = arrMasterList.findIndex((obj) => obj.id === id);
    const obj = arr[index];
    obj.isRead = '1';
    arr[index] = obj;
    arrMasterList[indexInMasterList] = obj;
    setSetMasterList(arrMasterList);
    setNotificationList(arr);
    filterData();
  };

  const markAllAsRead = () => {
    dispatch(setNotificationCount(0));
    dispatch(
      markAsReadNotification({
        isAll: true,
        readId: 0,
      }),
    );
    const arrMasterList = [...masterList];
    for (let i = 0; i < arrMasterList.length; i += 1) {
      const obj = arrMasterList[i];
      obj.isRead = '1';
      arrMasterList[i] = obj;
    }
    setSetMasterList(arrMasterList);
    filterData();
  };

  const actionButtonClick = () => {
    markAllAsRead();
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={Styles.container}>
      <CustomHeader
        title={translations.TEXT_NOTIFICATION}
        actionText={translations.TEXT_MARK_ALL_READ}
        goBack={navigateBack}
        onClickActionText={actionButtonClick}
      />
      {/* <View style={Styles.dividerHeader} /> */}
      <NotificationTab
        selectedTab={notificationTabIndex}
        switchTab={(id) => {
          dispatch(setNotificationTabIndex(id));
        }}
      />
      {/* <View style={Styles.dividerTab} /> */}
      <View style={Styles.flatListContainer}>
        {isLoading ? (
          <ListLoader />
        ) : (
          <FlatList
            data={notificationList}
            renderItem={renderData}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={renderPlaceHolder}
            ItemSeparatorComponent={renderSaperator}
          />
        )}
      </View>
    </View>
  );
}

NotificationScreen.propTypes = {
  // navigation: propTypes.any,
};
export default NotificationScreen;
