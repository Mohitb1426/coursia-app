/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PlaceholderImage(props) {
  return (
    <Svg width={327} height={327} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M190.75 258.875c51.38 0 77.077 0 93.031-15.969 15.969-15.954 15.969-41.651 15.969-93.031s0-77.077-15.969-93.031c-15.954-15.969-41.651-15.969-93.031-15.969h-54.5c-51.38 0-77.077 0-93.031 15.968C27.25 72.799 27.25 98.495 27.25 149.875c0 51.38 0 77.077 15.968 93.031 8.898 8.911 20.82 12.849 38.532 14.579"
        stroke="#E2FAEF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M190.75 258.875c-16.84 0-35.398 6.812-52.334 15.601-27.222 14.129-40.834 21.2-47.537 16.69-6.704-4.496-5.437-18.462-2.889-46.379l.573-6.349"
        stroke="#E2FAEF"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default PlaceholderImage;
