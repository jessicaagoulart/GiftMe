import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./style.js";

function MyModal({
	title,
	button,
	button2,
	isVisible,
	onBackdropPress,
	onPress1,
	onPress2,
}) {
	return (
		<Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
			<View style={styles.modal}>
				<Text style={styles.textModal}>{title}</Text>
				<View style={styles.buttonContainer}>
					{button && (
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.buttonModal}
							onPress={onPress1}
						>
							<Text style={styles.textButton}>{button}</Text>
						</TouchableOpacity>
					)}

					{button2 && (
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.buttonModal}
							onPress={onPress2}
						>
							<Text style={styles.textButton}>{button2}</Text>
						</TouchableOpacity>
					)}
				</View>
			</View>
		</Modal>
	);
}

export default MyModal;
