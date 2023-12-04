/* eslint-disable no-underscore-dangle */
/* eslint-disable react-native/no-color-literals */
import React, {
  useContext,
  useEffect, useMemo, useRef, useState,
} from 'react';
import {
  Image, ScrollView, Share, Text, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import ViewShot from 'react-native-view-shot';
import ReactNativeBlobUtil from 'react-native-blob-util';
import Toast, { DURATION } from 'react-native-easy-toast';
import ErrorHandler from '../../../common/ErrorHandler';
import styles from './style';
import { CustomTagList } from '../../../components';
import SvgIcon from '../../../common/SvgIcon';
import { debugLog } from '../../../common/Logger';
import { constants } from '../ConstantCurrentAffairs';
import {
  addedCurrentAffairBookmark,
  currentAffairsBookmarkDone,
  getCurrentAffairsDownloadData, openCurrentAffairsModal, removeCurrentAffairBookmark,
  setCurrentAffairsBookmark,
} from '../actionCurrentAffairs';
import { Routes } from '../../../routes/Routes';
import { LocalizationContext } from '../../../common/LocalizationProvider';
import useThemedStyles from '../../../hooks/useThemedStyles';
import { ColorTheme } from '../../../common/AppStyles';
import CustomButton from '../../../components/CustomButton';

function CurrentAffairsSwiperCardItem({ items }) {
  const Styles = useThemedStyles(styles);
  const currentAffairsState = useSelector((state) => state.reducerCurrentAffairs);
  const {
    currentDate, offlineCurrentAffairsData,
  } = currentAffairsState;
  const [tags, setTags] = useState([]);
  const viewRef = useRef();
  const dispatch = useDispatch();
  const { translations, appLanguage } = useContext(LocalizationContext);
  const [isRemovedBookmark, setIsRemovedBookmark] = useState(false);
  // eslint-disable-next-line react/no-unstable-nested-components
  const toastRef = useRef(null);
  const toastStyles = isRemovedBookmark ? Styles.removedToastStyle : Styles.toastStyle;
  const imageUrl = items?.image?.trim();

  const showToast = (text) => {
    const textWithSpace = `${text} `;
    const textString = (
      <Text style={Styles.toastTextContainer}>
        {textWithSpace}
        <Text style={Styles.toastTextSubContainer}>{translations.VER_MY_LIBRARY}</Text>
      </Text>
    );
    toastRef.current.show(
      <View style={Styles.toastContainer}><Text>{textString}</Text></View>,
      DURATION.LENGTH_LONG,
    );
  };

  useEffect(() => {
    const newArray = [];
    if (items && 'Category' in items) {
      items?.Category.forEach((element) => {
        newArray.push(element);
      });
      setTags(newArray);
    }
  }, [items]);

  const isCurrentAffairBookMarked = useMemo(() => {
    // eslint-disable-next-line no-underscore-dangle, eqeqeq
    return offlineCurrentAffairsData.some((item) => item?.titleId == items?._id);
  }, [offlineCurrentAffairsData]);

  const capture = (currentAffairsCardData) => {
    const isTamil = appLanguage === 'tn' ? 0 : 1;
    if (isCurrentAffairBookMarked) {
      // eslint-disable-next-line eqeqeq, no-underscore-dangle
      const path = offlineCurrentAffairsData.find((item) => item?.titleId == items?._id);
      ReactNativeBlobUtil.fs
        .unlink(path?.url)
        .then(() => {
          dispatch(removeCurrentAffairBookmark({
            currentAffairId: currentAffairsCardData?._id,
          }));
          setIsRemovedBookmark(true);
          showToast(translations.REMOVED_FROM);
          dispatch(getCurrentAffairsDownloadData({ isTamil }));
        })
        .catch(() => {
          // dispatch(changeLoaderStatus(false));
        });
    } else {
      setIsRemovedBookmark(false);

      // eslint-disable-next-line no-unused-expressions
      viewRef?.current?.capture().then((uri) => {
        dispatch(addedCurrentAffairBookmark({ currentAffairsCardData }));
        dispatch(setCurrentAffairsBookmark({
          uri,
          currentAffairsCardData,
          currentAffairs: translations.TEXT_DAILY_CURRENT_AFFAIRS,
          isTamil,
        }));
        showToast(translations.ADDED_TO);
        // eslint-disable-next-line no-sequences
      }),
      (error) => {
        dispatch(currentAffairsBookmarkDone(false));
        debugLog('Oops, snapshot failed', error);
      };
    }
  };
  const onViewMore = () => {
    dispatch(openCurrentAffairsModal({
      isOpenModal: true,
      content: items,
    }));
  };

  return (
    <ErrorHandler componentName="CAInnerListItem">
      {items !== {} ? (
        <ViewShot
          ref={viewRef}
          options={constants.VIEW_SHOT}
          style={Styles.innerScrollViewContainer}
        >
          <View style={Styles.mainContainer}>
            <View style={Styles.topImageStyle}>
              <Image
                style={Styles.topImageStyle}
                source={{ uri: imageUrl }}
              />
              <TouchableOpacity style={Styles.bookmarkIconStyle} onPress={() => capture(items)}>
                {isCurrentAffairBookMarked ? <SvgIcon.BookmarkFilled /> : <SvgIcon.BookmarkIcon />}
              </TouchableOpacity>

              <TouchableOpacity
                activeIndex
                style={Styles.shareIconStyle}
                onPress={() => {
                  const shareOptions = {
                    title: '',
                    // eslint-disable-next-line no-underscore-dangle
                    message: `I found this on Veranda App. For more details, download the app now.\ntnspc://${Routes.SCREEN_CURRENT_AFFAIRS}/${currentDate}/${items?._id}`,
                  };
                  Share.share(shareOptions)
                    .then((res) => {
                      debugLog(res);
                    })
                    .catch((err) => {
                      debugLog(err);
                    });
                }}
              >
                <SvgIcon.ShareIcon />
              </TouchableOpacity>

              <TouchableOpacity disabled style={Styles.verandaLogoStyle}>
                <SvgIcon.VerandaRaceLogo />
              </TouchableOpacity>
            </View>

            <View style={Styles.flatListContainer}>
              <CustomTagList tags={tags} />
            </View>

            <Text style={Styles.subjectStyle}>{items?.heading}</Text>

            <View style={Styles.scrollViewStyle}>
              <View style={Styles.subTextContainer}>
                <ScrollView>
                  {items?.points?.map((item) => {
                    return <Text numberOfLines={4} style={Styles.contentStyle}>{item}</Text>;
                  })}
                </ScrollView>
              </View>
              <CustomButton
                customStyle={Styles.customButtonCustomStyle}
                onButtonPress={onViewMore}
                textStyle={Styles.buttonTextStyle}
                buttonText={translations.VIEW_MORE}
                isDisabled={false}
                textColor={ColorTheme.WHITE}
                buttonColor={ColorTheme.GREEN_BG}
              />
            </View>
            <Toast
              ref={toastRef}
              style={toastStyles}
              positionValue={280}
              opacity={1}
            />
          </View>
        </ViewShot>
      ) : null}
    </ErrorHandler>
  );
}

CurrentAffairsSwiperCardItem.propTypes = {
  items: PropTypes.array,
};

export default CurrentAffairsSwiperCardItem;
