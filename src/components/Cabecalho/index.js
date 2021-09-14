import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import Menu from "../Menu";

export default function Cabecalho({ title }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Menu />
		</View>
	);
}
