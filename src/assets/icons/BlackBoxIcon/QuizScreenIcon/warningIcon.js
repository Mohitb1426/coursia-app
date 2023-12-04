import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={66}
      height={66}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={33} cy={33} r={33} fill="#F85E5E" fillOpacity={0.1} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.996 19.573a3.878 3.878 0 0 0-6.993 0l-11.16 21.952c-1.334 2.62.353 6.1 3.496 6.1h22.32c3.145 0 4.83-3.478 3.497-6.1l-11.16-21.952ZM32.5 27a1.375 1.375 0 0 1 1.375 1.375v6.875a1.375 1.375 0 0 1-2.75 0v-6.875A1.375 1.375 0 0 1 32.5 27Zm0 11.687a1.375 1.375 0 0 1 1.375 1.375v.688a1.375 1.375 0 0 1-2.75 0v-.688a1.375 1.375 0 0 1 1.375-1.375Z"
        fill="#F85E5E"
      />
    </Svg>
  );
}

export default SvgComponent;
