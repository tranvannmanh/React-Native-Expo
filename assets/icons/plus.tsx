import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { AssetIconProps } from '.';

export function Plus({ size = 24, color = 'black' }: AssetIconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
			<Path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={color} />
		</Svg>
	);
}
