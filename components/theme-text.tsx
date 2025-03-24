import { View, Text, TextProps, TextStyle } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '@/provider/theme-provider';

const ThemeText = (
	props: TextProps & {
		isSendary?: boolean;
	}
) => {
	const { colorTheme } = useContext(ThemeContext);
	const { style, ...rest } = props;
	return (
		<Text
			style={[
				{
					color: !props.isSendary ? colorTheme.onSurface : colorTheme.outline,
				},
				style,
			]}
			{...rest}
		>
			{props.children}
		</Text>
	);
};

export default ThemeText;
