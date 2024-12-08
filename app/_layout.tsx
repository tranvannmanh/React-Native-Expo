import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen
				name="(tabs)"
				options={{
					headerShown: false,
				}}
			/>
			{/* <Stack.Screen name="not-found" /> */}
		</Stack>
	);
}
