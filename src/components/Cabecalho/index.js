import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

export default function Cabecalho({ title }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Feather name="menu" size={25} color="#333" />
		</View>
	);
}
