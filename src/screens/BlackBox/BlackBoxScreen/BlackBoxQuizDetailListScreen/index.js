import { View, FlatList, RefreshControl } from 'react-native';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  getQuizDetailList, showRetakeModal, setRetakePopUpData, changePageNo,
} from './actionBlackBoxQuizDetailList';
import { ComponentHeader, Loader, NoDataFound } from '../../../../components';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import styles from './styles';
import { ModuleCard, RetakePopup } from '../../components';
import { Routes } from '../../../../routes/Routes';
import useBackButton from '../../../../hooks/useBackButton';
// import { LocalizationContext } from '../../../../common/LocalizationProvider';

function BlackBoxQuizDetailListScreen({ navigation, route }) {
  const { cardId, screenName } = route.params;
  // const { translations } = useContext(LocalizationContext);
  const Styles = useThemedStyles(styles);
  const dispatch = useDispatch();
  const blackBoxQuizDetailData = useSelector((state) => state.reducerBlackBoxQuizDetailList);
  const {
    quizQuestionList,
    isLoading,
    modalVisible,
    retakePopupData,
    pageNo,
  } = blackBoxQuizDetailData;

  useEffect(() => {
    apiCall();
  }, [cardId, pageNo]);

  const apiCall = () => {
    dispatch(getQuizDetailList(cardId));
  };

  const navigateBack = () => {
    navigation.goBack();
    dispatch(changePageNo(0));
    return true;
  };

  useBackButton(() => {
    navigateBack();
    dispatch(changePageNo(0));
    return true;
  });

  const onPressRetake = (item) => {
    dispatch(setRetakePopUpData(item));
    dispatch(showRetakeModal(!modalVisible));
  };

  const onEndReachedCall = () => {
    if (quizQuestionList.length > 19) dispatch(changePageNo(pageNo));
  };

  const renderItems = ({ item, index }) => {
    const {
      name, analysis_data,
    } = item;
    return (
      <ModuleCard
        key={index.toString()}
        cardTitle={name}
        totalQues={analysis_data?.total_count}
        correctQues={analysis_data?.correct_count}
        inCorrectQues={analysis_data?.incorrect_count}
        unAttemptQues={analysis_data?.unattempted_count}
        onPressButton={() => onPressRetake(item)}
      />
    );
  };

  return (
    <View style={Styles.container}>
      <ComponentHeader
        goBack={navigateBack}
        headerText={screenName}
      />
      <FlatList
        data={[...quizQuestionList]}
        showsVerticalScrollIndicator={false}
        renderItem={renderItems}
        onEndReached={onEndReachedCall}
        onEndReachedThreshold={0.5}
        contentContainerStyle={Styles.flatListContainer}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={quizQuestionList.length === 0 ? <NoDataFound /> : null}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={apiCall} />
      }
      />
      <RetakePopup
        isOpen={modalVisible}
        data={retakePopupData}
        onPressClose={() => dispatch(showRetakeModal(!modalVisible))}
        onPressRetake={(name) => {
          dispatch(showRetakeModal(!modalVisible));
          navigation.navigate(Routes.SCREEN_BLACK_BOX_QUIZ_INSTRUCTION, { title: name });
        }}
      />
      <Loader show={isLoading} />
    </View>
  );
}

BlackBoxQuizDetailListScreen.propTypes = {
  navigation: PropTypes.any,
  route: PropTypes.any,
};

export default BlackBoxQuizDetailListScreen;
