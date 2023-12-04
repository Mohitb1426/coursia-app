import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import SvgIcon from '../../common/SvgIcon';
import ErrorHandler from '../../common/ErrorHandler';
import useThemedStyles from '../../hooks/useThemedStyles';

const size = 61;
const TAG = 'USER_AVATAR_COMPONENT';
function UserAvatar(props) {
  const Styles = useThemedStyles(styles);
  const {
    firstName,
    lastName,
    imagePath,
    avatarSize = 61,
    editable,
    onPressEdit,
    fontSize = 32,
    multiColor = false,
  } = props;

  const avatarImageName = (value1, value2) => {
    if (!value1 && !value2) {
      return '';
    }
    return `${value1[0]}${value2[0]}`.toUpperCase();
  };
  return (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.container(avatarSize)}>
        <View style={Styles.mainContainer(avatarSize)}>
          {imagePath.trim() === ''
            ? (
              <View style={Styles.avatarNameContainer(size, multiColor)}>
                <Text
                  allowFontScaling={false}
                  style={Styles.avatarNameStyle(fontSize)}
                >
                  {avatarImageName(firstName, lastName)}
                </Text>
              </View>
            )
            : <Image style={Styles.imageContainer(avatarSize)} source={{ uri: imagePath }} />}
        </View>
        {editable ? (
          <TouchableOpacity onPress={onPressEdit} style={Styles.editButtonContainer}>
            <SvgIcon.EditIcon />
          </TouchableOpacity>
        ) : null}
      </View>
    </ErrorHandler>
  );
}

UserAvatar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  imagePath: PropTypes.string,
  avatarSize: PropTypes.number,
  editable: PropTypes.bool,
  onPressEdit: PropTypes.func,
  fontSize: PropTypes.number,
  multiColor: PropTypes.bool,
};

export default UserAvatar;
