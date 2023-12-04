import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function CustomToggle(props) {
  const { isActive, onPressToggle } = props;
  //   const [isActive, setIsActive] = React.useState(false);
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={Styles.container}>
      <Text style={Styles.titleTextStyle}>{translations.CC_RECORDED_CLASSES}</Text>
      <TouchableOpacity
        onPress={onPressToggle}
        activeOpacity={1}
        style={Styles.toggleContainer(isActive)}
      >
        <View style={isActive ? Styles.toggleInnerContainer1 : Styles.toggleInnerContainer} />
        <View style={isActive ? Styles.toggleInnerContainer : Styles.toggleInnerContainer1} />
      </TouchableOpacity>
    </View>
  );
}

CustomToggle.propTypes = {
  isActive: PropTypes.bool,
  onPressToggle: PropTypes.func,
};

export default CustomToggle;
