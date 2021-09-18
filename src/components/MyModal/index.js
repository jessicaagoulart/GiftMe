import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styles from "./style.js";
import { AlertCircle, CheckCircle } from "react-native-feather";

function MyModal({
	title,
	button,
	button2,
	isVisible,
	onBackdropPress,
	onPress1,
	onPress2,
	dangerous,
	sucess,
}) {
	return (
		<Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
			<View style={styles.modal}>
				{(dangerous || sucess) && (
					<View style={dangerous ? styles.dangerous : styles.sucess}>
						{dangerous && <AlertCircle stroke="#fff" width={60} height={60} />}
						{sucess && <CheckCircle stroke="#fff" width={60} height={60} />}
					</View>
				)}
				<Text style={styles.textModal}>{title}</Text>
				<View style={styles.buttonContainer}>
					{button && (
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.buttonCancel}
							onPress={onPress1}
						>
							<Text style={styles.textButtonCancel}>{button}</Text>
						</TouchableOpacity>
					)}

					{button2 && (
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.buttonDelete}
							onPress={onPress2}
						>
							<Text style={styles.textButtonDelete}>{button2}</Text>
						</TouchableOpacity>
					)}
				</View>
			</View>
		</Modal>
	);
}

export default MyModal;
