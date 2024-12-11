import * as React from 'react';
import Svg, { Defs, Path, RadialGradient, Stop } from 'react-native-svg';
import { IconProps } from './types';

export function AppLogo({ size = 512, ...props }: IconProps) {
  // prettier-ignore
  return (
    <Svg width={size} height={size} viewBox="0 0 512 512" fill="none" {...props}>
      <Path d="M511.917 255.994a255.912 255.912 0 01-255.915 255.913A255.918 255.918 0 01.086 255.993 255.912 255.912 0 01353.936 19.56a255.918 255.918 0 01157.981 236.434z" fill="url(#paint0_radial_80412_60)" />
      <Path d="M203.937 174.908a96.36 96.36 0 00-36.964 117.964 96.364 96.364 0 1036.964-117.964zm34.918 54.383a31.735 31.735 0 1134.296 53.405 31.735 31.735 0 01-34.296-53.405z" fill="url(#paint1_radial_80412_60)" />
      <Path d="M107.92 47.3C42.657 93.745 0 169.99 0 255.991 0 397.121 114.875 512 256.006 512 397.137 512 512 397.123 512 255.993c0-62.298-22.393-119.47-59.536-163.91l-86.421 60.511 24.761 35.363 51.126-35.799c17.134 30.692 26.9 66.093 26.9 103.835 0 117.795-95.026 212.821-212.821 212.82-117.796 0-212.824-95.028-212.824-212.823S138.21 43.17 256.006 43.17c40.816 0 78.896 11.415 111.239 31.228l37.752-26.434C362.996 17.794 311.537 0 256.005 0c-55.129 0-106.25 17.528-148.085 47.3z" fill="url(#paint2_radial_80412_60)" />
      <Defs>
        <RadialGradient id="paint0_radial_80412_60" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="matrix(319.5025 -223.71888 237.7096 339.48322 144.928 100.155)" >
          <Stop stopColor="#494B48" />
          <Stop offset={1} stopColor="#222526" />
        </RadialGradient>
        <RadialGradient id="paint1_radial_80412_60" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="rotate(-35 379.339 -235.95) scale(196.12 202.407)" >
          <Stop stopColor="#fff" />
          <Stop offset={0.191306} stopColor="#FCFCFC" />
          <Stop offset={1} stopColor="#CECECE" />
        </RadialGradient>
        <RadialGradient id="paint2_radial_80412_60" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="rotate(145 49.934 51.545) scale(587.056 485.305)" >
          <Stop stopColor="#30ACEA" />
          <Stop offset={0.233047} stopColor="#43A5E8" />
          <Stop offset={1} stopColor="#A582E3" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}
