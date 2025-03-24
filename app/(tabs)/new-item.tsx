import { View, TextInput, Pressable, ViewStyle } from 'react-native';
import React, { useCallback, useContext, useRef, useState } from 'react';
import Animated from 'react-native-reanimated';
import { ThemeContext } from '@/provider/theme-provider';
import ThemeText from '@/components/theme-text';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Calendar } from '@/assets/icons/calendar';
import { Flag } from '@/assets/icons/flag';
import { Info } from '@/assets/icons/info';
import { Priority, TodItem } from '@/interface/tod-item';
import RNDateTimePicker, {
	DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import moment from 'moment';
import {
	SafeAreaView,
	useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams } from 'expo-router';
import { displayPriority } from '@/utils/tod-item';
import ChoosePriorityModal, {
	ModalChoosePriorityRef,
} from './modals/choose-priority';
import { CStatusBar } from '@/components/status-bar';
import { FormatTitle } from '@/assets/icons/format-title';
import HeaderBar from '@/components/header-bar';
import { Close } from '@/assets/icons/close';
import ChooseLabelModal from './modals/choose-label';
import { CModalRef } from '@/components/modal';
type RowPropertyType = {
	icon: React.ReactNode;
	label: string | React.ReactNode;
	value: string | React.ReactNode;
	pressRippleColor?: string;
	rightComponent?: React.ReactElement;
	pressable?: boolean;
	onPress?: () => void;
	containerStyle?: ViewStyle;
};

const RowProperty = ({
	icon,
	label,
	value,
	pressRippleColor,
	rightComponent,
	pressable,
	onPress,
	containerStyle,
}: RowPropertyType) => {
	let labelRender = label;
	let valueRender = value;
	if (typeof label === 'string') {
		labelRender = (
			<ThemeText className="text-[12px]" isSendary>
				{label}
			</ThemeText>
		);
	}
	if (typeof value === 'string') {
		valueRender = <ThemeText>{value}</ThemeText>;
	}
	return (
		<Pressable
			disabled={pressable}
			android_ripple={{
				color: pressRippleColor,
			}}
			className="flex-row px-5 py-4 items-center"
			onPress={onPress}
			style={containerStyle}
		>
			<View className="w-16">{icon}</View>
			{rightComponent ?? (
				<View>
					{labelRender}
					{valueRender}
				</View>
			)}
		</Pressable>
	);
};

const NewTodItem = () => {
	const { colorTheme, isDark } = useContext(ThemeContext);
	const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
	const [newTodItem, setNewTodItem] = useState<TodItem>({
		title: '',
		description: '',
		dueDate: new Date(),
		label: undefined,
		priority: 'medium',
	});
	const choosePriorityModalRef = useRef<ModalChoosePriorityRef>(null);
	const chooseLabelModalRef = useRef<CModalRef>(null);
	const openModalSelectModal = () => {
		chooseLabelModalRef.current?.show();
	};
	const openModalChoosePrority = useCallback(() => {
		choosePriorityModalRef.current?.show();
	}, []);
	const param = useLocalSearchParams();

	const toggleDatePickerHandler = () => {
		setIsDatePickerVisible((prev) => !prev);
	};

	const onChangeTitle = useCallback((value: string) => {
		setNewTodItem((prev) => ({ ...prev, title: value }));
	}, []);

	const onChangeDescription = useCallback((value: string) => {
		setNewTodItem((prev) => ({ ...prev, description: value }));
	}, []);

	const onChangePriority = useCallback((priority: Priority) => {
		setNewTodItem((prev) => ({ ...prev, priority }));
	}, []);

	const onSelectDueDate = useCallback(
		(_event: DateTimePickerEvent, date?: Date) => {
			if (date) {
				setNewTodItem((prev) => ({ ...prev, dueDate: date }));
			}
			setIsDatePickerVisible(false);
		},
		[]
	);
	return (
		<>
			<CStatusBar />
			<HeaderBar
				title="New task"
				backButton={<Close color={colorTheme.onSurface} size={26} />}
				headerRight={
					param.todItemId ? (
						<View className="rounded-full overflow-hidden">
							<Pressable
								className="px-4 py-1 items-center justify-center"
								// disabled
								android_ripple={{ color: colorTheme.surfaceDim }}
								style={{
									backgroundColor: colorTheme.secondaryContainer,
								}}
							>
								<MaterialIcons
									name="check"
									size={18}
									color={colorTheme.onSecondaryContainer}
								/>
							</Pressable>
						</View>
					) : undefined
				}
			/>
			{/* {param.todItemId && ( */}
			{/* <Stack.Screen
					options={{
						headerShown: false,
						headerRight: () => (
							<View className="rounded-full overflow-hidden">
								<Pressable
									className="px-4 py-1 items-center justify-center"
									// disabled
									android_ripple={{ color: colorTheme.primary }}
									style={{
										backgroundColor: colorTheme.secondaryContainer,
									}}
								>
									<MaterialIcons
										name="check"
										size={18}
										color={colorTheme.onSecondaryContainer}
									/>
								</Pressable>
							</View>
						),
					}}
				/> */}
			{/* )} */}
			<Animated.ScrollView className="pt-4">
				<View className="flex-row mx-5">
					<View className="w-16 h-14 justify-center">
						<FormatTitle color={colorTheme.onSurface} />
					</View>
					<TextInput
						className={`text-[24px] border-b flex-1`}
						placeholder="Add title"
						value={newTodItem.title}
						onChangeText={onChangeTitle}
						placeholderTextColor={colorTheme.onSurfaceVariant}
						multiline
						autoFocus
						style={{
							borderColor: colorTheme.outline,
							color: colorTheme.secondary,
						}}
					/>
				</View>
				<View className="h-16" />
				<RowProperty
					icon={<Calendar color={colorTheme.onSurface} />}
					label="Due date"
					value={moment(newTodItem.dueDate).format('YYYY-MM-DD')}
					pressRippleColor={colorTheme.onPrimary}
					onPress={toggleDatePickerHandler}
				/>
				<RowProperty
					icon={<Flag color={colorTheme.onSurface} size={24} />}
					label="Priority"
					pressRippleColor={colorTheme.onPrimary}
					value={displayPriority(newTodItem.priority)}
					onPress={openModalChoosePrority}
				/>
				<RowProperty
					icon={
						<MaterialIcons
							name="label"
							size={24}
							color={colorTheme.onSurface}
						/>
					}
					pressRippleColor={colorTheme.onPrimary}
					label="Label"
					value="20-02-2024"
					onPress={openModalSelectModal}
				/>
				<RowProperty
					icon={<Info color={colorTheme.onSurface} />}
					pressRippleColor={colorTheme.onPrimary}
					label="Label"
					value="20-02-2024"
					pressable={false}
					containerStyle={{
						alignItems: 'flex-start',
					}}
					rightComponent={
						<TextInput
							placeholder="Task description"
							placeholderTextColor={colorTheme.outline}
							value={newTodItem.description}
							onChangeText={onChangeDescription}
							multiline
							style={{
								borderBottomWidth: 1,
								borderColor: colorTheme.outline,
								flexShrink: 1,
								borderRadius: 4,
								paddingLeft: -1,
								paddingTop: -2,
								color: colorTheme.onSurface,
							}}
						/>
					}
				/>
			</Animated.ScrollView>
			<View className="mx-5 mb-4 rounded-full overflow-hidden">
				<Pressable
					className="py-3 rounded-full overflow-hidden"
					android_ripple={{
						color: colorTheme.onPrimaryFixedVariant,
					}}
					style={{
						backgroundColor: colorTheme.primary,
					}}
				>
					<ThemeText
						className="text-xl text-center"
						style={{ color: colorTheme.onPrimary }}
					>
						Create
					</ThemeText>
				</Pressable>
			</View>
			{isDatePickerVisible && (
				<RNDateTimePicker
					value={newTodItem.dueDate || new Date()}
					onChange={onSelectDueDate}
					themeVariant={isDark ? 'dark' : 'light'}
					style={{
						backgroundColor: 'red',
					}}
				/>
			)}
			<ChoosePriorityModal
				ref={choosePriorityModalRef}
				value={newTodItem.priority}
				onChangePriority={onChangePriority}
			/>
			<ChooseLabelModal ref={chooseLabelModalRef} />
		</>
	);
};

export default NewTodItem;
