import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View, Button, Dimensions, Text } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;
const videoSource =
	'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/dash/ForBiggerJoyridesVideo.mp4';

export default function ExpoVideoScreen() {
	const [onFullscreenMode, setOnFullscreenMode] = useState<boolean>(false);
	const player = useVideoPlayer(videoSource, (player) => {
		player.loop = true;
		player.play();
	});
	const { isPlaying } = useEvent(player, 'playingChange', {
		isPlaying: player.playing,
	});

	const a = useEvent(player, 'timeUpdate');

	const landscapeOrientation = async () => {
		try {
			await ScreenOrientation.lockAsync(
				ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
			);
		} catch (error) {}
	};

	const portraitOrientation = async () => {
		await ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.PORTRAIT_UP
		);
	};

	useEffect(() => {
		if (onFullscreenMode) {
			landscapeOrientation();
		}
	}, [onFullscreenMode]);

	return (
		<View style={styles.contentContainer}>
			<VideoView
				style={styles.video}
				player={player}
				allowsFullscreen
				allowsPictureInPicture
				onFullscreenEnter={landscapeOrientation}
				onFullscreenExit={portraitOrientation}
				// nativeControls={false}
			>
				<View className="absolute bg-transparent" />
			</VideoView>
			<Text
				style={{
					fontSize: 16,
					color: 'black',
					marginVertical: 16,
					marginHorizontal: 16,
				}}
			>
				ft. Expo Video - For bigger joyrides
			</Text>
			<View style={styles.controlsContainer}>
				<Button
					title={isPlaying ? 'Pause' : 'Play'}
					onPress={() => {
						if (isPlaying) {
							player.pause();
						} else {
							player.play();
						}
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		backgroundColor: 'white',
	},
	video: {
		width: SCREEN_WIDTH,
		height: (SCREEN_WIDTH * 10) / 16,
		backgroundColor: 'black',
	},
	controlsContainer: {
		paddingHorizontal: 16,
	},
});
