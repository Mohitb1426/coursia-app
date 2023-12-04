import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { UserAvatar } from '../../../../components';
import ErrorHandler from '../../../../common/ErrorHandler';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { camelCase } from '../../../../utilities/commonFunction/replaceSpace';

const TAG = 'DRAWER_HEADER_COMPONENT';
function DrawerHeader(props) {
  const Styles = useThemedStyles(styles);
  const { updateProfile, data } = props;
  return (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.headerContainer}>
        <View style={Styles.avatarContainer}>
          <UserAvatar
            avatarSize={61}
            editable
            imagePath={data.image_url}
            firstName={`${data?.firstName}`}
            lastName={`${data?.lastName}`}
            onPressEdit={updateProfile}
          />
        </View>
        <View style={Styles.detailContainer}>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            ellipsizeMode="middle"
            style={Styles.nameTextStyle}
          >
            {`${camelCase(data?.firstName)} ${camelCase(data?.lastName)}`}
          </Text>
          <Text
            allowFontScaling={false}
            numberOfLines={2}
            style={Styles.userDetailTextStyle}
          >
            {data?.email}
          </Text>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={Styles.userDetailTextStyle}
          >
            {`${data?.code} ${data?.mobile}`}
          </Text>
        </View>
      </View>
    </ErrorHandler>
  );
}

DrawerHeader.propTypes = {
  updateProfile: PropTypes.func,
  data: PropTypes.object,
};

export default DrawerHeader;
