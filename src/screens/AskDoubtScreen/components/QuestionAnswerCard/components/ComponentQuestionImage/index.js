import React from 'react';
import propTypes from 'prop-types';
import styles from './style';
import { ZoomImage } from '../../../ZoomImage';

function ComponentQuestionImage({ imageUrl }) {
  return <ZoomImage uri={{ uri: imageUrl }} customStyle={styles.imageStyle} />;
}

ComponentQuestionImage.propTypes = {
  imageUrl: propTypes.string,
};

export default ComponentQuestionImage;
