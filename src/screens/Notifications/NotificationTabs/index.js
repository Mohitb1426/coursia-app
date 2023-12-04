import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import styles from './style';
import { LocalizationContext } from '../../../common/LocalizationProvider';

export function NotificationTab({ selectedTab, switchTab }) {
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={selectedTab === 0 ? styles.selectedTabStyle : styles.tabStyle}
        onPress={() => {
          switchTab(0);
        }}
      >
        <Text
          style={[
            styles.textStyle,
            selectedTab === 0 ? styles.activeTabTextColor : styles.inactiveTabTextColor,
          ]}
        >
          {translations.TEXT_ALL}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={selectedTab === 1 ? styles.selectedTabStyle : styles.tabStyle}
        onPress={() => {
          switchTab(1);
        }}
      >
        <Text
          style={[
            styles.textStyle,
            selectedTab === 1 ? styles.activeTabTextColor : styles.inactiveTabTextColor,
          ]}
        >
          {translations.TEXT_READ}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={selectedTab === 2 ? styles.selectedTabStyle : styles.tabStyle}
        onPress={() => {
          switchTab(2);
        }}
      >
        <Text
          style={[
            styles.textStyle,
            selectedTab === 2 ? styles.activeTabTextColor : styles.inactiveTabTextColor,
          ]}
        >
          {translations.TEXT_UNREAD}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

NotificationTab.propTypes = {
  selectedTab: propTypes.number,
  switchTab: propTypes.func,
};
