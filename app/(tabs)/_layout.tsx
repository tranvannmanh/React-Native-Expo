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
				tabBarStyle: {
					paddingTop: 10,
					height: 70,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home Screen',
					tabBarLabelStyle: {
						fontSize: 14,
					},
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
						<MaterialIcons name="home" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="settings" size={24} color={color} />
					),
					tabBarLabelStyle: {
						fontSize: 14,
					},
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
						<MaterialIcons name="category" size={24} color={color} />
					),
					tabBarLabelStyle: {
						fontSize: 14,
					},
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
