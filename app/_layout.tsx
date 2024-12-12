import { Stack } from 'expo-router';
import * as NavigationBar from 'expo-navigation-bar';

// Import your global CSS file
import '../global.css';
import { useEffect } from 'react';

export default function Layout() {
	useEffect(() => {
		const setBackgroundNavigationBar = async (color: string) => {
			try {
				await NavigationBar.setBackgroundColorAsync(color);
			} catch (error) {
				console.log('ERRROR://// ', error);
			}
		};
		setBackgroundNavigationBar('transparent');
	}, []);
	return (
		<Stack>
			<Stack.Screen
				name="(tabs)"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen name="not-found" />
		</Stack>
	);
}
