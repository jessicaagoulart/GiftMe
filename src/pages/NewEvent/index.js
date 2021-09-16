import React from "react";
import { SafeAreaView } from "react-native";
import styles from "../NewEvent/style";
import StepForm from "../../components/StepForm";
import Cabecalho from "../../components/Cabecalho";

export default function NewEvent({ route }) {
	return (
		<SafeAreaView style={styles.container}>
			<Cabecalho title="Meu evento" goBack />
			<StepForm userId={route.params.userId} />
		</SafeAreaView>
	);
}
