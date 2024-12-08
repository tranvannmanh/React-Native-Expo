import { Text, View } from 'react-native';

export default function NotFoundScreen() {
	console.log('LOG TO DEVTOOL');
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Edit app/index.tsx to edit this screen.</Text>
		</View>
	);
}
