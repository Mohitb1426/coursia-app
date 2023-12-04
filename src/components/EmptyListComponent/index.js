import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import PropType from 'prop-types';
import styles from './styles';
import SvgIcon from '../../common/SvgIcon';
import { LocalizationContext } from '../../common/LocalizationProvider';
import useThemedStyles from '../../hooks/useThemedStyles';

function EmptyListComponent({ emptyListText }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={Styles.noDataContainer}>
      <SvgIcon.NoDataIcon />
      <Text style={Styles.noDataTextStyle}>{emptyListText || translations.NO_DATA}</Text>
    </View>
  );
}

EmptyListComponent.propTypes = {
  emptyListText: PropType.string,
};
export default EmptyListComponent;
