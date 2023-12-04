import {
  FlatList,
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CubeNavigationHorizontal } from 'react-native-3dcube-navigation';
import StoryContainer from './StoryContainer';
import StoryCircleListItem from './StoryCircleListItem';

export function Story({
  data,
  textReadMore,
  avatarSize,
  avatarTextStyle,
  storyRefresh,
  unPressedBorderColor,
  pressedBorderColor,
}) {
  const [isModelOpen, setModel] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentScrollValue, setCurrentScrollValue] = useState(0);
  const modalScroll = useRef(null);
  const [postsIndexArr, setPostsIndexArr] = useState([]);

  useEffect(() => {
    const indexArray = [];
    data.map((item) => {
      return indexArray.push(
        item.stories_post.findIndex((i) => i.read_post_status === false) >= 0
          ? item.stories_post.findIndex((i) => i.read_post_status === false)
          : 0,
      );
    });
    setPostsIndexArr(indexArray);
  }, [data]);

  const onStorySelect = (item, index) => {
    setCurrentUserIndex(index);
    setModel(true);
  };

  const onStoryClose = () => {
    storyRefresh();
    setModel(false);
  };

  const onStoryNext = (isScroll) => {
    const newIndex = currentUserIndex + 1;
    if (data.length - 1 > currentUserIndex) {
      setCurrentUserIndex(newIndex);
      if (!isScroll) {
        try {
          modalScroll.current.scrollTo(newIndex, true);
        } catch (e) {
          // console.warn('error=>', e);
        }
      }
    } else {
      setModel(false);
    }
  };

  const onStoryPrevious = (isScroll) => {
    const newIndex = currentUserIndex - 1;
    if (currentUserIndex > 0) {
      setCurrentUserIndex(newIndex);
      if (!isScroll) {
        modalScroll.current.scrollTo(newIndex, true);
      }
    }
  };

  const onScrollChange = (scrollValue) => {
    if (currentScrollValue > scrollValue) {
      onStoryNext(true);
      setCurrentScrollValue(scrollValue);
    }
    if (currentScrollValue < scrollValue) {
      onStoryPrevious(false);
      setCurrentScrollValue(scrollValue);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <StoryCircleListItem
            key={item.id}
            avatarSize={avatarSize}
            handleStoryItemPress={() => onStorySelect && onStorySelect(item, index)}
            unPressedBorderColor={unPressedBorderColor}
            pressedBorderColor={pressedBorderColor}
            item={item}
            showText
            textStyle={avatarTextStyle}
          />
        )}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModelOpen}
        style={styles.modal}
        onShow={() => {
          if (currentUserIndex > 0) {
            modalScroll.current.scrollTo(currentUserIndex, false);
          }
        }}
        onRequestClose={onStoryClose}
      >
        <CubeNavigationHorizontal
          callBackAfterSwipe={(g) => onScrollChange(g)}
          ref={modalScroll}
          style={styles.container}
        >
          { data.map((item, index) => {
            return (
              <StoryContainer
                key={item.id}
                startIndex={postsIndexArr[currentUserIndex]}
                onClose={onStoryClose}
                onStoryNext={onStoryNext}
                onStoryPrevious={onStoryPrevious}
                dataStories={item}
                isNewStory={index !== currentUserIndex}
                textReadMore={textReadMore}
                postsId={() => {}}
              />
            );
          })}
        </CubeNavigationHorizontal>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 5,
  },
  flatListContainer: { paddingLeft: 3 },
  modal: {
    flex: 1,
  },
});

Story.propTypes = {
  data: PropTypes.array,
  textReadMore: PropTypes.string,
  avatarSize: PropTypes.number,
  unPressedBorderColor: PropTypes.array,
  pressedBorderColor: PropTypes.array,
  avatarTextStyle: PropTypes.object,
  storyRefresh: PropTypes.func,
};
export default React.memo(Story);
