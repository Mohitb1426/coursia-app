import { View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import useThemedStyles from '../../../../hooks/useThemedStyles';
import {
  Header, StatCard, LeaderBoardHeader, NoDataComponent,
} from '..';
import { Routes } from '../../../../routes/Routes';
import { camelCase } from '../../../../utilities/commonFunction/replaceSpace';
// import { NoDataComponent } from '../../components';

function ListHeaderDetailComponent({
  studentName, dashBoardData, navigation, isLoader,
}) {
  const Styles = useThemedStyles(styles);

  const onCardPress = (cardTitle) => {
    if (cardTitle.toUpperCase() === 'DOUBTS') navigation.navigate(Routes.SCREEN_ASK_DOUBT);
  };
  return (
    <View>
      <Header name={studentName === '' ? '' : camelCase(studentName)} />
      <View style={Styles.statsCardHorizontalContainer}>
        {dashBoardData.length > 0 ? dashBoardData.map((item) => {
          const {
            value, cardTitle, cardDetail, cardIcon, isCardActive,
          } = item;
          return isCardActive && (
            <StatCard
              headingText={cardTitle}
              stat={value}
              statText={cardDetail}
              cardIcon={cardIcon}
              onPressCard={() => onCardPress(cardTitle)}
            />
          );
        })
          : !isLoader && <NoDataComponent />}
      </View>
      <LeaderBoardHeader />
    </View>
  );
}

ListHeaderDetailComponent.propTypes = {
  dashBoardData: PropTypes.array,
  studentName: PropTypes.string,
  navigation: PropTypes.any,
  isLoader: PropTypes.bool,
};

export default ListHeaderDetailComponent;
