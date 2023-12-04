import * as React from 'react';
import Svg, {
  Rect, G, Path, Defs, ClipPath,
} from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={32}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width={32} height={31} rx={15.5} fill="#E5214E" />
      <G clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#fff">
        <Path d="m19.88 20.74-9.315-9.315a1.32 1.32 0 0 1 0-1.862 1.32 1.32 0 0 1 1.862 0l9.315 9.315a1.32 1.32 0 0 1 0 1.862 1.32 1.32 0 0 1-1.863 0Z" />
        <Path d="m10.565 18.878 9.314-9.316a1.32 1.32 0 0 1 1.863 0 1.32 1.32 0 0 1 0 1.863l-9.315 9.315a1.32 1.32 0 0 1-1.862 0 1.32 1.32 0 0 1 0-1.862Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" transform="translate(9 8)" d="M0 0h14v14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
