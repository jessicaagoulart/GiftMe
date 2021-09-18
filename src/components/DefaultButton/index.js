import React from "react";
import { ArrowLeft, ArrowRight } from "react-native-feather";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "./style";

export default function DefaultButton({ onPress, left, right, text, normal }) {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={styles.DefaultButton}
			onPress={onPress}
		>
			{left && (
				<View style={styles.containerText}>
					<ArrowLeft stroke="#fff" />
					<Text style={styles.textButton}>{text}</Text>
				</View>
			)}

			{right && (
				<View style={styles.containerText}>
					<Text style={styles.textButton}>{text}</Text>
					<ArrowRight stroke="#fff" />
				</View>
			)}

			{normal && <Text style={styles.textButton}>{text}</Text>}
		</TouchableOpacity>
	);
}
