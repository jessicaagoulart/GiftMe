import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	Image,
	TouchableHighlight,
	ScrollView,
} from "react-native";
import styles from "./style";
import DATA from "../../utils/data";
import database from "../../config/firebaseconfig";
import { useNavigation } from "@react-navigation/core";
import ErrorMessage from "../ErrorMessage";

export default function StepForm() {
	const navigation = useNavigation();
	const [eventTitle, setEventTitle] = useState("");
	const [icon, setIcon] = useState(34);
	const [iconName, setIconName] = useState();
	const [page, setPage] = useState(1);
	const [error, setError] = useState(false);

	function addEvent() {
		database.collection("Eventos").add({
			name: eventTitle,
			icon: iconName,
		});
		navigation.navigate("Events");
	}

	return (
		<View style={styles.container}>
			{page == 1 && (
				<View style={styles.stepOne}>
					<Text style={styles.title}>Nome do Evento</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite o nome do evento"
						onChangeText={setEventTitle}
						onBlur={() => {
							console.log(eventTitle);
							if (eventTitle == "") {
								setError(true);
							} else {
								setError(false);
							}
						}}
						value={eventTitle}
					/>
				</View>
			)}
			{page == 2 && (
				<View style={styles.stepTwo}>
					<View style={styles.myIcon}>
						<Image source={icon} resizeMode="contain" />
					</View>

					<Text style={styles.label}>Selecione um ícone para seu evento</Text>
					<FlatList
						contentContainerStyle={{ alignItems: "center" }}
						showsVerticalScrollIndicator={false}
						numColumns={3}
						data={DATA}
						renderItem={({ item }) => (
							<TouchableHighlight
								style={styles.icones}
								activeOpacity={1}
								underlayColor="#eee"
								onPress={() => {
									setIcon(() => item.url);
									setIconName(() => item.name);
								}}
							>
								<Image source={item.url} resizeMode="contain" />
							</TouchableHighlight>
						)}
						keyExtractor={(item) => item.name}
					/>
				</View>
			)}
			{page != 2 && (
				<View style={{ height: 30 }}>
					{error && <ErrorMessage message="Campo obrigatório" />}
				</View>
			)}

			{page != 3 && (
				<View style={styles.containerStepsButton}>
					{page == 1 ? (
						<TouchableOpacity
							style={styles.stepButton}
							onPress={() => navigation.navigate("Events")}
						>
							<Text style={styles.textButton}>Voltar</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							style={styles.stepButton}
							onPress={() => {
								setPage((currentPage) => currentPage - 1);
							}}
						>
							<Text style={styles.textButton}>Voltar</Text>
						</TouchableOpacity>
					)}

					<TouchableOpacity
						style={styles.stepButton}
						onPress={() => {
							console.log(eventTitle);
							if (eventTitle == "") {
								setError(() => true);
							} else {
								setPage((currentPage) => currentPage + 1);
							}
						}}
					>
						<Text style={styles.textButton}>Avançar</Text>
					</TouchableOpacity>
				</View>
			)}

			{page == 3 && (
				<TouchableOpacity
					style={styles.saveButton}
					onPress={() => {
						addEvent();
					}}
				>
					<Text style={styles.textButton}>Salvar</Text>
				</TouchableOpacity>
			)}
		</View>
	);
}
