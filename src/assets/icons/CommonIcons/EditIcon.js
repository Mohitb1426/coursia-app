import * as React from 'react';
import Svg, {
  G, Rect, Path, Defs,
} from 'react-native-svg';

import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      width={32}
      height={32}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#a)">
        <Rect x={4} y={2} width={24} height={24} rx={12} fill="#2EA77D" />
        <Rect x={4.5} y={2.5} width={23} height={23} rx={11.5} stroke="#fff" />
      </G>
      <Path
        d="M19.153 9a.576.576 0 0 0-.4.167l-1.017 1.008 2.084 2.083 1.017-1.008a.563.563 0 0 0 0-.792l-1.292-1.291A.557.557 0 0 0 19.153 9Zm-2.009 1.767L11 16.917V19h2.084l6.144-6.15-2.084-2.083Z"
        fill="#fff"
      />
      <Defs />
    </Svg>
  );
}

const EditIcon = memo(SvgComponent);
export default EditIcon;
