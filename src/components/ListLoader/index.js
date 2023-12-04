import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './style';

function ListLoader() {
  return (
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    </View>
  );
}

export default ListLoader;
