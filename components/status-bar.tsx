import { StatusBar } from 'expo-status-bar';
import React from 'react';

export const CStatusBar = React.memo(() => {
	return <StatusBar style="auto" backgroundColor="transparent" />;
});
