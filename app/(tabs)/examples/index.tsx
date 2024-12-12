import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';
import { RelativePathString, router } from 'expo-router';

const Examples = () => {
	return (
		<View className="flex-1 pt-20">
			<StatusBar style="auto" translucent />
			<Animated.ScrollView>
				<Text className="text-[32px] pl-4">Examples</Text>
				<TouchableOpacity
					className="flex-row justify-between w-full px-4 pt-4"
					onPress={() => router.navigate('/(tabs)/examples/expo-video')}
				>
					<Text className="text-[20px]">Expo Video</Text>
					<MaterialIcons name="chevron-right" color="black" size={28} />
				</TouchableOpacity>
			</Animated.ScrollView>
		</View>
	);
};

export default Examples;
