import React, { PropsWithChildren, useState } from 'react';
import ReactNativeModal from 'react-native-modal';

export type CModalRef = {
	show: () => void;
	close: () => void;
};

export type CModalProps = {} & PropsWithChildren;

const CModal = React.forwardRef<CModalRef, CModalProps>((props, ref) => {
	const [isVisible, setIsVisible] = useState(false);

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
	return (
		<ReactNativeModal
			isVisible={isVisible}
			statusBarTranslucent
			onBackdropPress={close}
			className="mx-11 items-center"
			animationIn={'fadeInUp'}
			animationOut={'fadeOutDown'}
			presentationStyle="fullScreen"
		>
			{props.children}
		</ReactNativeModal>
	);
});

export default CModal;
