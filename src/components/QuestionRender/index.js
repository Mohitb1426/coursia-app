/* eslint-disable react/no-array-index-key */
/* eslint-disable react-native/no-inline-styles */
import {
  View, Image, Text, useWindowDimensions,
} from 'react-native';
import React from 'react';
import RenderHtml, {
  HTMLElementModel,
  HTMLContentModel,
} from 'react-native-render-html';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../hooks/useThemedStyles';

export function QuestionRender({ questionData, check }) {
  const Styles = useThemedStyles(styles);
  const customHTMLElementModels = {
    font: HTMLElementModel.fromCustomModel({
      tagName: 'font',
      contentModel: HTMLContentModel.block,
    }),
  };

  const { width, height } = useWindowDimensions();
  const data = questionData && questionData.split('{{}}');
  return (
    <View style={Styles.questionTextContainer}>
      {data && data.map((item, index) => {
        if (item.includes('https')) {
          const imageWidth = item.substring(
            item.indexOf('?w=') === -1 ? 0 : item.indexOf('?w=') + 3,
            item.indexOf('&h=') === -1 ? 0 : item.indexOf('&h='),
          );
          const imageHeight = item.substring(
            item.indexOf('&h=') === -1 ? 0 : item.indexOf('&h=') + 3,
            item.indexOf('&h=') === -1 ? 0 : item.length,
          );

          let dynamicImageHeight;
          let dynamicImageWidth;
          if (Number(imageHeight) > height) {
            dynamicImageHeight = '100%';
          } else if (imageHeight === '') {
            dynamicImageHeight = 20;
          } else {
            dynamicImageHeight = Number(imageHeight);
          }
          if (Number(imageWidth) > width) {
            dynamicImageWidth = '100%';
          } else if (imageWidth === '') {
            dynamicImageWidth = 20;
          } else {
            dynamicImageWidth = Number(imageWidth);
          }

          return (
            <Image
              key={index}
              style={{
                height: dynamicImageHeight,
                width: dynamicImageWidth,
                resizeMode: 'contain',
              }}
              source={{
                uri: item.replace(/}|{/g, ''),
              }}
            />
          );
        }
        if (item.includes('<table') || item.includes('<img')) {
          const source = { html: item };
          return (
            <View style={Styles.renderHtmlContainer}>
              <RenderHtml
                contentWidth={width}
                source={source}
                customHTMLElementModels={customHTMLElementModels}
              />
            </View>
          );
        }
        return (
          <Text
            style={[
              Styles.questionText,
              check ? Styles.fontWeight5 : Styles.fontWeight5,
            ]}
            key={index}
          >
            {item}
            {' '}
          </Text>
        );
      })}
    </View>
  );
}

QuestionRender.propTypes = {
  questionData: PropTypes.string,
  // questionID: PropTypes.any,
  check: PropTypes.bool,
};

// export default QuestionRender;
