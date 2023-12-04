import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={21}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.333 11.605 7.414 9.773a.83.83 0 0 0-.595-.231.866.866 0 0 0-.618.252.78.78 0 0 0-.242.59c0 .238.08.435.242.59l2.515 2.4a.858.858 0 0 0 .617.23c.25 0 .456-.076.618-.23l5.006-4.78a.79.79 0 0 0-.022-1.158.858.858 0 0 0-.617-.231.858.858 0 0 0-.618.231l-4.367 4.169Zm1.235 6.905a8.94 8.94 0 0 1-3.44-.664 8.938 8.938 0 0 1-2.801-1.8 8.488 8.488 0 0 1-1.886-2.673 7.875 7.875 0 0 1-.695-3.284c0-1.165.232-2.26.695-3.284A8.488 8.488 0 0 1 4.327 4.13a8.95 8.95 0 0 1 2.8-1.8 8.95 8.95 0 0 1 3.441-.663c1.22 0 2.367.22 3.44.663a8.95 8.95 0 0 1 2.802 1.8 8.488 8.488 0 0 1 1.885 2.674 7.875 7.875 0 0 1 .695 3.284c0 1.165-.232 2.26-.695 3.284a8.488 8.488 0 0 1-1.885 2.674 8.938 8.938 0 0 1-2.801 1.8 8.939 8.939 0 0 1-3.44.663Z"
        fill="#2DA77D"
      />
    </Svg>
  );
}

export default SvgComponent;
