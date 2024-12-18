import { View, Text, TextProps } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '@/provider/theme-provider';

const ThemeText = (
	props: TextProps & {
		isSendary?: boolean;
	}
) => {
	const { colorTheme } = useContext(ThemeContext);
	return (
		<Text
			style={{
				color: !props.isSendary ? colorTheme.onSurface : colorTheme.outline,
			}}
			{...props}
		>
			{props.children}
		</Text>
	);
};

export default ThemeText;
