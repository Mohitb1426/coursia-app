import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

function SvgComponent(props) {
  return (
    <Svg
      {...props}
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.508 18.427c-.418 1.627-1.917 2.525-3.392 2.571-1.451.046-3.143-.767-3.634-2.571h-.237c-1.236 0-2.472-.003-3.708.001-.622.002-1.108-.213-1.383-.72-.274-.505-.17-.975.206-1.425.437-.525.84-1.07 1.252-1.612.173-.227.239-.484.238-.76-.002-1.492-.037-2.032.007-3.523.08-2.727 1.501-5.677 4.258-6.819 4.048-1.676 8.876.512 9.842 4.426.121.492.174 1.959.181 2.464.024 1.458.012 1.963.006 3.422a1.36 1.36 0 0 0 .307.882c.427.54.849 1.082 1.27 1.626.324.42.37.872.117 1.328-.254.458-.688.702-1.256.707-1.273.01-2.546.003-3.82.003h-.256.002Zm4.04-1.292c-.433-.56-.839-1.096-1.256-1.624a2.562 2.562 0 0 1-.576-1.653c.008-1.438.005-1.924.001-3.362 0-.22-.012-1.394-.037-1.613-.351-3.132-3.818-5.25-7.201-4.401-2.477.621-4.18 3.564-4.197 5.872-.01 1.492-.006 2.03 0 3.522a2.532 2.532 0 0 1-.562 1.618c-.38.486-.756.976-1.133 1.465-.04.052-.077.107-.125.176h15.086Zm-9.537 1.3c.209.748 1.168 1.322 2.119 1.274.847-.043 1.757-.67 1.845-1.274h-3.964Z"
        fill="#fff"
      />
    </Svg>
  );
}

const Memo = memo(SvgComponent);
export default Memo;