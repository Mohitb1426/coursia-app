/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={15}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.667 7 13.04 5.14l.227-2.46-2.407-.547L9.6 0 7.333.973 5.067 0l-1.26 2.127-2.407.54.227 2.466L0 7l1.627 1.86-.227 2.467 2.407.546L5.067 14l2.266-.98 2.267.973 1.26-2.126 2.407-.547-.227-2.46L14.667 7ZM6.06 10.147l-2.533-2.54.986-.987L6.06 8.173l3.9-3.913.987.987-4.887 4.9Z"
        fill="#2DA77D"
      />
    </Svg>
  );
}

export default SvgComponent;
