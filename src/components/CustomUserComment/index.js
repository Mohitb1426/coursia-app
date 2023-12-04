import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useContext, useCallback } from 'react';
import propTypes from 'prop-types';
import ErrorHandler from '../../common/ErrorHandler';
import styles from './style';
import { LocalizationContext } from '../../common/LocalizationProvider';
import useThemedStyles from '../../hooks/useThemedStyles';

export function CustomUserComment({ userData }) {
  const Styles = useThemedStyles(styles);
  const TAG = 'CustomUserComment';
  const NUM_OF_LINES = 2;
  const { translations } = useContext(LocalizationContext);
  const [loadMore, setLoadMore] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);
  const onTextLayout = useCallback((e) => {
    if (numOfLines === 0) { setNumOfLines(e.nativeEvent.lines.length); }
  });

  const onLoadMoreToggle = () => {
    setLoadMore(!loadMore);
  };

  return (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.questionContainerStyle}>
        <Text style={Styles.subjectTextStyle}>{userData.subject}</Text>
        <Text
          // eslint-disable-next-line no-nested-ternary
          numberOfLines={numOfLines === 0 ? null : loadMore ? numOfLines : NUM_OF_LINES}
          style={Styles.contentTextStyle}
          onTextLayout={onTextLayout}
        >
          {userData?.content}
        </Text>
        {(numOfLines > NUM_OF_LINES) && (
          <TouchableOpacity
            onPress={onLoadMoreToggle}
          >
            <Text style={Styles.viewMoreText}>
              {loadMore ? translations.VIEW_LESS : translations.VIEW_MORE}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ErrorHandler>
  );
}

CustomUserComment.propTypes = {
  userData: propTypes.any,
};
