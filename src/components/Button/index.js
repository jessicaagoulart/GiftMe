import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./style";

function Button({ name, color, size, disabled, onPress }) {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={onPress}
			disabled={disabled}
			style={styles.editButton}
		>
			<Feather name={name} color={color} size={size} />
		</TouchableOpacity>
	);
}

export default Button;
