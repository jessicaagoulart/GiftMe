import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Menu from "../Menu";
import { ArrowLeft } from "react-native-feather";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/core";

export default function Cabecalho({ title, goBack }) {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.containerInside}>
				{goBack && (
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<ArrowLeft stroke={colors.mainPink} />
					</TouchableOpacity>
				)}

				<Text style={styles.title}>{title}</Text>
			</View>
			<Menu />
		</View>
	);
}
