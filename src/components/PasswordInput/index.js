import React, { useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Eye, EyeOff } from "react-native-feather";
import { colors } from "../../utils/colors";

export default function PasswordInput({
	type,
	placeholder,
	onChangeText,
	value,
	maxLength,
}) {
	const [visible, setVisible] = useState(false);

	function toggleEye() {
		setVisible(() => !visible);
	}
	return (
		<View style={styles.container}>
			<TextInput
				type={type}
				secureTextEntry={visible ? false : true}
				placeholder={placeholder}
				style={styles.input}
				onChangeText={onChangeText}
				value={value}
				maxLength={maxLength}
			/>

			{!visible && (
				<TouchableOpacity onPress={toggleEye}>
					<Eye stroke={colors.mainPink} size={15} />
				</TouchableOpacity>
			)}
			{visible && (
				<TouchableOpacity onPress={toggleEye}>
					<EyeOff stroke={colors.mainPink} size={15} />
				</TouchableOpacity>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 50,
		flexDirection: "row",
		borderBottomColor: colors.mainPink,
		borderBottomWidth: 1,
		marginBottom: 10,
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	input: {
		fontSize: 15,
	},
});
