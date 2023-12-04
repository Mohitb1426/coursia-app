import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  ScrollView,
  Text, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper';
import { useDispatch, useSelector } from 'react-redux';
import ErrorHandler from '../../../common/ErrorHandler';
import {
  getCurrentAffairsData,
  openCurrentAffairsModal,
  setCurrentDate,
  setIsLoading,
} from '../actionCurrentAffairs';
import { getFormattedDate } from '../../../common/TimeUtils';
import CurrentAffairsCardItem from '../CurrentAffairsSwiperCardItem';
import { DEFAULT_STACK_SIZE, STACK_SIZE_TWO } from '../ConstantCurrentAffairs';
import { CustomModal, EmptyListComponent } from '../../../components';
import { LocalizationContext } from '../../../common/LocalizationProvider';
import styles from './style';
import { screenHeightDefault } from '../../../common/Dimensions';
import useThemedStyles from '../../../hooks/useThemedStyles';
import SvgIcon from '../../../common/SvgIcon';
import { ThemeContext } from '../../../common/ThemeProvider';

function CurrentAffairsSwiperCard({
  index, setDate, initialId, isParam,
}) {
  const { appTheme } = useContext(ThemeContext);
  const Styles = useThemedStyles(styles);
  const [disableLeftSwipe, setDisableLeftSwipe] = useState(false);
  const [disableRightSwipe, setDisableRightSwipe] = useState(false);
  const [swipedCard, setSwipedCard] = useState(0);
  const { translations } = useContext(LocalizationContext);
  const currentAffairsState = useSelector((state) => state.reducerCurrentAffairs);
  const dispatch = useDispatch();
  const ref = useRef();
  const {
    currentAffairsData, currentDate, availableDates, autoCurrentIndex, errorData,
    noInternet, openCurrentAffairModal,
    currentAffairsContent,
  } = currentAffairsState;
  const cardDataLength = currentAffairsData[index]?.data?.length;
  const cardStackSize = cardDataLength > STACK_SIZE_TWO ? DEFAULT_STACK_SIZE : cardDataLength;
  const isData = cardDataLength > 0;

  useEffect(() => {
    const currentDateValue = typeof (autoCurrentIndex) === 'string' ? autoCurrentIndex : '';
    const dateValue = currentDateValue || currentAffairsData[index]?.date;
    if (currentDateValue !== '') {
      dispatch(setCurrentDate(autoCurrentIndex));
    }
    if (currentAffairsData[index] != null && cardDataLength === 0 && errorData === '') {
      dispatch(getCurrentAffairsData({ date: dateValue, index }));
    }
  }, [isParam]);
  useEffect(() => {
    const currentDateValue = typeof (autoCurrentIndex) === 'string' ? autoCurrentIndex : '';
    if (currentDateValue !== '') {
      // eslint-disable-next-line no-underscore-dangle
      const cardIndex = currentAffairsData[index]?.data.findIndex((item) => item._id === initialId);
      ref?.current?.jumpToCardIndex(cardIndex);
    }
  }, [isParam]);

  const swipeRight = () => {
    if (!disableRightSwipe) {
      dispatch(setIsLoading());
      const currentDateIndex = availableDates.indexOf(currentDate);
      const endDate = availableDates[currentDateIndex - 1];
      swipeCurrentAffairsData(endDate, currentDateIndex + 1);
    }
  };

  const swipeLeft = () => {
    if (!disableLeftSwipe) {
      dispatch(setIsLoading());
      const currentDateIndex = availableDates.indexOf(currentDate);
      const endDate = availableDates[currentDateIndex + 1];
      swipeCurrentAffairsData(endDate);
    }
  };

  const swipeCurrentAffairsData = (date) => {
    setDate(date, 0);
  };

  useEffect(() => {
    const endDate = getFormattedDate(availableDates[0]);
    const startDate = getFormattedDate(availableDates[availableDates.length - 1]);
    const currentSelectedDate = getFormattedDate(currentDate);

    if (+currentSelectedDate >= +endDate) {
      setDisableRightSwipe(true);
    }
    if (+currentSelectedDate <= +startDate) {
      setDisableLeftSwipe(true);
    }
  }, []);

  const onSwipeCard = (defaultCardIndex) => {
    setSwipedCard(defaultCardIndex);
  };

  const closeModal = () => {
    dispatch(openCurrentAffairsModal({
      isOpenModal: false,
      content: [],
    }));
  };

  return (
    <ErrorHandler componentName="CAOuterListItem">
      <View>
        {isData ? (
          <Swiper
            cards={currentAffairsData[index].data}
            infinite
            ref={ref}
            swipeBackCard
            horizontalSwipe
            disableTopSwipe={cardDataLength === 1}
            disableBottomSwipe={cardDataLength === 1}
            disableLeftSwipe={disableLeftSwipe}
            disableRightSwipe={disableRightSwipe}
            cardHorizontalMargin={5}
            cardVerticalMargin={5}
            goBackToPreviousCardOnSwipeBottom
            stackSize={cardStackSize}
            stackSeparation={15}
            renderCard={(card) => {
              return <CurrentAffairsCardItem items={card} swipedCard={swipedCard} />;
            }}
            onSwiped={(defaultCardIndex) => onSwipeCard(defaultCardIndex)}
            onSwipedRight={swipeRight}
            onSwipedLeft={swipeLeft}
          />
        ) : (
          <EmptyListComponent emptyListText={noInternet ? translations.OFFLINE : ''} />
        )}
        <ErrorHandler>
          {openCurrentAffairModal && (
            <CustomModal
              borderTopLeftRadius={20}
              borderTopRightRadius={20}
              borderBottomRightRadius={20}
              borderBottomLeftRadius={20}
              visible={openCurrentAffairModal}
              modalHeight={screenHeightDefault * 0.87}
              alignBottom={false}
              onBackdropPress={closeModal}
              backdropOpacity={0.7}
            >
              <View style={Styles.mainContainer}>
                <TouchableOpacity onPress={closeModal} style={Styles.closeButton}>
                  <SvgIcon.CloseArrow color={appTheme.TEXT_COLOR_HEADING} />
                </TouchableOpacity>
                <View style={Styles.subContainer}>
                  <Text style={Styles.subjectStyle}>{currentAffairsContent?.heading}</Text>
                  <View style={Styles.scrollViewStyle}>
                    <ScrollView showsVerticalScrollIndicator nestedScrollEnabled>
                      {currentAffairsContent?.points?.map((item) => {
                        return <Text style={Styles.contentStyle}>{item}</Text>;
                      })}
                    </ScrollView>
                  </View>
                </View>
              </View>
            </CustomModal>
          )}
        </ErrorHandler>
      </View>
    </ErrorHandler>
  );
}

CurrentAffairsSwiperCard.propTypes = {
  index: PropTypes.number,
  setDate: PropTypes.func,
  isParam: PropTypes.bool,
  initialId: PropTypes.string,
};

export default CurrentAffairsSwiperCard;
