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
        d="m11.501 3.152-5.965 5.94-2.217-2.206.737-.733 1.48 1.472 5.228-5.201.737.728Zm-1.155 2.621c.068.296.11.609.11.926 0 2.299-1.872 4.16-4.183 4.16-2.31 0-4.182-1.861-4.182-4.16 0-2.299 1.871-4.16 4.182-4.16.826 0 1.59.238 2.238.65l.753-.75a5.194 5.194 0 0 0-2.991-.941c-2.886 0-5.228 2.33-5.228 5.2 0 2.872 2.342 5.201 5.228 5.201 2.886 0 5.228-2.33 5.228-5.2 0-.62-.115-1.212-.313-1.763l-.842.837Z"
        fill="#fff"
      />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;
