import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const SettingLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name="setting-options"
				options={{
					title: 'Setting Options',
				}}
			/>
			<Stack.Screen
				name="setting-theme"
				options={{
					title: 'App Theme',
				}}
			/>
		</Stack>
	);
};

export default SettingLayout;
