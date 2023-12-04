import {
  View, Text, ImageBackground, ScrollView,
} from 'react-native';
import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import styles from './styles';
import { liveClassFilterData, liveClassListData } from '../dummydata';
import { LocalizationContext } from '../../../../common/LocalizationProvider';
import useThemedStyles from '../../../../hooks/useThemedStyles';

function LiveClassLists() {
  const Styles = useThemedStyles(styles);
  const { translations } = useContext(LocalizationContext);

  const renderItems = ({ item }) => {
    const { isActive, title } = item;
    return (
      <View
        key={item.id}
        style={Styles.headerTabContainer(isActive)}
      >
        <Text
          style={Styles.headerTabText(isActive)}
        >
          {title}
        </Text>
      </View>
    );
  };

  const renderListItems = ({ item }) => {
    return (
      <View key={item.id} style={Styles.liveClassCard}>
        <ImageBackground
          source={item.bgImage}
          style={Styles.liveBGContainer}
          imageStyle={Styles.liveImageStyle}
        />
      </View>
    );
  };

  return (
    <View style={Styles.mainContainer}>
      {/* Live Class List view */}
      <ScrollView>
        {/* Live Class filter View */}
        <View style={Styles.filterContainer}>
          {/* Header View */}
          <View style={Styles.headerContainer}>
            <View style={Styles.headingContainer}>
              <Text style={Styles.headingTextStyle}>
                TNPSC
                {translations.LIVE_CLASSES}
                {' '}
              </Text>
            </View>
            {/* <TouchableOpacity style={Styles.viewAllContainer} onPress={OnPressViewButton}>
              <Text style={Styles.headerRightText}>{translations.WEBINARS_CARD_BUTTON}</Text>
            </TouchableOpacity> */}
          </View>
          {/* detail View */}
          <Text style={Styles.detailTextStyle}>
            {translations.LIVE_MESSAGE}
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={Styles.tabStyleContainer}
            horizontal
          >
            {
              liveClassFilterData.map((item) => renderItems({ item }))
            }
          </ScrollView>
        </View>
        {
          liveClassListData.map((item) => renderListItems({ item }))
        }
      </ScrollView>
    </View>
  );
}

// LiveClassLists.propTypes = {
//   OnPressViewButton: PropTypes.func,
// };

export default LiveClassLists;
