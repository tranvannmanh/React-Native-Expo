import { View, Text, Pressable } from 'react-native';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import ReactNativeModal from 'react-native-modal';
import { Priority } from '@/interface/tod-item';
import ThemeText from '@/components/theme-text';
import { displayPriority } from '@/utils/tod-item';
import Feather from '@expo/vector-icons/Feather';
import { PRIORITY } from '@/constants/tod-item';
import { ThemeContext } from '@/provider/theme-provider';

export type ModalChoosePriorityRef = {
	show: () => void;
	close: () => void;
};

export type ModalChoosePriorityProps = {
	value?: Priority;
	onChangePriority?: (value: Priority) => void;
};

const ChoosePriorityModal = React.forwardRef<
	ModalChoosePriorityRef,
	ModalChoosePriorityProps
>((props, ref) => {
	const { colorTheme } = useContext(ThemeContext);
	const [isVisible, setIsVisible] = useState(false);
	const { value, onChangePriority } = props;

	const show = () => {
		setIsVisible(true);
	};
	const close = () => {
		setIsVisible(false);
	};
	React.useImperativeHandle(
		ref,
		() => ({
			show,
			close,
		}),
		[show, close]
	);

	const handleChoosePriority = useCallback(
		(priority: Priority) => {
			onChangePriority?.(priority);
			close();
		},
		[onChangePriority]
	);

	const renderPriorityItem = useCallback(
		(priority: Priority, index: number) => {
			const chosed = priority === value;
			return (
				<Pressable
					key={`${value}_${index}`}
					className="flex-row items-center p-4 justify-between"
					android_ripple={{
						color: colorTheme.surfaceDim,
					}}
					style={
						chosed
							? { backgroundColor: colorTheme.secondaryContainer }
							: undefined
					}
					onPress={() => handleChoosePriority(priority)}
				>
					<ThemeText
						style={{
							color: chosed
								? colorTheme.onSecondaryContainer
								: colorTheme.onSurface,
						}}
					>
						{displayPriority(priority)}
					</ThemeText>
					{chosed && (
						<Feather
							name="check"
							size={14}
							color={colorTheme.onPrimaryContainer}
						/>
					)}
				</Pressable>
			);
		},
		[handleChoosePriority, colorTheme, value]
	);
	const renderPriorityList = useMemo(() => {
		return <>{PRIORITY.map(renderPriorityItem)}</>;
	}, [renderPriorityItem]);
	return (
		<ReactNativeModal
			isVisible={isVisible}
			statusBarTranslucent
			onBackdropPress={close}
			className="mx-11 items-center"
			animationIn={'fadeInUp'}
			animationOut={'fadeOutDown'}
			presentationStyle="overFullScreen"
		>
			<View
				className="rounded-2xl w-8/12 max-w-[300px] py-4"
				style={{ backgroundColor: colorTheme.surfaceBright }}
			>
				{renderPriorityList}
			</View>
		</ReactNativeModal>
	);
});

export default ChoosePriorityModal;
