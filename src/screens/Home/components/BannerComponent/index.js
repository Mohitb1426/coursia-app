import {
  View, Image, TouchableOpacity,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { Routes } from '../../../../routes/Routes';
// // import { bannerData } from './dummydata';

function BannerComponent({ navigation, data }) {
  const onCardPress = (cardType) => {
    switch (cardType) {
      case 'goal_cards':
        // navigation.navigate(Routes.SCREEN_ASK_DOUBT);
        break;
      case 'current_affairs_card':
        navigation.navigate(Routes.SCREEN_CURRENT_AFFAIRS, { initialIndex: 0, initialID: 1 });
        break;
      case 'webinars_card':
        // navigation.navigate(Routes.SCREEN_ASK_DOUBT);
        break;
      case 'refer_card':
        // navigation.navigate(Routes.SCREEN_STUDENT_DASHBOARD);
        break;
      default:
        break;
    }
  };

  const renderItems = ({ item, index }) => {
    const {
      card_image, fullWidth, card, height,
    } = item;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onCardPress(card)}
        key={index}
        style={styles.cardContainer(fullWidth, height)}
      >
        <Image
          source={{ uri: card_image }}
          style={styles.cardImageStyle}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {
        data.map((item, index) => renderItems({ item, index }))
      }
    </View>
  );
}

BannerComponent.propTypes = {
  data: PropTypes.array,
  navigation: PropTypes.any,
};

export default BannerComponent;
