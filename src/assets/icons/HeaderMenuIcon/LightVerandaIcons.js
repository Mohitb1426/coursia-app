import * as React from 'react';
import Svg, {
  Path, Defs, Pattern, Use, Image,
} from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={136}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path fill="url(#a)" d="M0 0h136v20H0z" />
      <Defs>
        <Pattern
          id="a"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#b" transform="matrix(.00331 0 0 .02252 0 -.426)" />
        </Pattern>
        <Image
          id="b"
          width={302}
          height={80}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;