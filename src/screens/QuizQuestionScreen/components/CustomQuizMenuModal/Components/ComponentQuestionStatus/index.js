/* eslint-disable max-len */
import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './style';
import { updateQuestionStatus } from '../../../../actionQuizQuestion';

function ComponentQuestionStatus({ sectionStatus, qnStatus }) {
  const dispatch = useDispatch();
  const mark_As_Review = qnStatus.markAsReview_Attempted + qnStatus.markAsReview_Unattempted;
  const questionsStatus = () => {
    dispatch(updateQuestionStatus(qnStatus));
  };

  useEffect(() => {
    questionsStatus();
  }, [qnStatus]);

  return (
    <View>
      {sectionStatus ? (
        <View style={styles.subContainer}>
          <View style={[styles.viewStyle, styles.markForReviewStyle]}>
            <Text style={styles.textStyle}>{mark_As_Review}</Text>
          </View>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{qnStatus.attempted}</Text>
          </View>
          <View
            style={[
              styles.viewStyle,
              styles.unAttemptedViewStyle,
            ]}
          >
            <Text
              style={[
                styles.textStyle,
                styles.unAttemptedTextStyle,
              ]}
            >
              {qnStatus.unAttempted}
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}

ComponentQuestionStatus.propTypes = {
  sectionStatus: propTypes.any,
  qnStatus: propTypes.any,
};

export default ComponentQuestionStatus;
