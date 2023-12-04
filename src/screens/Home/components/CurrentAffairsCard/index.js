import {
  View, Text, ImageBackground, TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Images from '../../../../common/Images';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { Routes } from '../../../../routes/Routes';
import SvgIcon from '../../../../common/SvgIcon';

export function CurrentAffairsCard() {
  const { translations } = useContext(LocalizationContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(Routes.SCREEN_CURRENT_AFFAIRS, { initialIndex: 0, initialID: 1 });
      }}
    >
      <View style={styles.mainContainer}>
        <ImageBackground
          source={Images.CURRENT_AFFAIRS_CARD_BG}
          style={styles.bgImageContainer}
          imageStyle={styles.bgImageStyle}
        >
          <View style={styles.subContainer}>
            <View style={styles.goalContainer}>
              <Text style={styles.titleTextStyle}>{translations.CURRENT_AFFAIRS_TITLE}</Text>
              <Text style={styles.detailTextStyle}>{translations.CURRENT_AFFAIRS_DETAIL}</Text>
            </View>
            <SvgIcon.CurrentAffairsIcon />
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}
