import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
} from "react-native";
import database from "../../config/firebaseconfig";
import styles from "../NewEvent/style";
import StepForm from "../../components/StepForm";
import Cabecalho from "../../components/Cabecalho";

export default function NewEvent({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Cabecalho title="Meu evento" />
				<StepForm navigation={navigation} />
			</ScrollView>
		</SafeAreaView>
	);
}
