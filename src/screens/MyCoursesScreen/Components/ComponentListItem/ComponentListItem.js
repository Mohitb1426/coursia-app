import React, { useContext } from 'react';
import {
  Text, View, Image, TouchableNativeFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import propTypes from 'prop-types';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import { ColorTheme } from '../../../../common/AppStyles';
import Images from '../../../../common/Images';
import styles from './StyleComponentListitem';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function ComponentListItem({ item, onPress }) {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={Styles.subContainer}>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[ColorTheme.BLUE_58, ColorTheme.BLUE_59, ColorTheme.BLUE_60]}
        style={Styles.gradientStyle}
      />

      <TouchableNativeFeedback
        onPress={() => onPress(
          item?.Courses?.id,
          item?.Modules?.id,
          item?.Modules?.unit_id,
          item?.Modules?.batch_id,
          item?.UserCourseModules?.video_sec_watch,
        )}
      >
        <View style={Styles.contentContainer}>
          <View style={Styles.headingContainer}>
            <Text style={Styles.heading}>{item?.Courses?.display_title}</Text>
          </View>
          <View style={Styles.descriptionContainer}>
            <Text numberOfLines={1} style={Styles.descriptionText}>{item?.Modules?.title}</Text>
          </View>
          <View style={Styles.resumeButtonContainer}>
            <View style={Styles.resumeButton}>
              <Image source={Images.PLAY} style={Styles.resumeImage} />
              <Text style={Styles.resumeButtonText}>{translations.RESUME}</Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

ComponentListItem.propTypes = {
  item: propTypes.object,
  onPress: propTypes.func,
};

export default ComponentListItem;
