import { View, Text, TouchableOpacity, Animated } from 'react-native';
import React from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { Stack } from 'expo-router';
import { Color } from '@/constants/color';
import ThemeText from '@/components/theme-text';
import { ThemeContext } from '@/provider/theme-provider';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface ISettingRow {
	icon: React.ReactNode;
	title: string | React.ReactNode;
	state?: string;
	onPress?: () => void;
	colorTheme: typeof Color.schemes.light;
}
const SettingRow = React.memo(
	({ icon, title, state, onPress, colorTheme }: ISettingRow) => {
		const settingTitle = () => {
			if (typeof title === 'string') {
				return <ThemeText className="text-[16px] font-bold">{title}</ThemeText>;
			}
			return title;
		};

		const settingState = () => {
			if (typeof title === 'string') {
				return (
					<ThemeText isSendary className="text-[16px]">
						{state}
					</ThemeText>
				);
			}
			return title;
		};

		return (
			<TouchableOpacity
				onPress={onPress}
				className="flex-row p-[16px] justify-between"
				activeOpacity={0.2}
			>
				<View className="flex-row items-center gap-[10px]">
					{icon}
					{settingTitle()}
				</View>
				<View className="flex-row items-center gap-[4px]">
					{settingState()}
					<Feather name="chevron-right" size={24} color={colorTheme.outline} />
				</View>
			</TouchableOpacity>
		);
	}
);

const Settings = () => {
	const { colorTheme, isDark } = React.useContext(ThemeContext);
	return (
		<View className="flex-1">
			<Animated.ScrollView>
				<View className="h-[32px]" />
				<SettingRow
					colorTheme={colorTheme}
					icon={
						<MaterialIcons
							name="language"
							size={24}
							color={colorTheme.onSurface}
						/>
					}
					title={'Languages'}
					state={'Tiếng Việt'}
				/>
				<SettingRow
					colorTheme={colorTheme}
					icon={
						<MaterialCommunityIcons
							name="theme-light-dark"
							size={24}
							color={colorTheme.onSurface}
						/>
					}
					title={'Color scheme'}
					state={isDark ? 'Dark' : 'Light'}
				/>
			</Animated.ScrollView>
		</View>
	);
};

export default Settings;
