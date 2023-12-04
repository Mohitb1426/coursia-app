import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      width={12}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.25 11.5c-1.458 0-2.698-.51-3.719-1.531C1.511 8.948 1 7.709 1 6.25c0-1.458.51-2.698 1.531-3.719C3.552 1.511 4.791 1 6.25 1a5.441 5.441 0 0 1 .787.058 3.09 3.09 0 0 0-.955 1.102 3.09 3.09 0 0 0-.357 1.465c0 .875.306 1.619.919 2.231a3.038 3.038 0 0 0 2.231.919c.535 0 1.026-.12 1.473-.358a3.11 3.11 0 0 0 1.094-.954 4.95 4.95 0 0 1 .058.787c0 1.458-.51 2.698-1.531 3.719-1.021 1.02-2.26 1.531-3.719 1.531Z"
        fill="#fff"
      />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
