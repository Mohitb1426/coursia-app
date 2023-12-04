import React, { memo, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import propTypes from 'prop-types';
import Images from '../../../../../../common/Images';
import styles from './style';
import { ASK_DOUBT_CONSTANTS } from '../../../../constantsScreenAskDoubt';
import { LocalizationContext } from '../../../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../../../hooks/useThemedStyles';

function ProgressBarComponent({ status }) {
  const Styles = useThemedStyles(styles);
  const check = status === ASK_DOUBT_CONSTANTS.RESOLVED;
  const { translations } = useContext(LocalizationContext);
  return (
    <View style={Styles.progressBarContainer}>
      <View style={Styles.postedProgressBarContainer}>
        <Image
          source={Images.POSTED_ICON}
          style={Styles.postedIconImageStyle}
          resizeMode="contain"
        />
        <View style={[Styles.progressLine, Styles.progressLineOneColor]} />
        <Image
          source={Images.POSTED_ICON}
          style={Styles.postedIconImageStyle}
          resizeMode="contain"
        />
        <View style={[Styles.progressLine,
          check ? Styles.progressLineOneColor : Styles.progressLineTwoColor]}
        />
        <Image
          source={check ? Images.POSTED_ICON : Images.INPROGRESS_ICON}
          style={Styles.postedIconImageStyle}
          resizeMode="contain"
        />
      </View>
      <View style={Styles.textContainer}>
        <Text style={Styles.textStyle}>{translations.POSTED}</Text>
        <Text style={Styles.textStyle}>{translations.IN_PROCESS}</Text>
        <Text style={Styles.textStyle}>{translations.SOLVED}</Text>
      </View>
    </View>
  );
}

ProgressBarComponent.propTypes = {
  status: propTypes.string,
};

export default memo(ProgressBarComponent);
