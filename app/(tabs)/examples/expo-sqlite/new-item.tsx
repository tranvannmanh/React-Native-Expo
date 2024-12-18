import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

const NewTodItem = () => {
	return (
		<View className="flex-1">
			<Animated.ScrollView className="px-4 pt-4">
				<TextInput
					className="bg-yellow-100 text-[24px] border-b"
					placeholder="Task title"
					multiline
				/>
			</Animated.ScrollView>
		</View>
	);
};

export default NewTodItem;
