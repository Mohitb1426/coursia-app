/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import * as React from 'react';
import {
  Dimensions, View, Image, Linking, TouchableOpacity,
} from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
import Carousel from 'react-native-reanimated-carousel';
import propTypes from 'prop-types';
import { SvgUri } from 'react-native-svg';
import styles from './styles';
// import Images from '../../../../common/Images';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export function CarouselComponent({ data }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  // console.log('this is the carousel ----------->', JSON.stringify(data, undefined, 2));
  const { width } = Dimensions.get('window');
  const openLink = (link) => {
    if (link) {
      Linking.openURL(link);
    }
  };

  function Pagination() {
    return (
      <View style={styles.dotContainer}>
        {data.map((_, index) => {
          return (
            <View
              key={index}
              style={{
                height: 6, width: 6, borderRadius: 3, backgroundColor: index === activeIndex ? '#231F20' : '#9d9d9d', marginLeft: 10,
              }}
            />
          );
        })}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Carousel
          loop
          mode="parallax"
          pagingEnabled
          snapEnabled
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          width={width}
          height="100%"
          autoPlay={false}
          data={data}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => openLink(item.link)}
              key={item.id}
              style={styles.itemContainer}
            >
              {item.file_ext.toUpperCase() === 'SVG' ? (
                <SvgUri
                  height="100%"
                  width="100%"
                  uri={item.cover_image}
                />
              )
                : (<Image source={{ uri: item.cover_image }} style={styles.imageStyle} />)}
            </TouchableOpacity>
          )}
        />

      </View>
      <Pagination />
    </View>
  );
}

CarouselComponent.propTypes = {
  data: propTypes.array,
};
