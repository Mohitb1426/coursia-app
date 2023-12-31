import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
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
      <Path
        d="M12.49 2C6.712 2.006 1.99 6.742 2 12.52a10.473 10.473 0 0 0 3.461 7.77v4.235c0 .348.413.532.671.297l2.725-2.472c1.239.459 2.587.69 3.996.644A10.465 10.465 0 0 0 23 12.498C22.999 6.696 18.293 1.994 12.49 2Z"
        fill="#45BB92"
      />
      <Path
        d="M5.645 14.319C5.633 8.2 10.455 3.145 16.488 2.784A10.473 10.473 0 0 0 12.49 2C6.712 2.006 1.99 6.742 2 12.52a10.472 10.472 0 0 0 3.461 7.77v4.235c0 .348.413.532.671.297l2.725-2.472.102.037a11.496 11.496 0 0 1-3.314-8.068Z"
        fill="#2DA77D"
      />
      <Path
        d="M12.622 20.496c-.695 0-1.26-.565-1.26-1.26 0-.696.565-1.261 1.26-1.261.695 0 1.261.565 1.261 1.26 0 .696-.566 1.261-1.26 1.261ZM12.623 16.194a1.044 1.044 0 0 1-1.044-1.043v-2.108c0-.772.576-1.422 1.34-1.514a2.466 2.466 0 0 0 2.165-2.649c-.094-1.222-1.128-2.219-2.355-2.27a2.458 2.458 0 0 0-2.575 2.468 1.044 1.044 0 0 1-2.088 0 4.54 4.54 0 0 1 4.748-4.552 4.551 4.551 0 0 1 4.351 4.195 4.55 4.55 0 0 1-3.499 4.793v1.637c0 .576-.467 1.043-1.043 1.043Z"
        fill="#F9F7F8"
      />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
