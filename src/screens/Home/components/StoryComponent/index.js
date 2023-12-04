import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CustomStory } from './Components';
import styles from './styles';
import { getStoryCarouselData } from '../../actionHome';

function StoryComponent({ data }) {
  const dispatch = useDispatch();

  const refreshStoryData = () => {
    dispatch(getStoryCarouselData('all'));
  };

  return (
    <CustomStory
      data={[...data]}
      textReadMore
      avatarSize={63}
      unPressedBorderColor={['#2AA87DCC', '#2AA87DCC']}
      pressedBorderColor={['#ffffff', '#ffffff']}
      avatarTextStyle={styles.listTextStyle}
      style={styles.storyContainer}
      storyRefresh={refreshStoryData}
    />
  );
}

StoryComponent.propTypes = {
  data: PropTypes.array,
};

export default React.memo(StoryComponent);
