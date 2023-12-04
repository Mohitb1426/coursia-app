/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.333 11.458l2.75 2.75 4.584-5.5"
        stroke="#2DA77D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 20.166a9.167 9.167 0 100-18.333 9.167 9.167 0 000 18.333z"
        stroke="#2DA77D"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default SvgComponent;
