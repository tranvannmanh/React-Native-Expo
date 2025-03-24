import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Label } from '@/interface/tod-item';
import { Color } from '@/constants/color';

export interface ChipLabelProps {
	item: Label;
	colorTheme?: typeof Color.schemes.dark;
	currentValue?: Label;
	onPress?: () => void;
}

const ChipLabel = (props: ChipLabelProps) => {
	return (
		<View style={styles.container}>
			<Text>LabelChip</Text>
		</View>
	);
};

export default ChipLabel;

const styles = StyleSheet.create({
	container: {},
});
