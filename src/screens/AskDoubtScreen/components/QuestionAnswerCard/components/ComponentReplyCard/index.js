import React, { useContext } from 'react';
import {
  View, Text, Image, useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import propTypes from 'prop-types';
import moment from 'moment-timezone';
import RenderHtml from 'react-native-render-html';
import { LocalizationContext } from '../../../../../../common/LocalizationProvider';
import Images from '../../../../../../common/Images';
import styles from './style';
import useThemedStyles from '../../../../../../hooks/useThemedStyles';
import { ThemeContext } from '../../../../../../common/ThemeProvider';

function ComponentReplyCard({ data }) {
  const { appTheme } = useContext(ThemeContext);
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  const { user_name, content, created_at } = data;
  const { width } = useWindowDimensions();

  const renderersProps = {
    img: {
      enableExperimentalPercentWidth: true,
    },
  };

  const calculateTime = () => {
    let formattedDate = '';
    if (created_at !== '') {
      const d = moment(created_at);
      formattedDate = d.fromNow(true);
    }
    return formattedDate;
  };

  const source = {
    html: content,
  };

  const renderMentorReply = () => {
    return (
      <RenderHtml
        contentWidth={width}
        source={source}
        renderersProps={renderersProps}
      />
    );
  };
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.headerContainer}>
        <View style={Styles.subContainer}>
          <Image source={Images.MENTOR_IMAGE} style={Styles.imageStyle} />
          <View style={Styles.secondSubContainer}>
            <Text style={Styles.mentorNameStyle}>{user_name}</Text>
            <Text style={Styles.mentorResponseTime}>
              {calculateTime()}
            </Text>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 2 }}
          colors={[appTheme.LINER_GRADIENT_COLOR_2, appTheme.LINER_GRADIENT_COLOR_3]}
          style={Styles.textContainerStyle}
        >
          <Text style={Styles.textStyle}>
            {translations.MENTOR_ANSWER_TEXT}
          </Text>
        </LinearGradient>
      </View>
      {renderMentorReply()}
    </View>
  );
}

ComponentReplyCard.propTypes = {
  data: propTypes.object,
};

export default ComponentReplyCard;
