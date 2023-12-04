import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#a)">
        <Path
          d="M19.928 19.928c4.103-4.102 4.103-10.754 0-14.857C15.825.97 9.174.97 5.071 5.071c-4.103 4.103-4.103 10.755 0 14.857 4.103 4.103 10.754 4.103 14.857 0Z"
          fill="#E5214E"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.699 17.182 8.274 9.757a1.052 1.052 0 0 1 0-1.485 1.052 1.052 0 0 1 1.484 0l7.425 7.425a1.052 1.052 0 0 1 0 1.485 1.052 1.052 0 0 1-1.484 0Z"
          fill="#fff"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m8.274 15.697 7.425-7.425a1.052 1.052 0 0 1 1.484 0 1.052 1.052 0 0 1 0 1.485l-7.425 7.425a1.052 1.052 0 0 1-1.484 0 1.052 1.052 0 0 1 0-1.485Z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" transform="translate(2 2)" d="M0 0h21v21H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
