import React from "react";
import { SafeAreaView } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "../NewEvent/style";
import StepForm from "../../components/StepForm";
import Cabecalho from "../../components/Cabecalho";

export default function NewEvent({ route }) {
	return (
		<SafeAreaView style={styles.container}>
			<Cabecalho title="Meu evento" />
			<StepForm userId={route.params.userId} />
		</SafeAreaView>
	);
}
