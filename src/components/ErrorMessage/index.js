import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./style";

export default function ErrorMessage({ message }) {
	return (
		<View style={styles.container}>
			<Feather name="alert-circle" color="#666" size={20} />
			<Text style={styles.message}>{message}</Text>
		</View>
	);
}
