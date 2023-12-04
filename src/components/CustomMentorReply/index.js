/* eslint-disable react-native/no-inline-styles */
import {
  View, Text, Image, FlatList, TouchableOpacity, useWindowDimensions,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import propTypes from 'prop-types';
import RenderHTML, { HTMLContentModel, HTMLElementModel } from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import moment from 'moment-timezone';
import styles from './style';
import { ColorTheme } from '../../common/AppStyles';
import { getRandomID } from '../../utilities';
import { Routes } from '../../routes/Routes';
import { LocalizationContext } from '../../common/LocalizationProvider';
import ErrorHandler from '../../common/ErrorHandler';
import useThemedStyles from '../../hooks/useThemedStyles';

export function CustomMentorReply({ mentorData, isTouchable = true }) {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const { translations } = useContext(LocalizationContext);
  const [showReplay, setShowReplay] = useState(false);
  const Styles = useThemedStyles(styles);

  const customHTMLElementModels = {
    font: HTMLElementModel.fromCustomModel({
      tagName: 'font',
      contentModel: HTMLContentModel.block,
    }),
  };
  const TAG = 'CustomMentorReply';
  const htmlData = JSON.parse(mentorData?.content);
  let acronym = '';
  if (mentorData) {
    const matches = mentorData?.user_name?.match(/\b(\w)/g); // ['J','S','O','N']
    acronym = matches.join('');
  }

  let formattedDate = '';
  if (mentorData?.created_at !== '') {
    const d = moment(mentorData?.created_at);
    formattedDate = d.fromNow(true);
  }

  function removeEscapeSequence(str) {
    return str.replace(/\\"/g, '"');
  }

  const renderItems = ({ item }) => {
    return (
      <ErrorHandler componentName={`${TAG}image_item`}>
        { isTouchable ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(Routes.SCREEN_IMAGE_WEBVIEW, { htmlText: item });
            }}
          >
            <View style={{ height: 200, width: '100%', marginTop: 10 }}>
              <AutoHeightWebView
                viewportContent="width=device-width, user-scalable=no"
                source={{
                  html: removeEscapeSequence(item),
                }}
                scrollEnabled
                showsHorizontalScrollIndicator
                style={{ opacity: 0.99 }}

              />
            </View>
          </TouchableOpacity>
        ) : (
          <View style={{ height: 200, width: '100%', marginTop: 10 }}>
            <AutoHeightWebView
              viewportContent="width=device-width, user-scalable=no"
              source={{
                html: removeEscapeSequence(item),
              }}
              scrollEnabled
              showsHorizontalScrollIndicator
              style={{ opacity: 0.99 }}

            />
          </View>
        )}
      </ErrorHandler>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setShowReplay(true);
    }, 1000);

    return (() => setShowReplay(false));
  }, []);

  if (!showReplay) return null;

  if (showReplay) {
    return (

      <ErrorHandler componentName={TAG}>
        <View style={Styles.answerContainerStyle}>
          <View style={Styles.subContainerZero}>
            <View style={Styles.subContainerOne}>
              <View style={Styles.nameLogoStyle}>
                <Text style={Styles.nameLogoTextStyle}>{acronym}</Text>

                <Image
                  style={Styles.nameLogoTextStyle}
                  source={{
                    uri: mentorData?.user_photo,
                  }}
                />
              </View>
            </View>
            <View style={Styles.subContainerTwo}>
              <Text style={Styles.textStyle2}>{mentorData.user_name}</Text>
              <Text style={Styles.textStyle3}>{formattedDate}</Text>
            </View>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={[ColorTheme.greenGradiantColor1, ColorTheme.greenGradiantColor2]}
              style={Styles.cardStyles}
            >
              <Text style={Styles.textStyle4}>{translations.MENTOR_ANSWER}</Text>
            </LinearGradient>
          </View>
          {/* mentor reply view starts here */}
          <View style={Styles.ansWebViewStyle}>
            <View style={Styles.renderHtmlContainer}>
              <RenderHTML
                contentWidth={width}
                source={{ html: htmlData?.text }}
                customHTMLElementModels={customHTMLElementModels}
              />
              <FlatList
                data={htmlData?.images}
                renderItem={renderItems}
                keyExtractor={() => getRandomID()}
              />
            </View>
          </View>
        </View>
      </ErrorHandler>

    );
  }
}

CustomMentorReply.propTypes = {
  mentorData: propTypes.any,
  isTouchable: propTypes.bool,
};
