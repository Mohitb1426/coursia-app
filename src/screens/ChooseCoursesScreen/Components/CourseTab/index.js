import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function CourseTab({ activeTabName, onPressTab }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity
        // activeOpacity={6}
        onPress={() => onPressTab('EXAM')}
        style={[
          Styles.tabButtonContainer,
          activeTabName === 'EXAM' ? Styles.activeButton : null,
        ]}
      >
        <Text
          style={[
            Styles.tabTextStyle,
            activeTabName === 'EXAM' ? Styles.activeTabTextStyle : null,
          ]}
        >
          {translations.CC_EXAM}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        // activeOpacity={6}
        onPress={() => onPressTab('FACULTY')}
        style={[
          Styles.tabButtonContainer,
          activeTabName === 'FACULTY' ? Styles.activeButton : null,
        ]}
      >
        <Text
          style={[
            Styles.tabTextStyle,
            activeTabName === 'FACULTY' ? Styles.activeTabTextStyle : null,
          ]}
        >
          {translations.CC_FACULTY}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        // activeOpacity={6}
        onPress={() => onPressTab('SUBJECT')}
        style={[
          Styles.tabButtonContainer,
          activeTabName === 'SUBJECT' ? Styles.activeButton : null,
        ]}
      >
        <Text
          style={[
            Styles.tabTextStyle,
            activeTabName === 'SUBJECT' ? Styles.activeTabTextStyle : null,
          ]}
        >
          {translations.CC_SUBJECT}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

CourseTab.propTypes = {
  activeTabName: PropTypes.string,
  onPressTab: PropTypes.func,
};

export default CourseTab;
