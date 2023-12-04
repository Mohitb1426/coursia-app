/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Animated } from 'react-native';
import propTypes from 'prop-types';
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment-timezone';
import styles from './style';
import { vh } from '../../../common/Dimensions';
import useThemedStyles from '../../../hooks/useThemedStyles';

export function NotificationListItem({ notificationItem, handleDelete, handleMarkAsRead }) {
  const Styles = useThemedStyles(styles);
  const swipeRight = () => {
    return (
      <Animated.View
        style={{
          width: '100%',
          height: compHeight,
        }}
      />
    );
  };
  const compHeight = new Animated.Value(vh(95));
  const animatedDelete = () => {
    // setCompHeight(vh(0));
    // handleDelete();
    Animated.timing(compHeight, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      handleDelete();
    });
  };

  let formattedDate = '';
  if (notificationItem?.date !== '') {
    const d = moment(notificationItem?.date);
    formattedDate = d.fromNow(true);
  }

  return (
    <Swipeable
      renderRightActions={swipeRight}
      renderLeftActions={swipeRight}
      onSwipeableOpen={animatedDelete}
    >
      <Animated.View style={[Styles.animatedBoxStyle, { height: compHeight }]}>
        <TouchableOpacity
          onPress={() => {
            handleMarkAsRead();
          }}
        >
          <View
            style={
              notificationItem?.isRead === '1' ? Styles.readContainer : Styles.unreadContainer
            }
          >
            <Text style={Styles.titleTextStyle}>{notificationItem?.title}</Text>
            <Text style={Styles.bodyTextStyle}>{notificationItem?.body}</Text>
            <Text style={Styles.dateTextStyle}>{formattedDate}</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </Swipeable>
  );
}

NotificationListItem.propTypes = {
  notificationItem: propTypes.object,
  handleDelete: propTypes.func,
  handleMarkAsRead: propTypes.func,
  // selectedTab: propTypes.number,
  // switchTab: propTypes.func,
};
