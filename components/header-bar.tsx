import { View, Text, ViewStyle, Pressable } from 'react-native';
import React, { useContext } from 'react';
import ThemeText from './theme-text';
import { ChevronLeft } from '@/assets/icons/chevron-left';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from '@/assets/icons/arrow-left';
import { ThemeContext } from '@/provider/theme-provider';

export interface HeaderBarProps {
	showTitle?: boolean;
	headerRight?: React.ReactElement;
	hideBackButton?: boolean;
	onBackPress?: () => void;
	title?: React.ReactNode;
	backButton?: React.ReactNode;
	containerStyle?: ViewStyle;
}

const HeaderBar = ({
	showTitle,
	headerRight,
	hideBackButton,
	onBackPress,
	title,
	backButton,
}: HeaderBarProps) => {
	const { colorTheme } = useContext(ThemeContext);
	const handleBackPress = React.useCallback(() => {
		if (onBackPress) return onBackPress();
		router.canGoBack() && router.back();
	}, [onBackPress]);
	const renderTitle = React.useMemo(() => {
		if (!title) return null;
		if (typeof title === 'string' || typeof title === 'number') {
			return <ThemeText style={{ fontSize: 16 }}>{title}</ThemeText>;
		}
		return title;
	}, [title]);
	const renderBackButton = React.useMemo(() => {
		return (
			<Pressable
				onPress={handleBackPress}
				style={{
					marginRight: 30,
					borderRadius: 99,
					padding: 2,
				}}
			>
				{backButton || <ArrowLeft color={colorTheme.onSurface} />}
			</Pressable>
		);
	}, [backButton, handleBackPress]);
	return (
		<SafeAreaView>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginHorizontal: 16,
					paddingBottom: 8,
					marginTop: 12,
				}}
			>
				<View className="flex-row bg-gray-400 items-center">
					{renderBackButton}
					{renderTitle}
				</View>
				{headerRight}
			</View>
		</SafeAreaView>
	);
};

export default HeaderBar;
