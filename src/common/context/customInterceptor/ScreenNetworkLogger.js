import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View, SafeAreaView,
} from 'react-native';
import NetworkLogger from 'react-native-network-logger';
import { useNavigation } from '@react-navigation/native';
import { ColorTheme } from '../../AppStyles';

function ScreenNetworkLogger() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <NetworkLogger />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.textContainer}>
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backText: {
    color: ColorTheme.blue,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

ScreenNetworkLogger.propTypes = {

};

export default ScreenNetworkLogger;
