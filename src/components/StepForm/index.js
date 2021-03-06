import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	Image,
	TouchableHighlight,
} from "react-native";
import styles from "./style";
import DATA from "../../utils/data";
import database from "../../config/firebaseconfig";
import { useNavigation } from "@react-navigation/core";
import ErrorMessage from "../ErrorMessage";
import { icons } from "../../utils/icons";
import produtos from "../../utils/produtos";
import DefaultButton from "../DefaultButton";
import { ProgressBar, Colors } from "react-native-paper";
import { colors } from "../../utils/colors";

export default function StepForm({ userId }) {
	const navigation = useNavigation();
	const [eventTitle, setEventTitle] = useState("");
	const [userName, setUserName] = useState("");
	const [icon, setIcon] = useState(icons["default"]);
	const [iconName, setIconName] = useState("default");
	const [page, setPage] = useState(1);
	const [error, setError] = useState(false);
	const [message, setMessage] = useState("");
	const [gifts, setGifts] = useState([]);

	function addEvent() {
		database.collection("Eventos").add({
			eventTitle: eventTitle,
			icon: iconName,
			userId: userId,
			userName: userName,
			gifts: gifts,
			avaiableGifts: gifts,
			unavaibleGifts: [],
		});

		navigation.navigate("Events");
	}

	function validation(pagina) {
		if (pagina == 1) {
			if (eventTitle == "" || userName == "") {
				setMessage("Campos obrigatórios");
				setError(() => true);
			} else {
				setError(() => false);
				setPage((currentPage) => currentPage + 1);
			}
		}

		if (pagina == 2) {
			setPage((currentPage) => currentPage + 1);
		}

		if (pagina == 3) {
			if (gifts.length == 0) {
				setMessage("Selecione pelo menos um item");
				setError(() => true);
			} else {
				setError(() => false);
				setPage((currentPage) => currentPage + 1);
			}
		}
	}

	return (
		<View style={styles.container}>
			{/* STEP 1 */}
			{page == 1 && (
				<View style={styles.step}>
					<ProgressBar progress={0.25} color={colors.mainPink} />
					<Text style={styles.title}>Nome do Evento</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite o nome do evento"
						onChangeText={setEventTitle}
						value={eventTitle}
					/>
					<Text style={styles.title}>Seu nome</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite o seu nome"
						onChangeText={setUserName}
						value={userName}
					/>
				</View>
			)}

			{/* STEP 2 */}
			{page == 2 && (
				<View style={styles.step}>
					<ProgressBar progress={0.5} color={colors.mainPink} />
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

			{/* STEP 3 */}
			{page == 3 && (
				<View style={styles.stepThree}>
					<View style={{ paddingHorizontal: 40 }}>
						<ProgressBar progress={0.75} color={colors.mainPink} />
					</View>
					<Text style={styles.label}>
						Monte sua lista de desejos de presente
					</Text>
					<FlatList
						contentContainerStyle={{
							alignItems: "center",
						}}
						showsVerticalScrollIndicator={false}
						numColumns={2}
						data={produtos}
						renderItem={({ item }) => (
							<TouchableOpacity
								activeOpacity={0.7}
								style={
									gifts.includes(item.id)
										? [styles.giftItemPressed, styles.giftItem]
										: styles.giftItem
								}
								onPress={() => {
									gifts.includes(item.id)
										? setGifts(gifts.filter((gift) => gift !== item.id))
										: setGifts((prev) => [...prev, item.id]);
								}}
							>
								<View>
									<Image style={styles.giftsImg} source={item.url} />
									<Text style={styles.giftTitle} numberOfLines={2}>
										{item.name}
									</Text>
									<Text style={styles.giftPrice}>R$ {item.price}</Text>
								</View>
							</TouchableOpacity>
						)}
						keyExtractor={(item) => item.name}
					/>
				</View>
			)}

			{/* STEP 4 */}
			{page == 4 && (
				<View style={styles.step}>
					<ProgressBar progress={1} color={colors.mainPink} />
					<View style={styles.stepFour}>
						<Text style={styles.label}>
							Prontinho! Você finalizou todos os passos para criar seu evento.
						</Text>

						{/* BOTAO SALVAR */}
						<DefaultButton
							normal
							text="Salvar"
							onPress={() => {
								addEvent();
							}}
						/>
					</View>
				</View>
			)}

			{/* MOSTRAR MENSAGEM DE ERRO */}
			<View style={{ height: 30 }}>
				{error && <ErrorMessage message={message} />}
			</View>

			{/* BOTOES DE AVANCAR E VOLTAR */}
			<View style={styles.containerStepsButton}>
				{page == 1 ? (
					<DefaultButton
						left
						text="Voltar"
						onPress={() => navigation.navigate("Events")}
					/>
				) : (
					<DefaultButton
						left
						text="Voltar"
						onPress={() => {
							setError(() => false);
							setPage((currentPage) => currentPage - 1);
						}}
					/>
				)}

				{page != 4 && (
					<DefaultButton
						right
						text="Avançar"
						onPress={() => {
							validation(page);
						}}
					/>
				)}
			</View>
		</View>
	);
}
