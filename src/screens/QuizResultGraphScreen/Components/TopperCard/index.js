import {
  View, Text, ImageBackground, Image,
} from 'react-native';
import React, { useContext } from 'react';
import Images from '../../../../common/Images';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';

function TopperCard() {
  const { translations } = useContext(LocalizationContext);
  return (
    <ImageBackground
      source={Images.TOPPER_CARD_BG}
      style={styles.cardContainer}
      imageStyle={styles.cardImageStyle}
    >
      <View style={styles.cardLeftContainer}>
        <Image source={Images.TOPPER_CARD_WAVE} style={styles.waveImageStyle} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.headingTextStyle}>
            {translations.QUIZ_RESULT_GRAPH_SCREEN_TOPPER_CARD_TITLE}
          </Text>
          <Text style={styles.detailTextStyle}>
            {translations.QUIZ_RESULT_GRAPH_SCREEN_TOPPER_CARD_DETAIL}
          </Text>
        </View>
      </View>
      <View style={styles.cardRightContainer}>
        <Image source={Images.TOPPER_CARD_AIM} style={styles.aimImageStyle} />
        <View style={styles.cardRightInnerContainer}>
          <Image
            source={Images.TOPPER_CARD_TROPHY}
            style={styles.trophyImageStyle}
          />
          <Image
            source={Images.TOPPER_CARD_MADEL}
            style={styles.madelImageStyle}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default TopperCard;
