/* eslint-disable react-native/no-inline-styles */
import {
  View, Text, FlatList, RefreshControl,
} from 'react-native';
import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { useBackHandler } from '@react-native-community/hooks';
import {
  ComponentHeader, Loader, CustomLockScreen,
} from '../../../../components';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import styles from './styles';
import { SummaryCard, AnalysisCard, AnalysisEmptyCard } from '../../components';
import SvgIcon from '../../../../common/SvgIcon';
import {
  getDashBoardSummary,
  getDashBoardAnalysisListData,
  checkActiveFeatureBlackBox,
  setActiveFeatureBlackBox,
} from './actionBlackBoxDashBoard';
import { Routes } from '../../../../routes/Routes';
import { LocalizationContext } from '../../../../common/LocalizationProvider';

// const TAG = 'BLACK_BOX_DASHBOARD';
function BlackBoxDashBoardScreen({ navigation }) {
  // const { analysis_data } = DashBoardData;
  const { translations } = useContext(LocalizationContext);
  const dispatch = useDispatch();
  const dashboardReducerData = useSelector((state) => state.reducerBlackBoxDashBoard);
  const {
    blackBoxSummary, analysisLoader, summaryLoader, analysisListData, showLockModal,
  } = dashboardReducerData;
  const {
    correctCount, incorrectCount, totalCount, unattemptedCount,
  } = blackBoxSummary;
  const Styles = useThemedStyles(styles);

  useFocusEffect(
    useCallback(() => {
      apiCall();
    }, []),
  );

  const apiCall = () => {
    dispatch(getDashBoardSummary());
    dispatch(getDashBoardAnalysisListData());
    dispatch(checkActiveFeatureBlackBox());
  };

  const deviceBackHandler = () => {
    dispatch(setActiveFeatureBlackBox(false));
    return false;
  };

  useBackHandler(deviceBackHandler);

  const renderItems = ({ item, index }) => {
    const {
      id, title, analysis_data,
    } = item;
    return (
      <View style={Styles.listCardContainer}>
        <AnalysisCard
          key={index}
          onPressCard={() => navigation.navigate(Routes.SCREEN_BLACK_BOX_QUIZ_DETAIL_LIST, {
            cardId: id,
            screenName: title,
          })}
          cardTitle={title}
          totalQues={analysis_data?.total_count}
          correctQues={analysis_data?.correct_count}
          inCorrectQues={analysis_data?.incorrect_count}
          unAttemptedQues={analysis_data?.unattempted_count}
        />
      </View>
    );
  };

  const listHeaderComponent = () => {
    return (
      <View style={Styles.headerContainer}>
        <Text style={Styles.headerTitleStyle}>{translations.B_B_HEADING_1}</Text>
        <View style={Styles.headerCardContainer}>
          <SummaryCard
            showLoader={summaryLoader}
            value={totalCount}
            detailTitle={translations.B_B_CARD_1}
            cardIcon={<SvgIcon.TotalQuestionIcon />}
          />
          <View style={Styles.headerCardDivider} />
          <SummaryCard
            showLoader={summaryLoader}
            value={correctCount}
            detailTitle={translations.B_B_CARD_2}
            cardIcon={<SvgIcon.CorrectQuestionIcon />}
          />
        </View>
        <View style={Styles.headerCardContainer}>
          <SummaryCard
            showLoader={summaryLoader}
            value={unattemptedCount}
            detailTitle={translations.B_B_CARD_3}
            cardIcon={<SvgIcon.UnattemptedQuestionIcon />}
          />
          <View style={Styles.headerCardDivider} />
          <SummaryCard
            showLoader={summaryLoader}
            value={incorrectCount}
            detailTitle={translations.B_B_CARD_4}
            cardIcon={<SvgIcon.IncorrectQuestionIcon />}
          />
        </View>
        <View style={Styles.listHeaderContainer}>
          <Text style={Styles.headerTitleStyle}>{translations.B_B_HEADING_2}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <ComponentHeader
        goBack={() => navigation.goBack()}
        headerText={translations.B_B_DASHBOARD_SCREEN_NAME}
      />
      <FlatList
        data={[...analysisListData]}
        ListHeaderComponent={listHeaderComponent}
        renderItem={analysisListData.length > 0 ? renderItems : null}
        ListEmptyComponent={analysisListData.length === 0 ? <AnalysisEmptyCard /> : null}
        keyExtractor={(item) => item?.id.toString()}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={summaryLoader && analysisLoader} onRefresh={apiCall} />
      }
      />
      <Loader show={analysisLoader} />
      {showLockModal ? (
        <CustomLockScreen
          isVisible={showLockModal}
          firstText={translations.B_B_LOCK_HEADING}
          secondText={translations.B_B_LOCK_DETAIL}
          buttonText={translations.B_B_LOCK_BUTTON}
          customStyle={{ paddingHorizontal: 20 }}
          onButtonPress={() => {
            dispatch(setActiveFeatureBlackBox(false));
            navigation.navigate(Routes.SCREEN_SUBSCRIPTION);
          }}
          onClose={() => {
            dispatch(setActiveFeatureBlackBox(false));
            navigation.goBack();
          }}
        />
      ) : null}
    </View>
  );
}

BlackBoxDashBoardScreen.propTypes = {
  navigation: PropTypes.any,
};

export default BlackBoxDashBoardScreen;
