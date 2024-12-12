import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

const Home = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<StatusBar translucent />
			<Text>Home</Text>
		</View>
	);
};

export default Home;
