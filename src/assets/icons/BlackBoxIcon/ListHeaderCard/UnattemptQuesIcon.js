import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={26}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#a)">
        <Path
          d="M11.375 3.938 2.252 19.74a1.877 1.877 0 0 0 1.625 2.815h18.246a1.876 1.876 0 0 0 1.625-2.815L14.626 3.938a1.876 1.876 0 0 0-3.25 0Z"
          fill="#6086BF"
        />
        <Path
          d="M13.12 8.814h-.239a1.06 1.06 0 0 0-1.06 1.061v5.072c0 .585.474 1.06 1.06 1.06h.238a1.06 1.06 0 0 0 1.061-1.06V9.875c0-.586-.475-1.06-1.06-1.06ZM13 20.03a1.18 1.18 0 1 0 0-2.36 1.18 1.18 0 0 0 0 2.36Z"
          fill="#FFF7ED"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h26v26H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
