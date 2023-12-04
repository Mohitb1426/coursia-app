import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import ErrorHandler from '../../../../common/ErrorHandler';
import styles from './style';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function UserComment({ userData }) {
  const Styles = useThemedStyles(styles);
  const MAX_LENGHT = 150;
  const TAG = 'UserComment';

  const [viewMore, setViewMore] = useState(false);
  const { translations } = useContext(LocalizationContext);

  return (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.questionContainerStyle}>
        <Text style={Styles.subjectTextStyle}>{userData.subject}</Text>
        <Text style={Styles.contentTextStyle}>
          {viewMore ? userData?.content : userData?.content?.substring(0, MAX_LENGHT)}
        </Text>
        {userData?.content?.length > MAX_LENGHT - 1 ? (
          <TouchableOpacity
            onPress={() => {
              setViewMore(!viewMore);
            }}
          >
            <Text style={Styles.viewMoreText}>
              {viewMore ? translations.VIEW_LESS : translations.VIEW_MORE}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </ErrorHandler>
  );
}

export default UserComment;

UserComment.propTypes = {
  userData: propTypes.any,
};
