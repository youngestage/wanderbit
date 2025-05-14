import { useColorScheme } from 'react-native';
import Svg, { ClipPath, Defs, FeColorMatrix, Filter, G, Mask, Path, Rect } from 'react-native-svg';

interface LogoProps {
  width?: number;
  height?: number;
}

export function Logo({ width = 500, height = 500 }: LogoProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 375 374.999991"
      preserveAspectRatio="xMidYMid meet"
    >
      <Defs>
        <Filter x="0%" y="0%" width="100%" height="100%" id="f55496a55e">
          <FeColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        </Filter>
        <ClipPath id="9e96e5de1b">
          <Path d="M 169 115.253906 L 247 115.253906 L 247 260 L 169 260 Z M 169 115.253906" />
        </ClipPath>
        <ClipPath id="84755ad9b1">
          <Path d="M 80.683594 115.253906 L 166 115.253906 L 166 260 L 80.683594 260 Z M 80.683594 115.253906" />
        </ClipPath>
        <ClipPath id="38833ca1b9">
          <Path d="M 128 115.253906 L 294.433594 115.253906 L 294.433594 260.003906 L 128 260.003906 Z M 128 115.253906" />
        </ClipPath>
        <Mask id="f519c42182">
          <G filter="url(#f55496a55e)">
            <Rect x="-37.5" width="450" fill="#000000" y="-37.499999" height="449.999989" fillOpacity="0.8" />
          </G>
        </Mask>
        <ClipPath id="a84cece680">
          <Path d="M 0.398438 0.253906 L 166.433594 0.253906 L 166.433594 145 L 0.398438 145 Z M 0.398438 0.253906" />
        </ClipPath>
        <ClipPath id="5e5d4fe474">
          <Rect x="0" width="167" y="0" height="146" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#9e96e5de1b)">
        <Path
          fill={isDark ? '#818a92' : '#6d767e'}
          d="M 205.945312 115.253906 L 246.09375 259.746094 L 209.40625 259.105469 L 169.042969 115.253906 Z"
          fillOpacity="1"
        />
      </G>
      <G clipPath="url(#84755ad9b1)">
        <Path
          fill={isDark ? '#6d767e' : '#22262a'}
          d="M 128.894531 259.746094 L 80.714844 115.253906 L 117.660156 115.253906 L 165.839844 259.746094 Z"
          fillOpacity="1"
        />
      </G>
      <G clipPath="url(#38833ca1b9)">
        <G mask="url(#f519c42182)">
          <G transform="matrix(1, 0, 0, 1, 128, 115)">
            <G clipPath="url(#5e5d4fe474)">
              <G clipPath="url(#a84cece680)">
                <Path
                  fill={isDark ? '#424a52' : '#adb5bd'}
                  d="M 166.273438 0.253906 L 118.09375 144.746094 L 81.148438 144.746094 L 129.328125 0.253906 Z M 0.894531 144.746094 L 37.582031 144.105469 L 77.945312 0.253906 L 41 0.253906 Z"
                  fillOpacity="1"
                />
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
} 