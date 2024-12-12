import React from 'react';
import { Stack } from 'expo-router';

const ExamplesLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="expo-video"
				options={{
					title: 'Expo Video',
					animation: 'simple_push',
					headerShadowVisible: false,
				}}
			/>
		</Stack>
	);
};

export default ExamplesLayout;
