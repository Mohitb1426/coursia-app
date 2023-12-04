/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={37}
      height={37}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.482 0C8.27 0 0 8.288 0 18.5S8.27 37 18.482 37C28.712 37 37 28.712 37 18.5S28.712 0 18.482 0zm.018 33.3c-8.177 0-14.8-6.623-14.8-14.8S10.323 3.7 18.5 3.7s14.8 6.623 14.8 14.8-6.623 14.8-14.8 14.8zm.925-24.05H16.65v11.1l9.713 5.827 1.387-2.275-8.325-4.94V9.25z"
        fill="#F68806"
      />
    </Svg>
  );
}

export default SvgComponent;
