import React from 'react';
import Svg, {
  Rect, Mask, Path, G,
} from 'react-native-svg';

function AskDoubtSearchIcon() {
  return (
    <Svg
      width={40}
      height={40}
      fill="none"
    >
      <Rect width={40} height={40} rx={4} fill="#2DA77D" />
      <Mask
        id="a"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={8}
        y={8}
        width={30}
        height={30}
      >
        <Path fill="#D9D9D9" d="M8 8h24v24H8z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="m27.6 29-6.3-6.3a6.096 6.096 0 0 1-3.8 1.3c-1.817 0-3.354-.629-4.612-1.887C11.629 20.854 11 19.317 11 17.5c0-1.817.63-3.354 1.888-4.613C14.146 11.629 15.683 11 17.5 11c1.817 0 3.354.629 4.613 1.887C23.371 14.146 24 15.683 24 17.5a6.096 6.096 0 0 1-1.3 3.8l6.3 6.3-1.4 1.4Zm-10.1-7c1.25 0 2.313-.437 3.188-1.312S22 18.75 22 17.5c0-1.25-.437-2.313-1.312-3.188S18.75 13 17.5 13c-1.25 0-2.313.437-3.188 1.312S13 16.25 13 17.5c0 1.25.437 2.313 1.312 3.188S16.25 22 17.5 22Z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default AskDoubtSearchIcon;
