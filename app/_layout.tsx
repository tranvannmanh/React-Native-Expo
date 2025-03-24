import { Stack } from 'expo-router';

// Import your global CSS file
import '../global.css';
import AppThemeProvider from '@/provider/theme-provider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Alert, PermissionsAndroid, ToastAndroid } from 'react-native';
import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
	console.log(
		'Message handled in the background!',
		JSON.stringify(remoteMessage)
	);
});

export default function Layout() {
	const handleRequestNotiPermission = async () => {
		try {
			const token = await messaging().getToken();
			console.log('MESSAGING TOKEN..', token);
			const permissionStatus = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
			);
			if (permissionStatus === 'denied') {
				ToastAndroid.show('Noti permission denied!', 5);
			}
		} catch (error) {}
	};
	useEffect(() => {
		handleRequestNotiPermission();
	}, []);
	useEffect(() => {
		const unsubscribe = messaging().onMessage(async (remoteMessage) => {
			console.log('FCM Message:. ', JSON.stringify(remoteMessage));
			Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
		});

		return unsubscribe;
	}, []);
	return (
		<SafeAreaProvider>
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
		</SafeAreaProvider>
	);
}
