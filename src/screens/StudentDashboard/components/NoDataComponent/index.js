import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import styles from './styles';
import SvgIcon from '../../../../common/SvgIcon';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function NoDataComponent() {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={Styles.noDataContainer}>
      <SvgIcon.NoDataIcon />
      <Text style={Styles.noDataTextStyle}>{translations.NO_DATA}</Text>
    </View>
  );
}

export default NoDataComponent;
