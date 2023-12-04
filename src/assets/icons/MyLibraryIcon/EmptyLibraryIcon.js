import * as React from 'react';
import Svg, {
  Circle,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={191}
      height={191}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={95.5} cy={95.5} r={95.5} fill="#1C1F23" />
      <G clipPath="url(#a)">
        <Path
          d="M44.453 99.281 72.468 61.47h46.064l28.015 37.812H125.75l-15.125 15.125h-30.25L65.25 99.281H44.453Zm23.75-45.375L35 99.281v37.813h121V99.281l-33.203-45.375H68.203Z"
          fill="url(#b)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="b"
          x1={95.5}
          y1={53.906}
          x2={95.5}
          y2={137.094}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.125} stopColor="#2196F3" />
          <Stop offset={1} stopColor="#093F8B" />
        </LinearGradient>
        <ClipPath id="a">
          <Path fill="#fff" transform="translate(35 35)" d="M0 0h121v121H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
