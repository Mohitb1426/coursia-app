import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import SvgIcon from '../../../../common/SvgIcon';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function Header({ name }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <View>
      <View style={Styles.headerHorizontalContainer}>
        <View style={Styles.headerVerticalContainer}>
          <Text style={Styles.headerHeadingStyle}>
            {`${translations.DASHBOARD_HEY} ${name} !`}
          </Text>
          <Text style={Styles.headerTextStyle}>
            {`${translations.DASHBOARD_HERE_SNEAK_PEAK}`}
          </Text>
        </View>
        <SvgIcon.ReadingOfBooks />
      </View>
    </View>
  );
}

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
