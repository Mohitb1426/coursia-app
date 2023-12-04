/* eslint-disable react/prop-types */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  const { color = '#000000' } = props;
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="m15.834 5.341-1.175-1.175L10 8.824 5.342 4.166 4.167 5.341l4.658 4.658-4.658 4.659 1.175 1.175L10 11.174l4.659 4.659 1.175-1.175-4.659-4.659 4.659-4.658Z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
