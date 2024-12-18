import React from 'react';
import { StyleSheet, SafeAreaView, View, Pressable, Text } from 'react-native';
import Animated, {
	withDelay,
	useAnimatedStyle,
	withSpring,
	withTiming,
	ReduceMotion,
	SharedValue,
} from 'react-native-reanimated';
import { SpringConfig } from 'react-native-reanimated/lib/typescript/animation/springUtils';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const SPRING_CONFIG: SpringConfig = {
	duration: 500,
	// overshootClamping: true,
	dampingRatio: 1,
	reduceMotion: ReduceMotion.System,
	clamp: { min: 0, max: 0 },
};

const OFFSET = 64;

type AnimatedFABProps = {
	isExpanded: SharedValue<boolean>;
	index: number;
	buttonLetter: string;
	onPress?: () => void;
};

export const FloatingActionButton = ({
	isExpanded,
	index,
	buttonLetter,
	onPress,
}: AnimatedFABProps) => {
	const animatedStyles = useAnimatedStyle(() => {
		const moveValue = isExpanded.value ? OFFSET * index : 1;
		const translateValue = withSpring(-moveValue, SPRING_CONFIG);
		// const delay = index * 100;

		// const scaleValue = isExpanded.value ? 1 : 0;

		return {
			transform: [
				{ translateY: translateValue },
				// {
				// 	scale: withDelay(delay, withTiming(scaleValue)),
				// },
			],
		};
	});

	return (
		<AnimatedPressable
			style={[animatedStyles, styles.shadow, styles.button]}
			onPress={onPress}
		>
			<Animated.Text style={styles.content}>{buttonLetter}</Animated.Text>
		</AnimatedPressable>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		position: 'relative',
		height: 260,
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	button: {
		width: 54,
		height: 54,
		backgroundColor: '#82cab2',
		position: 'absolute',
		borderRadius: 100,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1,
		flexDirection: 'row',
	},
	buttonContainer: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
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
