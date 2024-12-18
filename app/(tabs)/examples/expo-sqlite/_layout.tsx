import React from 'react';
import { Stack } from 'expo-router';

const TodTodoLayout = () => {
	return (
		<Stack>
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
					title: 'Settings',
					headerShadowVisible: false,
					headerTitleStyle: {
						fontSize: 28,
					},
				}}
			/>
			<Stack.Screen
				name="new-item"
				options={{
					title: 'New task',
					headerShadowVisible: false,
				}}
			/>
		</Stack>
	);
};

export default TodTodoLayout;
