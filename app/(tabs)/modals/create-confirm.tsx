import ThemeText from '@/components/theme-text';
import React, { useState } from 'react';
import { View } from 'react-native';
import ReactNativeModal from 'react-native-modal';

const CreateConfirm = () => {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<ReactNativeModal isVisible={isVisible}>
			<View>
				<ThemeText>React-native-modal</ThemeText>
			</View>
		</ReactNativeModal>
	);
};

export default CreateConfirm;
