import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated from 'react-native-reanimated';
import { MaterialIcons } from '@expo/vector-icons';
import { RelativePathString, router } from 'expo-router';
import ThemeText from '@/components/theme-text';
import { ThemeContext } from '@/provider/theme-provider';

const Examples = () => {
	const { colorTheme } = React.useContext(ThemeContext);
	return (
		<View className="flex-1 pt-20">
			<StatusBar style="auto" translucent />
			<Animated.ScrollView>
				<ThemeText className="text-[32px] pl-4">Examples</ThemeText>
				<TouchableOpacity
					className="flex-row justify-between w-full px-4 pt-4"
					onPress={() => router.navigate('/(tabs)/examples/expo-video')}
				>
					<ThemeText className="text-[20px]">Expo Video</ThemeText>
					<MaterialIcons
						name="chevron-right"
						color={colorTheme.outlineVariant}
						size={28}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					className="flex-row justify-between w-full px-4 pt-4"
					onPress={() => router.navigate('/(tabs)/examples/expo-sqlite')}
				>
					<ThemeText className="text-[20px]">Expo SQLite</ThemeText>
					<MaterialIcons
						name="chevron-right"
						color={colorTheme.outlineVariant}
						size={28}
					/>
				</TouchableOpacity>
			</Animated.ScrollView>
		</View>
	);
};

export default Examples;
