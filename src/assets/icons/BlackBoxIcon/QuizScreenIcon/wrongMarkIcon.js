import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={13}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.5 0A6.507 6.507 0 0 0 0 6.5C0 10.084 2.916 13 6.5 13S13 10.084 13 6.5 10.084 0 6.5 0Zm2.353 8.147a.5.5 0 1 1-.706.706L6.5 7.207 4.853 8.853a.5.5 0 0 1-.706-.706L5.793 6.5 4.147 4.853a.5.5 0 0 1 .706-.706L6.5 5.793l1.647-1.646a.5.5 0 0 1 .706.706L7.207 6.5l1.646 1.647Z"
        fill="#E5214E"
      />
    </Svg>
  );
}

export default SvgComponent;
