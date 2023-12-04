import React from 'react';
import {
  View, Modal, ActivityIndicator,
} from 'react-native';
import propTypes from 'prop-types';
import styles from './style';

function Loader({ show }) {
  return show ? (
    <Modal transparent animationType="none" visible={show} onRequestClose={() => null}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      </View>
    </Modal>
  ) : null;
}

export default Loader;

Loader.propTypes = {
  show: propTypes.bool,
};
