import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const TabsLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home Screen',
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="home" color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="settings" color={color} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
