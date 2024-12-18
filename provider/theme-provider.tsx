import { Color } from '@/constants/color';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from '@react-navigation/native';
import React, { PropsWithChildren } from 'react';
import * as NavigationBar from 'expo-navigation-bar';

export interface IThemeContext {
	isDark: boolean;
	color: typeof Color;
	colorTheme: typeof Color.schemes.dark;
}

export const ThemeContext = React.createContext<IThemeContext>({
	isDark: false,
	color: Color,
	colorTheme: Color.schemes.light,
});

interface IThemeProvider extends PropsWithChildren {}

const AppThemeProvider = (props: IThemeProvider) => {
	const theme = useColorScheme();
	const colorTheme = Color.schemes[theme === 'dark' ? 'dark' : 'light'];
	const navigationTheme = theme === 'dark' ? DarkTheme : DefaultTheme;
	React.useEffect(() => {
		const setBackgroundNavigationBar = async (color: string) => {
			try {
				await NavigationBar.setBackgroundColorAsync(color);
			} catch (error) {}
		};
		setBackgroundNavigationBar(colorTheme.surface);
	}, [colorTheme]);
	return (
		<ThemeProvider
			value={{
				...navigationTheme,
				colors: {
					primary: colorTheme.tertiary,
					card: colorTheme.surface,
					text: colorTheme.onSurface,
					border: colorTheme.surfaceVariant,
					notification: colorTheme.tertiary,
					background: colorTheme.surface,
				},
			}}
		>
			<ThemeContext.Provider
				value={{
					isDark: theme === 'dark',
					color: Color,
					colorTheme,
				}}
			>
				{props.children}
			</ThemeContext.Provider>
		</ThemeProvider>
	);
};

export default AppThemeProvider;
