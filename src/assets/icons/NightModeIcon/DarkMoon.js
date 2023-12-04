import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      width={11}
      height={11}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.25 10.5c-1.458 0-2.698-.51-3.719-1.531C.511 7.948 0 6.709 0 5.25c0-1.458.51-2.698 1.531-3.719C2.552.511 3.791 0 5.25 0a5.44 5.44 0 0 1 .787.058 3.09 3.09 0 0 0-.955 1.102 3.09 3.09 0 0 0-.357 1.465c0 .875.306 1.619.919 2.231a3.038 3.038 0 0 0 2.231.919c.535 0 1.026-.12 1.473-.358a3.11 3.11 0 0 0 1.094-.954 4.95 4.95 0 0 1 .058.787c0 1.458-.51 2.698-1.531 3.719C7.948 9.989 6.709 10.5 5.25 10.5Z"
        fill="#000"
      />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
