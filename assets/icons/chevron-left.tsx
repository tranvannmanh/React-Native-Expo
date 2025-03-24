import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { AssetIconProps } from '.';

export function ChevronLeft({ size = 24, color = 'black' }: AssetIconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
			<Path
				d="M15.41 16.58L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.58Z"
				fill={color}
			/>
		</Svg>
	);
}
