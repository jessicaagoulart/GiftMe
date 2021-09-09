import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style.js";
import Cabecalho from "../../components/Cabecalho";
import ErrorMessage from "../../components/ErrorMessage";

export default function Edit({ navigation, route }) {
	const [eventTitleEdit, setEventTitleEdit] = useState(route.params.name);
	const [userNameEdit, setUserNameEdit] = useState(route.params.userName);
	const [error, setError] = useState(false);

	const idEvent = route.params.id;

	function editEvent() {
		database.collection("Eventos").doc(idEvent).update({
			eventTitle: eventTitleEdit,
		});
		navigation.navigate("Events");
	}

	return (
		<View style={styles.container}>
			<Cabecalho title="Editar Eventos" />

			<View style={styles.containerForm}>
				<Text style={styles.title}>Nome do Evento</Text>
				<TextInput
					style={styles.input}
					placeholder="Digite o nome do evento"
					onChangeText={setEventTitleEdit}
					onBlur={() => {
						if (userNameEdit == "" || eventTitleEdit == "") {
							setError(true);
						} else {
							setError(false);
						}
					}}
					value={eventTitleEdit}
				/>
				<Text style={styles.title}>Seu nome</Text>
				<TextInput
					style={styles.input}
					placeholder="Digite o seu nome"
					onChangeText={setUserNameEdit}
					onBlur={() => {
						if (userNameEdit == "" || eventTitleEdit == "") {
							setError(true);
						} else {
							setError(false);
						}
					}}
					value={userNameEdit}
				/>

				<View style={{ height: 35 }}>
					{error && <ErrorMessage message="Campos obrigatórios" />}
				</View>

				<TouchableOpacity
					style={styles.saveButton}
					onPress={() => {
						if (userNameEdit == "" || eventTitleEdit == "") {
							setError(true);
						} else {
							editEvent();
						}
					}}
				>
					<Text style={styles.textButton}>Salvar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
