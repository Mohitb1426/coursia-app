/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, { Mask, Path, Text } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={33}
      height={35}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask id="a" fill="#fff">
        <Path d="M33 16.5A16.5 16.5 0 1 1 16.5 0v1.317A15.183 15.183 0 1 0 31.683 16.5H33Z" />
      </Mask>
      <Path
        d="M33 16.5A16.5 16.5 0 1 1 16.5 0v1.317A15.183 15.183 0 1 0 31.683 16.5H33Z"
        stroke="#2AA87D"
        strokeWidth={2}
        mask="url(#a)"
      />
      <Text x={props.xValue} y="18" text-anchor="middle" fontWeight="bold" fill="#2AA87D" fontSize={14}>
        {props.time}
      </Text>
      <Text x="10" y="25" text-anchor="middle" fontWeight="bold" fill="#2AA87D" fontSize={6}>
        {props.mins}
      </Text>
    </Svg>
  );
}

export default SvgComponent;
