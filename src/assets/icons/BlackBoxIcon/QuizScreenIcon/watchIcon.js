/* eslint-disable react/prop-types */
import * as React from 'react';
import Svg, {
  G, Path, Defs, ClipPath,
} from 'react-native-svg';

function SvgComponent(props) {
  const { color = '#000000' } = props;
  return (
    <Svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#a)">
        <Path
          d="m14.983 3.53-1.68-1.679a.625.625 0 1 0-.884.884l.398.398-.816.816a6.748 6.748 0 0 0-3.73-1.545V1.25h.563a.625.625 0 1 0 0-1.25H6.459a.625.625 0 1 0 0 1.25h.562v1.154C3.593 2.714.834 5.593.834 9.188A6.809 6.809 0 0 0 7.646 16a6.809 6.809 0 0 0 6.813-6.813c0-1.61-.555-3.133-1.574-4.355l.816-.815.398.397a.625.625 0 1 0 .884-.883ZM7.646 14.75a5.569 5.569 0 0 1-5.562-5.563 5.569 5.569 0 0 1 5.562-5.562 5.569 5.569 0 0 1 5.563 5.563 5.569 5.569 0 0 1-5.563 5.562Zm3.248-5.563c0 .346-.28.626-.625.626H7.647a.625.625 0 0 1-.625-.626V5.51a.625.625 0 1 1 1.25 0v3.053h1.997c.345 0 .625.28.625.624Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
