import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { AssetIconProps } from '.';

export function FormatTitle({ size = 24, color = 'black' }: AssetIconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
			<Path d="M5 4V7H10.5V19H13.5V7H19V4H5Z" fill={color} />
		</Svg>
	);
}
