import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				headerPressColor: 'transparent',
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home Screen',
					tabBarButton: (props) => (
						<TouchableOpacity
							onPress={props.onPress}
							className="items-center"
							activeOpacity={1}
						>
							{props.children}
						</TouchableOpacity>
					),
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
					tabBarButton: (props) => (
						<TouchableOpacity
							onPress={props.onPress}
							className="items-center"
							activeOpacity={1}
						>
							{props.children}
						</TouchableOpacity>
					),
				}}
			/>
			<Tabs.Screen
				name="examples"
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="category" color={color} />
					),
					tabBarButton: (props) => (
						<TouchableOpacity
							onPress={props.onPress}
							className="items-center"
							activeOpacity={1}
						>
							{props.children}
						</TouchableOpacity>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
