import React, { useContext, useEffect } from 'react';
import {
  View, FlatList, ScrollView,
} from 'react-native';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  ComponentHeader, CustomMentorReply, CustomTagList, CustomUserComment, CustomUserDetails, Loader,
} from '../../components';
import styles from './style';
import { LocalizationContext } from '../../common/LocalizationProvider';
import ComponentQuestionImage from '../AskDoubtScreen/components/QuestionAnswerCard/components/ComponentQuestionImage';
import { getRandomID } from '../../utilities';
import { getDoubtDetails } from './actionDoubtDetail';
import useThemedStyles from '../../hooks/useThemedStyles';

export function DoubtsDetailsScreen({ navigation, route }) {
  const Styles = useThemedStyles(styles);
  const { params } = route;
  const { translations } = useContext(LocalizationContext);
  const { data, screenName } = params;
  const dispatch = useDispatch();
  const doubtDetailsState = useSelector((state) => state.reducerDoubtDetail);
  const { doubtsData, isLoading } = doubtDetailsState;
  const ticket_id = route?.params?.ticket_id;

  const navigateTo = () => {
    navigation.goBack();
  };
  useEffect(() => {
    if (ticket_id) {
      dispatch(getDoubtDetails(ticket_id));
    } else {
      dispatch(getDoubtDetails(data));
    }
  }, [ticket_id]);

  const renderData = ({ item }) => {
    return (
      <View style={Styles.replyContainer}>
        <CustomMentorReply mentorData={item} isTouchable />
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <ComponentHeader
        goBack={navigateTo}
        headerText={screenName || translations.MY_DOUBTS}
      />
      {doubtsData.length !== 0 ? (
        <ScrollView style={Styles.subContainer} showsVerticalScrollIndicator={false}>
          <CustomUserDetails
            name={doubtsData[0].first_name + doubtsData[0].last_name}
            time={doubtsData[0]?.created_at}
            status={doubtsData[0]?.zoho_status}
            courseName=""
            userName={doubtsData[0]?.user_name}
            image={doubtsData[0]?.user_photo}
          />
          <CustomUserComment userData={doubtsData[0]} />
          <View style={Styles.imageContainerStyle}>
            {doubtsData[0]?.attachments.map((item) => {
              return (
                <ComponentQuestionImage
                  key={() => getRandomID()}
                  imageUrl={item}
                />
              );
            })}
          </View>
          <View style={Styles.flatListContainer}>
            <CustomTagList
              tags={doubtsData[0]?.tags}
              customStyle={Styles.tagListStyle}
            />
          </View>
          {doubtsData[0]?.comments.length > 0 ? (
            <View style={Styles.mentorReplyContainer}>
              <FlatList
                data={doubtsData[0]?.comments}
                renderItem={renderData}
                keyExtractor={() => getRandomID()}
                showsVerticalScrollIndicator={false}
              />
            </View>
          ) : null}
        </ScrollView>
      ) : null }
      <Loader show={isLoading} />
    </View>
  );
}

DoubtsDetailsScreen.propTypes = {
  navigation: propTypes.any,
  route: propTypes.object,
};
