import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style.js";

export default function Edit({ navigation, route }) {
	const [eventTitleEdit, setEventTitleEdit] = useState(route.params.name);
	const idEvent = route.params.id;

	function editEvent() {
		database.collection("Eventos").doc(idEvent).update({
			name: eventTitleEdit,
		});
		navigation.navigate("Events");
	}

	return (
		<View style={styles.container}>
			<Text style={styles.myEvent}>Editar Evento</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite o nome do evento"
				onChangeText={setEventTitleEdit}
				value={eventTitleEdit}
			/>
			<TouchableOpacity
				style={styles.saveButton}
				onPress={() => {
					editEvent();
				}}
			>
				<Text style={styles.textButton}>Salvar</Text>
			</TouchableOpacity>
		</View>
	);
}
