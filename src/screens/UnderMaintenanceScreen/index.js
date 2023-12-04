import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ColorTheme, FontTheme } from '../../common/AppStyles';
import { LocalizationContext } from '../../common/LocalizationProvider';
import SvgIcon from '../../common/SvgIcon';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

function UnderMaintenanceScreen() {
  const { translations } = useContext(LocalizationContext);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.oopsIcon}>
        <SvgIcon.OopsIcon />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.mainHeading}>{translations.SOMETHING_WENT_WRONG}</Text>
        <View style={styles.subHeadingContainer}>
          <Text style={styles.subHeading}>
            {translations.UNDER_MAINTENANCE_DESCRIPTION}
          </Text>
          <Text style={styles.subHeading}>
            {translations.UNDER_MAINTENANCE_SUB_DESCRIPTION}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          // onButtonPress={onButtonPress}
          buttonText={translations.TRY_AGAIN}
          customStyle={styles.customStyle}
          buttonColor={ColorTheme.GREEN_BG}
          textColor={ColorTheme.WHITE}
          fontFamily={FontTheme.INTER_BOLD}
        />
      </View>
    </View>
  );
}

export default UnderMaintenanceScreen;
