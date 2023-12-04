import {
  View, Text, FlatList,
} from 'react-native';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ComponentHeader } from '../../../../components';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import { QuizInstructionCard, CustomButton } from '../../components';
import { instructionData, instructionDataTamil } from '../../DummyData';
import styles from './styles';
import { Routes } from '../../../../routes/Routes';
import { LocalizationContext } from '../../../../common/LocalizationProvider';

function BlackBoxQuizInstructionScreen({ navigation, route }) {
  const { translations, appLanguage } = useContext(LocalizationContext);
  const { title } = route.params;
  const Styles = useThemedStyles(styles);

  const renderItems = ({ item, index }) => {
    return (
      <View key={index.toString()} style={Styles.itemContainer}>
        <Text style={Styles.pointsTextStyle}>
          {index + 1}
          .
          {' '}
        </Text>
        <Text style={Styles.pointsTextStyle}>{item}</Text>
      </View>
    );
  };

  const listHeader = () => {
    return (
      <View style={Styles.instructionHeaderContainer}>
        <Text style={Styles.instTextStyle}>{translations.B_B_INSTRUCTION}</Text>
        <View style={Styles.langContainer}>
          <Text style={Styles.langTextStyle('heading')}>
            {`${translations.B_B_LANGUAGE}:`}
          </Text>
          <Text style={Styles.langTextStyle('Value')}>{translations.B_B_LANGUAGE_TYPE}</Text>
        </View>

      </View>
    );
  };

  const listFooter = () => {
    return (
      <CustomButton
        title={translations.B_B_BEGIN_TEXT_BUTTON}
        onPressButton={() => navigation.navigate(Routes.SCREEN_BLACK_BOX_QUESTION)}
      />
    );
  };

  return (
    <View style={Styles.container}>
      <ComponentHeader
        goBack={() => navigation.goBack()}
        headerText={title}
      />
      <View style={Styles.bodyContainer}>
        <QuizInstructionCard cardTitle={title} />
        <FlatList
          data={appLanguage === 'en' ? instructionData : instructionDataTamil}
          renderItem={renderItems}
          ListHeaderComponent={listHeader}
          ListFooterComponent={listFooter}
          ListFooterComponentStyle={Styles.listFooterStyle}
          keyExtractor={(index) => index.toString()}
        />
      </View>
    </View>
  );
}

BlackBoxQuizInstructionScreen.propTypes = {
  navigation: PropTypes.any,
  route: PropTypes.any,
};

export default BlackBoxQuizInstructionScreen;
