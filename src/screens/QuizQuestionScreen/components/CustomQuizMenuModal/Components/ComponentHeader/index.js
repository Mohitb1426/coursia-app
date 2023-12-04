import { View, Text } from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
// import CustomButton from '../../../../components/VerandaComponents/CustomButton';
// import Color from '../../../../utilities/Color';
import styles from './style';
import useThemedStyles from '../../../../../../hooks/useThemedStyles';
// import Fonts from '../../../../utilities/Fonts';
// import Strings from '../../../../utilities/Strings';

function ComponentHeader({
  title,
  // active,
  attemptedPercent,
  // onPress,
}) {
  const Styles = useThemedStyles(styles);
  const percentage = attemptedPercent * 100;
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.textStyle}>{title}</Text>
        {/* {active ? (
          <CustomButton
            textStyle={Styles.buttonText}
            customStyle={Styles.buttonStyle}
            onButtonPress={onPress}
            buttonText={Strings.BEGIN}
            isDisabled={false}
            textColor={Color.WHITE}
            buttonColor={Color.BLUE_60}
            fontFamily={Fonts.INTER_REGULAR}
          />
        ) : null} */}
      </View>
      <View style={Styles.progressBarOuterView}>
        <View
          style={[Styles.progressBarInnerView, { width: `${percentage}%` }]}
        />
      </View>
    </View>
  );
}

ComponentHeader.propTypes = {
  title: propTypes.string,
  attemptedPercent: propTypes.any,
};

export default ComponentHeader;
