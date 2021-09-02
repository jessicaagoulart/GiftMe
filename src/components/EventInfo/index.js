import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function EventInfo({ title }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}
