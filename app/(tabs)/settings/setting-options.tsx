import { View, Button } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const SettingsOptions = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Button
				title="To theme setting"
				onPress={() => {
					router.navigate({
						pathname: '/(tabs)/settings/setting-theme',
						params: {
							type: 'theme',
						},
					});
				}}
			/>
		</View>
	);
};

export default SettingsOptions;
