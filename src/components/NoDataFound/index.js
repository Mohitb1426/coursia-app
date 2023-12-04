import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import SvgIcon from '../../common/SvgIcon';
import ErrorHandler from '../../common/ErrorHandler';
import { LocalizationContext } from '../../common/LocalizationProvider';
import styles from './style';
import useThemedStyles from '../../hooks/useThemedStyles';

function NoDataFound() {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <ErrorHandler componentName="NoDataFound">
      <View style={Styles.container}>
        <SvgIcon.NoData />
        <Text style={Styles.noTextStyle}>{translations.NO_DATA}</Text>
      </View>
    </ErrorHandler>
  );
}

export default NoDataFound;
