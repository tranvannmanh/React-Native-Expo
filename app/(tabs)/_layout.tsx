import React from 'react';
import { Stack } from 'expo-router';

const TodTodoLayout = () => {
	return (
		<Stack
			screenOptions={{
				animation: 'ios_from_right',
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					title: 'TodTodo with SQLite',
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen
				name="settings"
				options={{
					title: 'Setting',
					headerShadowVisible: false,
					headerTitleStyle: {
						fontSize: 28,
					},
				}}
			/>
			<Stack.Screen
				name="new-item"
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	);
};

export default TodTodoLayout;
