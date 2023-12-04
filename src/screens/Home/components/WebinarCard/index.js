import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import styles from './styles';
import SvgIcon from '../../../../common/SvgIcon';
import { LocalizationContext } from '../../../../common/LocalizationProvider';

function WebinarCard() {
  const { translations } = useContext(LocalizationContext);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        {/* <SvgIcon.DetailText /> */}
        <Text style={styles.detailBoldTextStyle}>{translations.WEBINARS_CARD_TITLE}</Text>
        <Text style={styles.detailTextStyle}>
          {translations.WEBINARS_CARD_TITLE1}
        </Text>
      </View>
      <View style={styles.viewContainer}>
        <View style={styles.imageContainer}>
          <SvgIcon.VerandaIcon />
          <SvgIcon.WebinarIcon />
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonTextStyle}>{translations.WEBINARS_CARD_BUTTON}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default WebinarCard;
