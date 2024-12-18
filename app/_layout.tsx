import { Stack } from 'expo-router';

// Import your global CSS file
import '../global.css';
import AppThemeProvider from '@/provider/theme-provider';

export default function Layout() {
	return (
		<AppThemeProvider>
			<Stack>
				<Stack.Screen
					name="(tabs)"
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="not-found" />
			</Stack>
		</AppThemeProvider>
	);
}
