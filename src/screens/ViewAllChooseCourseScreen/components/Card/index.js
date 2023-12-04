import {
  View, Text, Image, TouchableWithoutFeedback, TouchableOpacity,
} from 'react-native';
import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { SvgCssUri } from 'react-native-svg';
import styles from './styles';
import { isImage } from '../../../../utilities/commonFunction/checkImage';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { VER_BG_Mask } from '../../../../assets/images/ImagesData';
import Images from '../../../../common/Images';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function Card({
  title,
  image,
  onCourseModuleDetail,
  courseDetail,
  createdAt,
  videoCount,
  moduleCount,
  courseLanguage,
  rating,
}) {
  const Styles = useThemedStyles(styles);
  const [errorOccur, setError] = useState(false);
  const { translations } = useContext(LocalizationContext);

  return (
    <View style={Styles.container}>
      <View style={Styles.containerView1}>
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
                      <Image
                        source={VER_BG_Mask}
                        resizeMode="stretch"
                        style={Styles.defaultImage}
                      />
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
        <View style={Styles.subTextContainerTwo}>
          <View style={Styles.langContainer}>
            {courseLanguage.map((item) => (
              <View style={Styles.buttonText}>
                <Text style={Styles.textStyle}>{item.name}</Text>
              </View>
            ))}
          </View>
          <View style={Styles.spacer} />
          <Text style={Styles.subTextRating}>{rating}</Text>
          <Image source={Images.STAR} style={Styles.starImageStyle} resizeMode="contain" />
        </View>
      </View>
      <View style={Styles.containerView}>
        <Text style={Styles.learnersText} numberOfLines={2}>
          {title}
        </Text>
        <View style={Styles.subTextContainer}>
          <Text style={Styles.subTextDate}>{`${translations.CC_STARTS} ${createdAt} `}</Text>
        </View>
        {(videoCount > 0 || moduleCount > 0) && (
          <Text style={Styles.subText}>
            {`${videoCount > 0 ? videoCount : moduleCount} ${
              videoCount > 0 ? translations.CC_VIDEOS : translations.CC_MODULES
            } `}
          </Text>
        )}
        <TouchableOpacity onPress={onCourseModuleDetail} style={Styles.viewButton}>
          <Text style={Styles.viewButtonText}>{translations.VIEW_DETAILS}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
Card.propTypes = {
  title: propTypes.string,
  image: propTypes.string,
  onCourseModuleDetail: propTypes.func,
  courseDetail: propTypes.func,
  createdAt: propTypes.any,
  videoCount: propTypes.any,
  moduleCount: propTypes.any,
  courseLanguage: propTypes.array,
  rating: propTypes.any,
};

export default Card;
