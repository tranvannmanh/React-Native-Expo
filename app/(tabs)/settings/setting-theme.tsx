import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const SettingTheme = () => {
	const params = useLocalSearchParams();
	console.log('SETTING PARAMS...........', params);
	return (
		<View>
			<Text>SettingTheme</Text>
		</View>
	);
};

export default SettingTheme;
