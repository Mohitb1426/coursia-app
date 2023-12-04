import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={13}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.268 1.498c-2.886 0-5.223 2.33-5.223 5.2 0 2.872 2.337 5.201 5.223 5.201 2.891 0 5.233-2.33 5.233-5.2 0-2.871-2.342-5.2-5.233-5.2Zm.005 9.361c-2.31 0-4.182-1.861-4.182-4.16 0-2.299 1.871-4.16 4.182-4.16 2.31 0 4.183 1.861 4.183 4.16 0 2.299-1.872 4.16-4.183 4.16Zm.261-6.76H5.75v3.12l2.745 1.638.392-.64L6.534 6.83v-2.73Z"
        fill="#fff"
      />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
