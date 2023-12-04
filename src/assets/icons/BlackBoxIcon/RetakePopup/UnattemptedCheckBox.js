import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
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
      <Rect width={32} height={31} rx={15.5} fill="#2DA77D" />
      <Path
        d="m14.245 7.386-7.05 12.12a1.432 1.432 0 0 0 .53 1.967c.22.127.47.193.726.193h14.098a1.459 1.459 0 0 0 1.257-.72 1.432 1.432 0 0 0 0-1.44l-7.05-12.12a1.445 1.445 0 0 0-1.256-.72 1.458 1.458 0 0 0-1.255.72Z"
        fill="#fff"
      />
      <Path
        d="M15.59 11.129h-.184a.817.817 0 0 0-.82.814v3.89c0 .449.367.813.82.813h.184c.452 0 .82-.364.82-.814v-3.89a.817.817 0 0 0-.82-.813ZM15.498 19.73a.908.908 0 0 0 .912-.905c0-.5-.409-.905-.912-.905a.908.908 0 0 0-.912.905c0 .5.408.905.912.905Z"
        fill="#2DA77D"
      />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
