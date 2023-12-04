import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Config from 'react-native-config';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import styles from './styles';
import ErrorHandler from '../../../../common/ErrorHandler';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { isObjectEmpty } from '../../../../utilities/commonFunction/isObjectEmpty';

const TAG = 'DRAWER_FOOTER_COMPONENT';
function DrawerFooter({ passData }) {
  const { translations } = useContext(LocalizationContext);
  const Styles = useThemedStyles(styles);
  const getDate = (date) => {
    if (date) {
      const [newDate] = date.split(' ');
      const [plan_year, plan_month, plan_date] = newDate.split('-');
      return `${plan_date}.${plan_month}.${plan_year}`;
    }
    return '';
  };

  const checkActivePass = () => {
    if (isObjectEmpty(passData)) {
      return null;
    }
    return (
      <Text style={Styles.passTextStyle}>{`${passData?.pass_name} ${translations.ACTIVE_UNTIL} ${getDate(passData?.plan_expiry_date)}`}</Text>
    );
  };

  return (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.bottomContainer}>
        {checkActivePass()}
        <Text style={Styles.versionTextStyle}>
          {`Version ${Config.ANDROID_VERSION_NAME}`}
        </Text>
        <Text style={Styles.copyRightTextStyle}>
          Veranda RACE Learning Solutions Limited
        </Text>
        <Text style={Styles.copyRightTextStyle}>
          All Rights Reserved
        </Text>
      </View>
    </ErrorHandler>
  );
}

DrawerFooter.propTypes = {
  passData: PropTypes.object,
};

export default DrawerFooter;
