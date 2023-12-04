import {
  View, Text, Image, TouchableWithoutFeedback, TouchableOpacity,
} from 'react-native';
import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { SvgCssUri } from 'react-native-svg';
import styles from './styles';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { VER_BG_Mask } from '../../../../assets/images/ImagesData';
import Images from '../../../../common/Images';
import { isImage } from '../../../../utilities/commonFunction/checkImage';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function Card({
  title,
  image,
  onCourseModuleDetail,
  courseDetail,
  videoCount,
  rating,
  moduleCount,
  courseLanguage,
  createdAt,
  cardKey,
}) {
  const Styles = useThemedStyles(styles);
  const [errorOccur, setError] = useState(false);
  const { translations } = useContext(LocalizationContext);

  return (
    <View key={cardKey} style={Styles.container}>
      <TouchableWithoutFeedback
        onPress={courseDetail}
        style={Styles.touchableWithoutFeedback_Style}
      >
        <View style={Styles.touchableContainer}>
          <View style={Styles.image}>
            {isImage(image) ? (
              <View style={Styles.image}>
                <Image
                  style={Styles.bgImage}
                  source={
                    image
                      ? {
                        uri: image,
                      }
                      : VER_BG_Mask
                  }
                  resizeMode="stretch"
                />
              </View>
            ) : (
              <View style={Styles.image}>
                {errorOccur ? (
                  <View style={Styles.image}>
                    <Image source={VER_BG_Mask} resizeMode="stretch" style={Styles.defaultImage} />
                  </View>
                ) : (
                  <View style={Styles.image}>
                    <SvgCssUri
                      preserveAspectRatio="none"
                      width="100%"
                      height="100%"
                      uri={image || ''}
                      onError={() => setError(true)}
                    />
                  </View>
                )}
              </View>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={Styles.containerView}>
        <View style={Styles.subTextContainerTwo}>
          <View style={Styles.langContainer}>
            {courseLanguage.map((item) => (
              <View style={Styles.buttonText}>
                <Text style={Styles.textStyle}>{item.name}</Text>
              </View>
            ))}
          </View>
          <View style={Styles.spacer} />
          {(videoCount > 0 || moduleCount > 0) && (
            <Text style={Styles.subText}>
              {`${videoCount > 0 ? videoCount : moduleCount} ${
                videoCount > 0 ? translations.CC_VIDEOS : translations.CC_MODULES
              } `}
            </Text>
          )}
        </View>
        <Text style={Styles.learnersText} numberOfLines={2}>
          {title}
        </Text>
        <View style={Styles.subTextContainer}>
          <Text style={Styles.subText}>{`${translations.CC_STARTS} ${createdAt} `}</Text>
          <View style={Styles.spacer} />
          <Text style={Styles.subText}>{rating}</Text>
          <Image source={Images.STAR} style={Styles.starImageStyle} resizeMode="contain" />
        </View>
        <View style={Styles.verticalSpacer} />
        <View style={Styles.ctaButton}>
          <TouchableOpacity onPress={onCourseModuleDetail} style={Styles.viewButton}>
            <Text style={Styles.tryFreeText}>{translations.VIEW_DETAILS}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
Card.propTypes = {
  cardKey: propTypes.string,
  title: propTypes.string,
  image: propTypes.string,
  videoCount: propTypes.any,
  rating: propTypes.any,
  onCourseModuleDetail: propTypes.func,
  courseDetail: propTypes.func,
  moduleCount: propTypes.any,
  courseLanguage: propTypes.array,
  createdAt: propTypes.any,
};

export default React.memo(Card);
