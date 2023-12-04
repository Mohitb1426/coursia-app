import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

function SvgComponent({ color }) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <Path
        d="M4.524 11.25h15a.75.75 0 010 1.5h-15a.75.75 0 110-1.5z"
        fill={`${color}`}
      />
      <Path
        d="M5.56 12l6.221 6.219a.75.75 0 01-1.062 1.062l-6.75-6.75a.75.75 0 010-1.062l6.75-6.75a.75.75 0 111.062 1.062L5.561 12z"
        fill={`${color}`}
      />
    </Svg>
  );
}

SvgComponent.propTypes = {
  color: PropTypes.string,
};

export default React.memo(SvgComponent);
