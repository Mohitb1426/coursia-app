/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style';
// import { CustomMentorReply } from '../../../../components';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
// import ComponentQuestionImage from './components/ComponentQuestionImage';
import ComponentUserDetails from './components/ComponentUserDetails/componentUserDetails';
import { ASK_DOUBT_CONSTANTS } from '../../constantsScreenAskDoubt';
import { setTicketId } from '../../actionAskDoubt';
import Images from '../../../../common/Images';
import { CustomTagList } from '../../../../components';
import ProgressBarComponent from './components/ProgressBarComponent';
import useThemedStyles from '../../../../hooks/useThemedStyles';

export function QuestionAnswerCard({ data, navigate }) {
  const {
    tags,
    user_photo,
    user_name,
    subject,
    created_at,
    zoho_ticket_id,
    zoho_status,
    // attachments,
    comment_count,
    first_name,
    last_name,
    is_deleted,
    content,
  } = data;

  const nameFirstCharacter = first_name + last_name;
  const dispatch = useDispatch();
  const askDoubtState = useSelector((state) => state.reducerAskDoubt);
  const { isActiveToggleButton } = askDoubtState;
  const { translations } = useContext(LocalizationContext);
  const Styles = useThemedStyles(styles);

  return (
    <TouchableOpacity
      style={Styles.mainContainer}
      onPress={navigate}
    >
      {isActiveToggleButton
        ? null
        : zoho_status === ASK_DOUBT_CONSTANTS.RESOLVED
          ? null
          : is_deleted === ASK_DOUBT_CONSTANTS.IS_TICKET_DELETED ? (
            <View style={Styles.deletedTicketStyle}>
              <Text style={Styles.deletedTextStyle}>{translations.DELETED}</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                dispatch(setTicketId(zoho_ticket_id));
              }}
              style={Styles.notDeletedTicketStyle}
            >
              <Image source={Images.DELETE_TICKET_ICON} style={Styles.imageStyle} />
            </TouchableOpacity>
          )}

      <ComponentUserDetails
        imageUrl={user_photo}
        nameLogo={nameFirstCharacter}
        name={user_name}
        topic={subject}
        time={created_at}
        status={zoho_status}
        ticketId={zoho_ticket_id}
        commentsCount={comment_count}
      />

      {/* Question Container */}
      <View style={Styles.questionContainerStyle}>
        <Text style={Styles.textStyle}>
          {subject}
        </Text>
        <Text numberOfLines={1} style={Styles.contentTextStyle}>
          {content}
        </Text>
      </View>
      <View style={Styles.inputContainer}>
        <View style={Styles.questionImageContainer}>
          {/* <View style={Styles.imageContainerStyle}>
            {attachments.map((item) => {
              return (
                <ComponentQuestionImage
                  key={item}
                  imageUrl={item}
                />
              );
            })}
          </View> */}
          <View style={Styles.flatListContainer}>
            <CustomTagList tags={tags} />
          </View>
          {isActiveToggleButton ? null : (
            <View style={Styles.progressBarContainer}>
              <ProgressBarComponent status={zoho_status} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

QuestionAnswerCard.propTypes = {
  data: propTypes.object,
  navigate: propTypes.func,
};
