import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Pressable,
} from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style.js";
import Cabecalho from "../../components/Cabecalho";
import ErrorMessage from "../../components/ErrorMessage";
import Button from "../../components/Button";
import Modal from "react-native-modal";
import { Trash } from "react-native-feather";

export default function Edit({ navigation, route }) {
	const [eventTitleEdit, setEventTitleEdit] = useState(route.params.name);
	const [userNameEdit, setUserNameEdit] = useState(route.params.userName);
	const [error, setError] = useState(false);
	const idEvent = route.params.id;
	const [isModalVisible, setModalVisible] = useState(false);

	function editEvent() {
		database.collection("Eventos").doc(idEvent).update({
			eventTitle: eventTitleEdit,
			userName: userNameEdit,
		});
		navigation.navigate("Events");
	}

	function deleteEvent() {
		database.collection("Eventos").doc(idEvent).delete();
		toggleModal();
		navigation.navigate("Events");
	}

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

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

				{/* ERROR MESSAGE */}
				<View style={{ height: 35 }}>
					{error && <ErrorMessage message="Campos obrigatórios" />}
				</View>

				{/* SAVE BUTTON */}
				<Button
					onPress={() => {
						if (userNameEdit == "" || eventTitleEdit == "") {
							setError(true);
						} else {
							editEvent();
						}
					}}
					name="save"
					size={25}
					color="#fff"
				/>

				{/* DELETE BUTTON */}
				<Pressable
					style={styles.deleteButton}
					onPress={toggleModal}
					name="trash"
					size={25}
					color="#fff"
				>
					<Text style={styles.textDelete}>Excluir Evento</Text>
					<Trash width={20} height={20} color="#555" strokeWidth={2} />
				</Pressable>
			</View>

			{/* MODAL */}
			<Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
				<View style={styles.modal}>
					<Text style={styles.textModal}>
						Tem certeza que deseja excluir o evento?
					</Text>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.buttonModal} onPress={deleteEvent}>
							<Text style={styles.textButton}>Sim</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonModal} onPress={toggleModal}>
							<Text style={styles.textButton}>Nao</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
}
