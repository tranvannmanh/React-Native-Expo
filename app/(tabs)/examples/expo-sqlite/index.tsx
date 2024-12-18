import { FloatingActionButton } from '@/components/floating-action-button';
import { ThemeContext } from '@/provider/theme-provider';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Stack } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const TodTodo = () => {
	const { colorTheme } = React.useContext(ThemeContext);
	const isExpanded = useSharedValue(false);
	const buttonContentStyle = useAnimatedStyle(() => {
		const moveValue = interpolate(Number(isExpanded.value), [0, 1], [0, -1]);
		const rotateValue = isExpanded.value ? '-45deg' : '0deg';
		return {
			transform: [
				{
					translateX: withTiming(moveValue),
				},
				{
					rotate: withTiming(rotateValue),
				},
			],
		};
	});

	const handlePress = () => {
		isExpanded.value = !isExpanded.value;
	};

	const handleNavigateToSettings = () => {
		router.navigate('/examples/expo-sqlite/settings');
	};

	const handleTouchOutsideFAB = () => {
		isExpanded.value = false;
	};

	const handleNavigateToNewItem = () => {
		console.log('ACTION ON PRESS');
		router.navigate('/(tabs)/examples/expo-sqlite/new-item');
	};

	return (
		<View className="flex-1">
			<Stack.Screen
				options={{
					headerRight: () => (
						<TouchableOpacity
							style={styles.headerRightButton}
							activeOpacity={0.5}
							onPress={handleNavigateToSettings}
						>
							<Ionicons
								name="reorder-three-outline"
								numberOfLines={2}
								size={24}
								color={colorTheme.onSurface}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<AnimatedPressable
				style={styles.buttonContainer}
				pointerEvents="box-none"
				onPress={handleTouchOutsideFAB}
			>
				<AnimatedPressable
					onPress={handlePress}
					style={[
						styles.floatButton,
						{
							backgroundColor: colorTheme.tertiaryContainer,
						},
					]}
				>
					<Animated.Text
						className="text-[28px]"
						style={[
							buttonContentStyle,
							{
								color: colorTheme.onTertiaryContainer,
							},
						]}
					>
						+
					</Animated.Text>
				</AnimatedPressable>
				<FloatingActionButton
					buttonLetter="A"
					index={1}
					isExpanded={isExpanded}
					onPress={handleNavigateToNewItem}
				/>
				<FloatingActionButton
					buttonLetter="B"
					index={2}
					isExpanded={isExpanded}
				/>
				<FloatingActionButton
					buttonLetter="C"
					index={3}
					isExpanded={isExpanded}
				/>
			</AnimatedPressable>
		</View>
	);
};

export default TodTodo;

const styles = StyleSheet.create({
	headerRightButton: {
		width: 40,
		height: 40,
		// backgroundColor: 'orange',
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	actionContent: {
		color: 'white',
	},
	floatButton: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 100,
		minWidth: 56,
		height: 56,
		zIndex: 2,
		paddingHorizontal: 12,
	},
	mainContainer: {
		position: 'relative',
		height: 260,
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	buttonContainer: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'flex-end',
		// backgroundColor: 'wheat',
		// height: 216,
		width: 56,
		bottom: 32,
		right: 16,
		zIndex: 0,
	},
	shadow: {
		shadowColor: '#171717',
		shadowOffset: { width: -0.5, height: 3.5 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	content: {
		color: '#f8f9ff',
		fontWeight: 500,
	},
});
