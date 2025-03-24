import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { AssetIconProps } from '.';

export function ArrowLeft({ size = 24, color = 'black' }: AssetIconProps) {
	return (
		<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
			<Path
				d="M20 11.0001V13.0001H8.00003L13.5 18.5001L12.08 19.9201L4.16003 12.0001L12.08 4.08008L13.5 5.50008L8.00003 11.0001H20Z"
				fill={color}
			/>
		</Svg>
	);
}
