import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function LeaderBoardHeader() {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={Styles.leaderBoardHeader}>
      <Text style={Styles.leaderBoardHeaderTitle}>
        {`${translations.DASHBOARD_LEADERBOARD_TNPSC}`}
      </Text>
      <Text style={Styles.leaderBoardHeaderSubTitle}>
        {`${translations.DASHBOARD_LAST_30_DAYS}`}
      </Text>
    </View>
  );
}

export default LeaderBoardHeader;
