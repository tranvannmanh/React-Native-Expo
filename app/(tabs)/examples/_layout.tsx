import React from 'react';
import { Stack } from 'expo-router';

const ExamplesLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen
				name="expo-video"
				options={{
					title: 'Expo Video',
					animation: 'simple_push',
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen name="expo-sqlite" />
		</Stack>
	);
};

export default ExamplesLayout;
