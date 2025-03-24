import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import CModal, { CModalProps, CModalRef } from '@/components/modal';
import ThemeText from '@/components/theme-text';
import { ThemeContext } from '@/provider/theme-provider';
import { Plus } from '@/assets/icons/plus';
import { Label } from '@/interface/tod-item';

const ChooseLabelModal = React.forwardRef<CModalRef, CModalProps>(
	(props, ref) => {
		const [isVisible, setIsVisible] = useState(false);
		const { colorTheme } = useContext(ThemeContext);
		const show = () => {
			setIsVisible(true);
		};
		const close = () => {
			setIsVisible(false);
		};
		const DEFAULT_LABELS: Label[] = [
			{
				title: 'Home',
				value: 'home',
				color: colorTheme.onError,
				id: 'uuusdsu29',
			},
			{
				title: 'Work',
				value: 'work',
				color: colorTheme.onTertiaryContainer,
				id: 'pewofjlweit',
			},
		];
		React.useImperativeHandle(
			ref,
			() => ({
				close,
				show,
			}),
			[close, show]
		);
		const renderLabel = (label: Label, index: number) => {
			return;
		};
		return (
			<Modal
				visible={isVisible}
				onRequestClose={close}
				transparent
				statusBarTranslucent
				animationType="slide"
			>
				<Pressable
					onPress={close}
					className="flex-1 justify-end bg-[#16161680]"
				>
					<Pressable
						style={[
							styles.sheetContainer,
							{ backgroundColor: colorTheme.surfaceBright },
						]}
					>
						<View className="py-3">
							<ThemeText
								style={{
									textAlign: 'center',
									fontWeight: 'bold',
									fontSize: 18,
								}}
							>
								Choose label
							</ThemeText>
							<View style={styles.buttonContainer}>
								<Pressable
									style={[
										styles.addButton,
										{ backgroundColor: colorTheme.primary },
									]}
								>
									<Plus color={colorTheme.onPrimary} />
								</Pressable>
							</View>
						</View>
					</Pressable>
				</Pressable>
			</Modal>
		);
	}
);

export default ChooseLabelModal;

const styles = StyleSheet.create({
	sheetContainer: {
		overflow: 'hidden',
		height: 350,
		borderRadius: 24,
	},
	addButton: {
		borderRadius: 4,
	},
	buttonContainer: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		justifyContent: 'center',
		paddingRight: 16,
	},
});
