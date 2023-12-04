/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import ComponentUserDetails from './UserComponent';
import UserComment from './UserComment';
import ErrorHandler from '../../../common/ErrorHandler';
import styles from './style';
import MentorComment from './MentorComment';
import useThemedStyles from '../../../hooks/useThemedStyles';

function FeedbackListItem({ commentQuizData }) {
  const Styles = useThemedStyles(styles);
  const TAG = 'FeedbackListItem';

  const [userData, setUserData] = useState(null);
  const [mentorData, setMentorData] = useState(null);

  const reducerQuizResultAnswer = useSelector((state) => state.reducerQuizResultAnswer);
  const { courseDetails } = reducerQuizResultAnswer;

  useEffect(() => {
    commentQuizData.forEach((element) => {
      if (element.type === 'Ticket') {
        setUserData(element);
      }

      if (element.type === 'Comment') {
        setMentorData(element);
      }
    });
  }, [commentQuizData]);

  if (!userData) {
    return null;
  }

  let courseName = '';
  if (courseDetails.length > 0) {
    courseName = courseDetails[0].display_title;
  }

  return userData ? (
    <ErrorHandler componentName={TAG}>
      <View style={Styles.mainContainerResolved}>
        <ComponentUserDetails
          name={userData?.user_name}
          firstName={userData?.first_name}
          lastName={userData?.last_name}
          courseName={courseName}
          time={userData?.created_at}
          status={userData?.zoho_status}
        />

        <UserComment userData={userData} />

        {mentorData ? <MentorComment mentorData={mentorData} /> : null}
      </View>
    </ErrorHandler>
  ) : null;
}

export default FeedbackListItem;

FeedbackListItem.propTypes = {
  commentQuizData: propTypes.array,
};
