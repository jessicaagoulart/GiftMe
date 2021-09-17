import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default function EmailInput({
	type,
	placeholder,
	onChangeText,
	value,
	maxLength,
	placeholderTextColor,
}) {
	return (
		<TextInput
			type={type}
			placeholder={placeholder}
			placeholderTextColor={placeholderTextColor}
			style={styles.input}
			onChangeText={onChangeText}
			value={value}
			maxLength={maxLength}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		fontSize: 15,
		width: 300,
		height: 50,
		marginBottom: 10,
		borderBottomColor: colors.mainPink,
		borderBottomWidth: 1,
		paddingHorizontal: 10,
	},
});
