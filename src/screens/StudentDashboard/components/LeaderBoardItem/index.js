import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { UserAvatar } from '../../../../components';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { topperColorCodes } from '../../../../utilities/commonFunction/randomColor';
import { camelCase } from '../../../../utilities/commonFunction/replaceSpace';

function LeaderBoardItem({ item }) {
  const Styles = useThemedStyles(styles);
  const { first_name, last_name } = item;
  const getMainContainerStyle = () => {
    let style = Styles.mainContainer;
    if (item.is_self === 0 && item.is_topper === 1) {
      style = Styles.mainContainerTopper;
    }
    if (item.is_self === 1 && item.is_topper === 1) {
      style = Styles.mainContainerTopper;
    }
    if (item.is_self === 1 && item.is_topper === 0) {
      style = Styles.mainContainerSelf;
    }
    return style;
  };

  const { translations } = useContext(LocalizationContext);
  return (
    <View style={getMainContainerStyle()}>
      <View style={Styles.nameLogoStyle}>
        <UserAvatar
          avatarSize={35}
          multiColor
          fontSize={18}
          imagePath={item.image}
          firstName={`${(first_name).trim()}`}
          lastName={`${(last_name).trim()}`}
        />
      </View>
      <View style={Styles.subContainer}>
        <Text numberOfLines={1} style={Styles.nameStyle(item.is_self)}>{`${camelCase(first_name)} ${camelCase(last_name)}`}</Text>
        <Text style={Styles.correctAnsStyle}>
          {`${item.question_answered} ${translations.DASHBOARD_CORRECT_ANSWERES}`}
        </Text>
      </View>
      <View style={Styles.spacer} />
      <Text style={item.is_self === 1
        ? Styles.rankStyleSelf
        : Styles.rankStyleGold(topperColorCodes(item.rank))}
      >
        {item.rank}
      </Text>
      {/* <Text style={getRankStyle(item.type)}>{item.rank}</Text> */}
    </View>
  );
}

LeaderBoardItem.propTypes = {
  item: PropTypes.object,
};

export default React.memo(LeaderBoardItem);
